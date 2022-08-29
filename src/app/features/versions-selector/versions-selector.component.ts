import { Component } from '@angular/core';
import { Version } from 'src/app/core/enums/versions';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-versions-selector',
  templateUrl: './versions-selector.component.html',
  styleUrls: ['./versions-selector.component.scss']
})
export class VersionsSelectorComponent {

  public versions = Object.values(Version);
  constructor(
    private dialogRef: MatDialogRef<VersionsSelectorComponent>,
    private router: Router
  ) { }

  public goToVersion(version: string): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate([version.toLocaleLowerCase()]);
    this.closeDialog();
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
