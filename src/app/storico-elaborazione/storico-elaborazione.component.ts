import { Elaborazione, StoricoElab } from './../_models/Elaborazione';
import { MatTableDataSource } from '@angular/material/table';
import { ElaborazioniService } from './../_services/elaborazioni.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storico-elaborazione',
  templateUrl: './storico-elaborazione.component.html',
  styleUrls: ['./storico-elaborazione.component.css']
})
export class StoricoElaborazioneComponent implements OnInit {
  
  idElaborazione!:string;
  displayedColumns: string[] = ['stato', 'dataInizio', 'dataFine', 'DurMedia', 'NumSegn','Utente'];
  dataSources: MatTableDataSource<StoricoElab> = new MatTableDataSource();
  
  constructor(private elabSvc: ElaborazioniService,private route: ActivatedRoute, private router: Router) {
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
        console.log(this.dataSources);
      },
      error => {
        console.log('Emitting error:', error);
      }
    );
  }
}
