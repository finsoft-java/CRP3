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
  constructor(private elabSvc: ElaborazioniService) {
    this.service = elabSvc;
  }

  service: ElaborazioniService;
  displayedColumns: string[] = ['select', 'procedura', 'stato', 'dataInizio', 'dataFine', 'DurMedia', 'NumSegn', 'button'];
  dataSource = new MatTableDataSource<Elaborazione>();
  selection = new SelectionModel<Elaborazione>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe(
      listBean => {
        this.dataSource.data = listBean.data;
        console.log(this.dataSource.data);
      },
      error => {
        console.log('Emitting error:', error);
      }
    );
  }

  addStorico(data: any) {
    console.log(data);
  }
}
