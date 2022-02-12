import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirALERTA() {
    const alert = await this.alertController.create({
      cssClass: 'alerta_favoritar',
      header: 'Favoritar Filme',
      message: 'Deseja favoritar esse filme ?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar',
          id: 'confirm-button',
          handler: () => {
            this.toastfilmeFAVORITADO();

          }
        }
      ]
    });

    await alert.present();
  }

  async toastfilmeFAVORITADO() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos',
      duration: 2000,
      color:'orange'
    });
    toast.present();
  }

}
