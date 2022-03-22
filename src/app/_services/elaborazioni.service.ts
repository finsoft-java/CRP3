import { Observable } from 'rxjs';
import { Elaborazione } from './../_models/Elaborazione';
import { ListBean } from './../_models/ListBean';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ValueBean } from '../_models';

@Injectable({ providedIn: 'root' })
export class ElaborazioniService {
  constructor(private http: HttpClient) { }
  mockData: ListBean<Elaborazione> = {
    data: [
      {
        PROCEDURA: "Operazioni",
        STATO: "EXECUTED",
        DATA_INIZIO: "22/02/22 08:36",
        DATA_FINE: "22/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
      },
      {
        PROCEDURA: "Clienti",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
      },
      {
        PROCEDURA: "Gruppi",
        STATO: "EXECUTED",
        DATA_INIZIO: "23/02/22 08:36",
        DATA_FINE: "23/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
      },
      {
        PROCEDURA: "Operazioni",
        STATO: "EXECUTED",
        DATA_INIZIO: "25/02/22 08:36",
        DATA_FINE: "25/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
      },
      {
        PROCEDURA: "Operazioni",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
      },
    ],
    count: 5
  };

  getAll(): Observable<ListBean<Elaborazione>>  {
    return new Observable( observer => {
      // JSON parse/stringify serve per eseguire una deep copy
      const list: ListBean<Elaborazione> = JSON.parse(JSON.stringify(this.mockData));
      observer.next(list);
      observer.complete();
    });
  }

  preparaGiroconto(codCommessa: string) {
    return this.http.post<ValueBean<any>>(environment.wsUrl + `PreparaGiroconto.php?codCommessa=${codCommessa}`, '');
  }
}
