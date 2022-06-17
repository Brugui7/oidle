import { Component, OnInit } from '@angular/core';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from './core/services/data.service';
import { StatsDialogComponent } from './features/stats-dialog/stats-dialog.component';
import { VersionsSelectorComponent } from './features/versions-selector/versions-selector.component';

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
    this.dialog.open(DialogComponent, {
      data: {
        title: '¿CÓMO SE JUEGA?',
        text: '🎧 Escucha parte de la canción, después encuentra el artista y título filtrando' +
          ' en la barra de búsqueda. ' +
          '\n\n⏩ Las ampliaciones desbloquean más tiempo de la canción pero restan un intento.' +
          '\n\n👍 ¡Contesta en el menor número de intentos posibles y comparte tu resultado!' +
          '\n\n☀️ Entra cada día para una nueva canción'
      },
    });
  }

  public openInfoDialog(): void {
    this.dialog.open(DialogComponent, {
      data: {
        title: 'SABER MÁS',
        text: 'Este proyecto es un homenaje a Wordle basado en Heardle.' +
          '\n\nHa sido desarrollado por Brugui (https://brugui.dev) y diseñado por Rul.'
      },
    });
  }

  public openVersionsDialog(): void {
    this.dialog.open(VersionsSelectorComponent);
  }

  public openStatsDialog(): void {
    this.dialog.open(StatsDialogComponent);
  }
}
