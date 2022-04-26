import { Component, OnInit } from '@angular/core';
import { Procedura } from '../_models';
import { ElaborazioniService } from '../_services/elaborazioni.service';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./../shared.css', './switch.component.css']
})
export class SwitchComponent implements OnInit {
    // TODO questo dovrebbe essere un parametro
    procedureSelezionate: Procedura[] = [
      {
        ID_PROCEDURA: 1,
        TITOLO_PROCEDURA: 'Operazioni',
        SEZIONE: 'INPUT',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: 'Operazioni',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      }
    ];

    constructor(private elabSvc: ElaborazioniService) { }

  ngOnInit(): void {
    this.procedureSelezionate.forEach(p => {
      this.elabSvc.getParametriDefault(p.ID_PROCEDURA).subscribe(response => {
        p.PARAMETRI = response.data;
      });
    });
  }

}
