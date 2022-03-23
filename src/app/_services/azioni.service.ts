import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AzioniService {
  constructor(private http: HttpClient) { }

  eseguiSingolaProcedure(id: number, parametri: {[key: string]: any}) {
    // return this.http.post<void>(environment.wsUrl + `AvanzamentoWorkflow.php?codCommessa=${codCommessa}`, '');
  }

  bloccaProcedure() {
    // return this.http.post<void>(environment.wsUrl + `AvanzamentoWorkflow.php?codCommessa=${codCommessa}`, '');
  }
}
