import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListBean } from '../_models';
import { Riconciliazione } from '../_models/Riconciliazione';


@Injectable({ providedIn: 'root' })
export class RiconciliazioneService {
  constructor(private http: HttpClient) { }
  mockData00: ListBean<Riconciliazione> = {
    data: [
      {
        ID_PROCEDURA: 1,
        TITOLO_PROCEDURA: "Riconciliazione Teradata",
        STATO: "EXECUTED",
        DATA_INIZIO: "21/12/2022 21:12",
        DATA_FINE: "21/12/2022 21:15",
        DUR_MEDIA: "00:03:02",
        NUM_SEGN: 0,
      }
    ],
    count: 1
  };

  getAll(): Observable<ListBean<Riconciliazione>> {
    return new Observable<ListBean<Riconciliazione>>(observer => {
      // JSON parse/stringify serve per eseguire una deep copy
      const list: ListBean<Riconciliazione> = JSON.parse(JSON.stringify(this.mockData00));
      observer.next(list);
      observer.complete();
    });
  }

  getNuovoPeriodo(idElaborazione: number): Observable<ListBean<Riconciliazione>> {
    return new Observable<ListBean<Riconciliazione>>(observer => {
      observer.next(this.mockData00);
      observer.complete();
    });
  }
}