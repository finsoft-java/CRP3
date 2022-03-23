import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { Component, Input, OnInit } from '@angular/core';
import { Elaborazione, ElabParam } from '../_models';
import { ElaborazioniService } from '../_services/elaborazioni.service';

@Component({
  selector: 'app-lancio-procedure',
  templateUrl: './lancio-procedure.component.html',
  styleUrls: ['./lancio-procedure.component.css']
})
export class LancioProcedureComponent implements OnInit {
  parametri: ElabParam[][] = [];

  // TODO questo dovrebbe essere un parametro
  procedureSelezionate: Elaborazione[] = [
    {
      ID: 1,
      PROCEDURA: 'Operazioni',
      SEZIONE: 'INPUT',
      PAGINA: 'MdP',
      STATO: 'EXECUTED',
      DATA_INIZIO: '22/02/22 08:36',
      DATA_FINE: '22/02/22 09:36',
      DUR_MEDIA: '00:60:00',
      NUM_SEGN: 1,
      UTENTE: 'U0J3597'
    },
    {
      ID: 2,
      PROCEDURA: 'Clienti',
      SEZIONE: 'INPUT',
      PAGINA: 'MdP',
      STATO: 'EXECUTED',
      DATA_INIZIO: '24/02/22 08:36',
      DATA_FINE: '24/02/22 09:36',
      DUR_MEDIA: '00:60:00',
      NUM_SEGN: 0,
      UTENTE: 'U0J3597'
    }
  ];

  constructor(private elabSvc: ElaborazioniService) { }

  ngOnInit(): void {
    this.procedureSelezionate.forEach(p => {
      this.elabSvc.getParametriDefault(p.ID).subscribe(response => {
        p.PARAMETRI = response.data;
      });
    });
  }
}
