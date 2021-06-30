import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-call-slide',
  templateUrl: './pickup-call-slide.component.html',
  styleUrls: ['./pickup-call-slide.component.scss'],
})
export class PickupCallSlideComponent {

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
