import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redessociais',
  templateUrl: './redessociais.component.html',
  styleUrls: ['./redessociais.component.scss'],
})
export class RedessociaisComponent {

  constructor() { }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay: true, //deixa o slide passando automaticamente
  }

}
