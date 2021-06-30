import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Meu Perfil', url: '/pages/perfil', icon: 'person' },
    
    { title: 'Meus treinos', url: '/pages/meustreinos', icon: 'trophy' },

    { title: 'Entre em contato', url: '/pages/contato', icon: 'mail' },
    
  ];
  constructor(
    public alertCtrl: AlertController,

  ) {}

  async alertaSair() {
    const botaoalerta = await this.alertCtrl.create({
      header:"Sair?",
      message:"Desaja realmente sair?",

      buttons:[
        {
          text: "Sair",
          handler:()=>{

          },    

        },
        {
          text:"Cancelar",
          handler:()=>{

          }
        }
      ]
    })
    botaoalerta.present();
  }
}
