import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storico-elaborazione',
  templateUrl: './storico-elaborazione.component.html',
  styleUrls: ['./storico-elaborazione.component.css']
})
export class StoricoElaborazioneComponent implements OnInit {
  
  idElaborazione!:string;
  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idElaborazione = params.idElaborazione;
      /*
      this.svcAnalisi.getAll({ codCommessa: this.codCommessa }).subscribe(response => {
        this.dataSource = new MatTableDataSource<VistaAnalisiCommessa>(response.data);
      },
      error => {
        this.alertService.error(error);
      });
      this.svcAnalisi.getAllAggregata({ codCommessa: this.codCommessa }).subscribe(response => {
        this.dataSourceAggregata = new MatTableDataSource<VistaAnalisiCommessa>(response.data);
      },
      error => {
        this.alertService.error(error);
      });
      this.svcCruscotto.getById(this.codCommessa).subscribe(response => {
        // eslint-disable-next-line prefer-destructuring
        this.datiCruscotto = response.value;
      },
      error => {
        this.alertService.error(error);
      });
      */
    });
  }

}
