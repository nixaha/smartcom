import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-llamada',
  templateUrl: 'llamada.html',
})
export class LlamadaPage {
  home: any = HomePage; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LlamadaPage');
  }

}
