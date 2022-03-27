import { Component, Input, AfterViewInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Banner } from 'src/app/core/models/banner.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: [ './banner.component.scss' ],
})
export class BannerComponent implements AfterViewInit {

  @Input() banner?: Banner;
  showAd = environment.adsense.show;

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      try {
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({
          overlays: {bottom: true},
        });

        (window as any).adsbygoogle = adsbygoogle;
      } catch (e) {
        console.error(e);
      }
    }, 0);
  }

}