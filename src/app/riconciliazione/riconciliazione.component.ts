import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { RiconciliazioneService } from '../_services/riconciliazione.service';
import { Riconciliazione } from '../_models/Riconciliazione';

@Component({
  selector: 'app-riconciliazione',
  templateUrl: './riconciliazione.component.html',
  styleUrls: ['./../shared.css', './riconciliazione.component.css']
})
export class RiconciliazioneComponent implements OnInit {

  constructor(private rs: RiconciliazioneService, private router: Router) {
    this.service = rs;
  }

  service: RiconciliazioneService;
  displayedColumns: string[] = ['procedura', 'stato', 'dataInizio', 'dataFine', 'DurMedia', 'NumSegn'];
  dataSource: MatTableDataSource<Riconciliazione> = new MatTableDataSource<Riconciliazione>();
  selections: SelectionModel<Riconciliazione>[] = [];
  proceduraInCorso = 'Nessun Processo';

  getDatasource(titolo: string): MatTableDataSource<Riconciliazione> {
    return this.dataSource;
  }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(
      listBean => {
        let sublist :Riconciliazione[] = [];
        listBean.data.forEach(x => {
            sublist.push(x);
          });
          this.dataSource.data = sublist;
          console.log(this.dataSource);
        },
      error => {
        console.log('Emitting error:', error);
      }
    );
  }
}
