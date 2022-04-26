import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { NuovoPeriodoService } from '../_services/nuovoPeriodo.service';
import { NuovoPeriodo } from '../_models/NuovoPeriodo';

@Component({
  selector: 'app-nuovo-periodo',
  templateUrl: './nuovo-periodo.component.html',
  styleUrls: ['./../shared.css', './nuovo-periodo.component.css']
})
export class NuovoPeriodoComponent implements OnInit {


  constructor(private nps: NuovoPeriodoService, private router: Router) {
    this.service = nps;
  }

  service: NuovoPeriodoService;
  displayedColumns: string[] = ['procedura', 'stato', 'dataInizio', 'dataFine', 'DurMedia', 'NumSegn'];
  dataSource: MatTableDataSource<NuovoPeriodo> = new MatTableDataSource<NuovoPeriodo>();
  selections: SelectionModel<NuovoPeriodo>[] = [];
  proceduraInCorso = 'Nessun Processo'; // TODO caricare da webservice e refreshare periodicamente tutto

  // NOTA: METODO CONTORTO, CREARE NUOVO COMPONENT TABELLINA

  getDatasource(titolo: string): MatTableDataSource<NuovoPeriodo> {
    return this.dataSource;
  }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(
      listBean => {
        let sublist :NuovoPeriodo[] = [];
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
