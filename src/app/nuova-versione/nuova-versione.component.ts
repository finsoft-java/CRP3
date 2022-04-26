import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { NuovaVersioneService } from '../_services/nuovaVersione.service';
import { NuovaVersione } from '../_models/NuovaVersione';

@Component({
  selector: 'app-nuova-versione',
  templateUrl: './nuova-versione.component.html',
  styleUrls: ['./../shared.css', './nuova-versione.component.css']
})
export class NuovaVersioneComponent implements OnInit {


  constructor(private nvs: NuovaVersioneService, private router: Router) {
    this.service = nvs;
  }

  service: NuovaVersioneService;
  displayedColumns: string[] = ['procedura', 'stato', 'dataInizio', 'dataFine', 'DurMedia', 'NumSegn'];
  dataSource: MatTableDataSource<NuovaVersione> = new MatTableDataSource<NuovaVersione>();
  selections: SelectionModel<NuovaVersione>[] = [];
  proceduraInCorso = 'Nessun Processo';
  
  // TODO caricare da webservice e refreshare periodicamente tutto
  // NOTA: METODO CONTORTO, CREARE NUOVO COMPONENT TABELLINA

  getDatasource(titolo: string): MatTableDataSource<NuovaVersione> {
    return this.dataSource;
  }


  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(
      listBean => {
        let sublist :NuovaVersione[] = [];
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
