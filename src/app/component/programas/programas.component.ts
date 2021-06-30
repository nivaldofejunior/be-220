import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.scss'],
})
export class ProgramasComponent {

  constructor() { }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
   // autoplay: true, //deixa o slide passando automaticamente
  }

  irCrossfit(){
    console.log("Clicou")
  }

  irNatacao(){
    console.log("Clicou")
  }

  irLevantamento(){
    console.log("Clicou")
  }

  irSpinning(){
    console.log("Clicou")
  }

  irYoga(){
    console.log("Clicou")
  }

}
