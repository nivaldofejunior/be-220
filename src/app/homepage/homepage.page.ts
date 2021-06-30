import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage {
  constructor() {}

  irMeuCorpo() {
    console.log('Ir meu corpo');
  }

  irObjetivos() {
    console.log('Ir para Objetivos e Pesquisas');
  }

  verNotificacoes() {
    console.log('Ver Notificações');
  }

  verPersonalOnline() {
    console.log('Verificar Personal Online');
  }

  verProgramas() {
    console.log('Verificar Programas');
  }

  meuPerfil() {
    console.log('Ir para perfil');
  }
}
