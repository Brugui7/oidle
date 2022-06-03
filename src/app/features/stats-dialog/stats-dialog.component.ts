import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Stats } from 'src/app/core/models/stats.model';
import { MAX_TRIES } from 'src/app/core/constants/common.consts';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stats-dialog',
  templateUrl: './stats-dialog.component.html',
  styleUrls: [ './stats-dialog.component.scss' ],
})

export class StatsDialogComponent implements OnInit {

  public stats: Stats | null = null;
  public triesByGameChartData: any = null;

  constructor(
    public dialogRef: MatDialogRef<StatsDialogComponent>,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.stats = this.dataService.getStats();
    this.adaptStatsToChart();
  }

  /**
   * Accepts dynamic tries
   */
  private adaptStatsToChart(): void {
    if (!this.stats || !this.stats.triesByGames) {
      return;
    }

    const triesByGameFormatted = [ ...Array(MAX_TRIES + 1).keys() ].map(idx => {
      idx++;
      return {
        name: `${idx}`,
        value: this.stats!.triesByGames.has(idx) ?  this.stats!.triesByGames.get(idx) : 0
      }
    });

    this.triesByGameChartData = {
      showXAxis: true,
      showYAxis: true,
      gradient: false,
      showLegend: false,
      showXAxisLabel: true,
      xAxisLabel: 'Intentos',
      showYAxisLabel: true,
      yAxisLabel: 'Partidas',
      data: triesByGameFormatted,
      showGridLines: false,
      colorScheme: {
        domain: [ ...[...Array(MAX_TRIES).keys()].map(_ => '#5AD37B'), '#f35c5c']
      }
    };
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
