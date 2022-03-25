import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthenticationService } from './_services/authentication.service';
import { DatiComuni, User } from './_models';
import { AzioniService } from './_services/azioni.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  routerFrontend: Router;
  showFiller = false;
  isLogged = false;
  subscription: Subscription = new Subscription();
  currentUserSubject: User = new User();
  menuDisabled = true;
  ruoloUtente: string = '';
  datiComuni?: DatiComuni;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private azioniService: AzioniService) {
    this.routerFrontend = router;
  }

  ngOnInit(): void {
    const url = window.location.href.endsWith('login');
    let token = localStorage.getItem('currentUser');
    this.ruoloUtente = localStorage.getItem('role') || '';

    this.subscription = this.authenticationService.nameChange.subscribe((value) => {
      this.currentUserSubject.username = value;
    });
    if (token == null) {
      token = '';
    }
    this.currentUserSubject.username = token;
    if (!url) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.router.events.pipe(filter((evt: Event) => evt instanceof NavigationEnd)).subscribe((evt: Event) => {
      this.menuDisabled = ((evt as NavigationEnd).url === '/login');
      this.ruoloUtente = localStorage.getItem('role') || '';
    });

    this.azioniService.getDatiComuni().subscribe(response => { this.datiComuni = response.value; });
  }

  logout(): void {
    this.authenticationService.logout();
  }

  changeIcon(): void {
  }

  inviaB2ween() {
    confirm(`Confermare l\'invio della versione ${this.datiComuni?.versione} a B2WEEN?`);
  }

  inviaTdB() {
    confirm(`Confermare l\'invio della versione ${this.datiComuni?.versione} al Tableau de Board?`);
  }
}
