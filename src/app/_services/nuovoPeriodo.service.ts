import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListBean} from '../_models';
import { NuovoPeriodo } from '../_models/NuovoPeriodo';


@Injectable({ providedIn: 'root' })
export class NuovoPeriodoService {
  constructor(private http: HttpClient) { }
  mockData00: ListBean<NuovoPeriodo> = {
    data: [
      {
        ID_PROCEDURA: 1,
        TITOLO_PROCEDURA: "Inizializzazione pila procedurale",
        STATO: "EXECUTED",
        DATA_INIZIO: "21/12/2022 21:12",
        DATA_FINE: "21/12/2022 21:15",
        DUR_MEDIA: "00:03:02",
        NUM_SEGN: 0,
      },
      {
        
        ID_PROCEDURA: 2,
        TITOLO_PROCEDURA: "Inizializzazione parametri cluster singoli",
        STATO: "EXECUTED",
        DATA_INIZIO: "21/12/2022 21:12",
        DATA_FINE: "21/12/2022 21:15",
        DUR_MEDIA: "00:03:02",
        NUM_SEGN: 5,
      },
      {
        ID_PROCEDURA: 3,
        TITOLO_PROCEDURA: "Inizializzazione pila procedurale Teradata",
        STATO: "EXECUTED",
        DATA_INIZIO: "21/12/2022 21:12",
        DATA_FINE: "21/12/2022 21:15",
        DUR_MEDIA: "00:03:02",
        NUM_SEGN: 0,
      },      
      {
        
        ID_PROCEDURA: 4,
        TITOLO_PROCEDURA: "Dubplicazione tabelle parametri Teradata",
        STATO: "EXECUTED",
        DATA_INIZIO: "21/12/2022 21:12",
        DATA_FINE: "21/12/2022 21:15",
        DUR_MEDIA: "00:03:02",
        NUM_SEGN: 1,
      },
    ],
    count: 4
  };

  getAll(): Observable<ListBean<NuovoPeriodo>> {
    return new Observable<ListBean<NuovoPeriodo>>(observer => {
      // JSON parse/stringify serve per eseguire una deep copy
      const list: ListBean<NuovoPeriodo> = JSON.parse(JSON.stringify(this.mockData00));
      observer.next(list);
      observer.complete();
    });
  }

  getNuovoPeriodo(idElaborazione: number): Observable<ListBean<NuovoPeriodo>> {
    return new Observable<ListBean<NuovoPeriodo>>(observer => {
      observer.next(this.mockData00);
      observer.complete();
    });
  }
}