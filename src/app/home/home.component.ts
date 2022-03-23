import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { ElaborazioniService } from '../_services/elaborazioni.service';
import { Elaborazione } from '../_models/Elaborazione';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private elabSvc: ElaborazioniService, private router: Router) {
    this.service = elabSvc;
  }

  service: ElaborazioniService;
  displayedColumns: string[] = ['select', 'procedura', 'stato', 'dataInizio', 'dataFine', 'DurMedia', 'NumSegn', 'button'];
  dataSources: MatTableDataSource<Elaborazione>[] = [];
  selections: SelectionModel<Elaborazione>[] = [];

  // NOTA: METODO CONTORTO, CREARE NUOVO COMPONENT TABELLINA

  getDatasource(sezione: string): MatTableDataSource<Elaborazione> {
    return this.dataSources.find(x => x.data[0].SEZIONE === sezione)!;
  }

  getSelect(sezione: string): SelectionModel<Elaborazione> {
    const index = this.dataSources.findIndex(x => x.data[0].SEZIONE === sezione);
    return this.selections[index];
  }

  isAllSelected(sezione: string) {
    const datasource = this.getDatasource(sezione);
    const selection = this.getSelect(sezione);
    if (datasource && selection) {
      const numSelected = selection.selected.length;
      const numRows = datasource.data.length;
      return numSelected === numRows;
    }
    return false;
  }

  masterToggle(sezione: string) {
    const selection = this.getSelect(sezione);
    const dataSource = this.getDatasource(sezione);
    if (selection && dataSource) {
      if (this.isAllSelected(sezione)) {
        selection.clear();
      } else {
        dataSource.data.forEach(row => selection.select(row));
      }
    }
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
          this.selections.push(new SelectionModel<Elaborazione>(true, []));
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

  eseguiProcedure() {
    this.router.navigate(['lancia-procedure']); // TODO ovviamente dovrei passare dei parametri
  }

  bloccaProcedure() {
    this.selections.forEach(s => {
      s.selected.forEach(elab => {
        if (elab.STATO === 'INITIAL') {
          elab.STATO = '';
        }
      });
    });
  }
}
