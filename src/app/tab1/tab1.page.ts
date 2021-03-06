import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  titulofilme = 'VideosAPP';
  //LISTAGEM DE FILMES, INFORMAÇÕES DA LISTAGEM VEM DO MODEL IFilmes.model.ts//

  listaVideos: IFilme[] = [
    {
      nome: 'Homem Aranha',
      lancamento: '16/12/2021',
      duracao: '2h 28m',
      classificacao: 80,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      generos: ['Ação', 'Aventura'],
      pagina: '/mortal-kombat'
    },
    {
      nome: 'Megalodon',
      lancamento: '00/00/2018',
      duracao: '1h 26m',
      classificacao: 90,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hES2eVAbVt08JJTqgu3jmI34Yxx.jpg',
      generos: ['Ação', 'Ficção', 'científica', 'Terror', 'CinemaTV'],
      pagina: '/liga-justica'
    }

  ];

  constructor(public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirFilme(filme: IFilme) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');

  }



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
      color: 'orange'
    });
    toast.present();
  }

}
