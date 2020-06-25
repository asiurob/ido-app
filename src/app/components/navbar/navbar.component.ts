import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {

  query: MediaQueryList;
  private queryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.query = media.matchMedia('(max-width: 576px)');
    this.queryListener = () => changeDetectorRef.detectChanges();
    this.query.addListener(this.queryListener);
  }

  ngOnDestroy(): void {
    this.query.removeListener(this.queryListener);
  }


}
