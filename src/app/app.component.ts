import { Component, OnInit } from '@angular/core';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'oidle';

  constructor(
    public dialog: MatDialog,
    public dataService: DataService
  ) {}

  ngOnInit(): void {
    if (this.dataService.isFirstTime()) {
      this.openHelpDialog();
      this.dataService.setFirstTime(false);
    }
  }

  public openHelpDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: '¿CÓMO SE JUEGA?',
        text: '🎧 Escucha parte de la canción, después encuentra el artista y título filtrando' +
          ' en la barra de búsqueda. ' +
          '\n\n⏩ Fallos o ampliaciones desbloquean más tiempo de la canción.' +
          '\n\n👍 ¡Contesta en el menor número de intentos posibles y comparte tu resultado!'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public openInfoDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'SABER MÁS',
        text: 'Este proyecto es un homenaje a Wordle basado en Heardle.' +
          '\n\nHa sido desarrollado por Brugui (https://brugui.dev) y diseñado por Rul' +
          '\n\nSi quieres apoyar al mantenimiento del domino puedes hacerlo a través de ' +
          'https://paypal.me/brugui'
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
