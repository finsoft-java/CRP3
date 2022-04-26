import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListBean} from '../_models';
import { NuovaVersione } from '../_models/NuovaVersione';


@Injectable({ providedIn: 'root' })
export class NuovaVersioneService {
  constructor(private http: HttpClient) { }
  mockData00: ListBean<NuovaVersione> = {
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
        TITOLO_PROCEDURA: "Dupica tabelli di input Oracle",
        STATO: "EXECUTED",
        DATA_INIZIO: "21/12/2022 21:12",
        DATA_FINE: "21/12/2022 21:15",
        DUR_MEDIA: "00:03:02",
        NUM_SEGN: 5,
      },
      {
        ID_PROCEDURA: 3,
        TITOLO_PROCEDURA: "Inizializzazione procedurale lato Teradata",
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
       {  
        ID_PROCEDURA: 5,
        TITOLO_PROCEDURA: "Dubplicazione tabelle di input Teradata",
        STATO: "EXECUTED",
        DATA_INIZIO: "21/12/2022 21:12",
        DATA_FINE: "21/12/2022 21:15",
        DUR_MEDIA: "00:03:02",
        NUM_SEGN: 1,
      },
    ],
    count: 5
  };

  getAll(): Observable<ListBean<NuovaVersione>> {
    return new Observable<ListBean<NuovaVersione>>(observer => {
      // JSON parse/stringify serve per eseguire una deep copy
      const list: ListBean<NuovaVersione> = JSON.parse(JSON.stringify(this.mockData00));
      observer.next(list);
      observer.complete();
    });
  }

  getNuovoPeriodo(idElaborazione: number): Observable<ListBean<NuovaVersione>> {
    return new Observable<ListBean<NuovaVersione>>(observer => {
      observer.next(this.mockData00);
      observer.complete();
    });
  }
}