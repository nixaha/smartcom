import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LlamadaPage } from '../llamada/llamada';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  llamada: any = LlamadaPage;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {
    }
      showConfirm() {
        let alert = this.alertCtrl.create({
          title: '¿Está usted seguro que desea llamar a esta Residencia?',
          message: '',
          buttons: [
            {
              text: 'Aceptar',
              role: 'Aceptar',
              handler: () => {
                console.log('Aceptar');
                this.navCtrl.push(LlamadaPage);
              }
            },
            {
              text: 'Cancelar',
              handler: () => {
                console.log('Cancelar');
              }
            }
          ]
        });
        alert.present();
      }
    }
