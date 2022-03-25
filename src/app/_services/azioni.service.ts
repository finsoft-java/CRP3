import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatiComuni, ValueBean } from '../_models';

@Injectable({ providedIn: 'root' })
export class AzioniService {
  constructor(private http: HttpClient) { }

  mock1: ValueBean<DatiComuni> = {
    value: {
      dataRif: '31/05/2021',
      versione: 14,
      partInstValsGest: 'P20210531MSIVGCONSO',
      partCounterpartyMart: 'P20210503UG'
    }
  };

  getDatiComuni(): Observable<ValueBean<DatiComuni>> {
    return new Observable<ValueBean<DatiComuni>>(observer => {
      observer.next(this.mock1);
      observer.complete();
    });
  }

  eseguiSingolaProcedure(id: number, parametri: {[key: string]: any}) {
    // return this.http.post<void>(environment.wsUrl + `AvanzamentoWorkflow.php?codCommessa=${codCommessa}`, '');
  }

  bloccaProcedure() {
    // return this.http.post<void>(environment.wsUrl + `AvanzamentoWorkflow.php?codCommessa=${codCommessa}`, '');
  }
}
