import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { ElaborazioniService } from '../_services/elaborazioni.service';
import { Elaborazione } from '../_models/Elaborazione';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private elabSvc: ElaborazioniService,private router: Router) {
    this.service = elabSvc;
  }

  service: ElaborazioniService;
  displayedColumns: string[] = ['select', 'procedura', 'stato', 'dataInizio', 'dataFine', 'DurMedia', 'NumSegn', 'button'];
  dataSources: MatTableDataSource<Elaborazione>[] = [];
  selection = new SelectionModel<Elaborazione>(true, []);

  isAllSelected() {
    //const numSelected = this.selection.selected.length;
    //const numRows = this.dataSource.data.length;
    //return numSelected === numRows;
    return false;
  }

  masterToggle() {
    //this.isAllSelected() ?
    //    this.selection.clear() :
    //    this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(
      listBean => {
        this.dataSources = [];
        const albero: Elaborazione[][] = [];
        let sublist: Elaborazione[];
        let sezioneCorrente = '';
        listBean.data.forEach(x => {
          if (x.SEZIONE !== sezioneCorrente) {
            sezioneCorrente = x.SEZIONE;
            sublist = [x];
            albero.push(sublist);
          } else {
            sublist.push(x);
          }
        });
        // ORA albero contiene tutte le sezioni
        albero.forEach(l => {
          const datasource = new MatTableDataSource<Elaborazione>(l);
          this.dataSources.push(datasource);
        });
        console.log(this.dataSources[0].data);
      },
      error => {
        console.log('Emitting error:', error);
      }
    );
  }

  addStorico(data: any) {
    console.log(data);
    this.router.navigate(['storico/' + data]);
  }
}
