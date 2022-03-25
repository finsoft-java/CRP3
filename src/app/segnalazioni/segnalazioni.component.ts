import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Segnalazione } from '../_models';
import { ElaborazioniService } from '../_services/elaborazioni.service';

@Component({
  selector: 'app-segnalazioni',
  templateUrl: './segnalazioni.component.html',
  styleUrls: ['./segnalazioni.component.css']
})
export class SegnalazioniComponent implements OnInit {
  idElaborazione!: number;
  displayedColumns: string[] = ['cod', 'msg'];
  dataSource: MatTableDataSource<Segnalazione> = new MatTableDataSource();

  constructor(private elabSvc: ElaborazioniService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idElaborazione = params.idElaborazione;
      this.getAll();
    });
  }

  getAll() {
    this.elabSvc.getSegnalazioni(this.idElaborazione).subscribe(
      listBean => {
        this.dataSource.data = listBean.data;
      },
      error => {
        console.log('Emitting error:', error);
      }
    );
  }
}
