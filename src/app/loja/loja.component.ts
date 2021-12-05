import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent{

   //produtos: Array<string> = [];
   produtos:any = [];

    AdicinarAbacate(): void{
      //Adiciona uma banana ao componente
      this.produtos.push(
        {
          'icon':'icon_abacate.png',
          'nome':'Abacate'
        }
      );
    }
    
    AdicinarAlface(): void{
      //Adiciona uma banana ao componente
      this.produtos.push(
        {
          'icon':'icon_alface.png',
          'nome':'Alface'
        }
      );
    }

    AdicinarBananas(): void{
      //Adiciona uma banana ao componente
      this.produtos.push(
        {
          'icon':'icon_banana.png',
          'nome':'Banana'
        }
      );
    }

    AdicinarCenoura(): void{
      //Adiciona uma banana ao componente
      this.produtos.push(
        {
          'icon':'icon_cenoura.png',
          'nome':'Cenoura'
        }
      );
    }

    AdicinarMaca(): void{
      //Adiciona uma banana ao componente
      this.produtos.push(
        {
          'icon':'icon_maca.png',
          'nome':'Maçã'
        }
      );
    }
  }
