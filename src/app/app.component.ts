import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeroUm:number = 2;
  numeroDois:number = 10;
  operacao:string = 'SOMA';
  resultado:any ;

  trocaDia(){
    console.log("FUI APERTADO");
    var corpo = document.getElementById("corpo");
    corpo.classList.toggle("dia");
    corpo.classList.toggle("noite");
  }

  constructor(private http : HttpClient){}

  onClickExecutarOperacao(){
    const calculo = {
      operacao  : this.operacao,
      numeroUm  : this.numeroUm,
      numeroDois: this.numeroDois
    };

    this.http.post('http://localhost:9090/api/calculadora',calculo).subscribe(response => this.resultado = response);
  }
}
