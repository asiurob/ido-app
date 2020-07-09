import { Component, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NewAccountDialog } from '@dialogs/new-account/new-account.component';
import { LoginDialog } from '@dialogs/login/login.component';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { LostAccountDialog } from '@dialogs/lost-account/lost-account.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  @ViewChild('navigator') navigator: MatSidenav;

  subs: Subscription[] = [];
  query: MediaQueryList;
  private queryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public dialog: MatDialog) {
    this.query = media.matchMedia('(max-width: 576px)');
    this.queryListener = () => changeDetectorRef.detectChanges();
    this.query.addListener(this.queryListener);
  }

  ngOnDestroy(): void {
    this.query.removeListener(this.queryListener);
    this.subs.map( s => s.unsubscribe() );
  }

  register(): void {
    this.navigator.close();
    const ref = this.dialog.open( NewAccountDialog, this.loadDialogOptions() );

    const s = ref.afterClosed().subscribe(
      ( session: boolean ) => {
        if ( session ) {
          this.login();
        }
      }
    );
    this.subs.push( s );
  }

  lostAccount( email: string ): void {
    this.navigator.close();
    const params = { email };
    const ref = this.dialog.open( LostAccountDialog, this.loadDialogOptions( params ) );
    const s = ref.afterClosed().subscribe(
      ( ret: boolean ) => {
        if ( ret ) {
          this.login();
        }
      }
    );
    this.subs.push( s );
  }

  login(): void {
    this.navigator.close();
    const ref = this.dialog.open( LoginDialog, this.loadDialogOptions() );

    const s = ref.afterClosed().subscribe(
      ( data: any ) => {
        if ( data ) {
          if ( data.type === 'lost' ) {
            this.lostAccount( data.email );
          } else if ( data.type === 'register' ) {
            this.register();
          }
        }
      }
    );
    this.subs.push( s );
  }

  loadDialogOptions( data?: any ): MatDialogConfig {
    const options     = new MatDialogConfig();
    options.autoFocus = false;
    options.width     = 'auto';
    options.minWidth  = this.query.matches ? '90vw' : '25vw';
    options.data      = data;
    return options;
  }


}
