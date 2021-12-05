import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Variaveis que contraleam a visibilidade dos componentes
  lojaVisivel: boolean = true;
  estoqueVisivel: boolean = false;

  MostrarLoja(){
    //Apresenta a loja e remove o Estoque
    this.lojaVisivel = true;
    this.estoqueVisivel = false;
  }

  MostrarEstoque(){
     //Apresenta o Estoque e remove a Loja
     this.lojaVisivel = false;
     this.estoqueVisivel = true;
  }

}
