import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Procedura, Elaborazione } from '../_models/Elaborazione';
import { ElaborazioniService } from '../_services/elaborazioni.service';

@Component({
  selector: 'app-storico-elaborazione',
  templateUrl: './storico-elaborazione.component.html',
  styleUrls: ['./storico-elaborazione.component.css']
})
export class StoricoElaborazioneComponent implements OnInit {
  nomeProc: string = '';
  idElaborazione!: string;
  displayedColumns: string[] = ['stato', 'dataInizio', 'dataFine', 'NumSegn', 'Utente'];
  dataSources: MatTableDataSource<Elaborazione> = new MatTableDataSource();

  constructor(private elabSvc: ElaborazioniService, private route: ActivatedRoute, private router: Router) {
    this.service = elabSvc;
  }

  service: ElaborazioniService;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idElaborazione = params.idElaborazione;
      this.getAll();
    });
  }

  getAll() {
    this.service.getStorico().subscribe(
      listBean => {
        this.dataSources.data = listBean.data;
        this.nomeProc = listBean.data[0].TITOLO_PROCEDURA;
      },
      error => {
        console.log('Emitting error:', error);
      }
    );
  }
}
