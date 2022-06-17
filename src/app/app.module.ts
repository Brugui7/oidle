import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './features/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputResultComponent } from './shared/input-result/input-result.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DialogComponent } from './shared/dialog/dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BannerComponent } from './shared/banner/banner.component';
import { StatsDialogComponent } from './features/stats-dialog/stats-dialog.component';
import { BarChartModule } from '@swimlane/ngx-charts';
import { VersionsSelectorComponent } from './features/versions-selector/versions-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    InputResultComponent,
    DialogComponent,
    BannerComponent,
    StatsDialogComponent,
    VersionsSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    BarChartModule,
  ],
  providers: [HttpClientModule, MatDialogModule, MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
