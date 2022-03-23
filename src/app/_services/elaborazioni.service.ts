import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ValueBean, ListBean, Elaborazione } from '../_models';

@Injectable({ providedIn: 'root' })
export class ElaborazioniService {
  constructor(private http: HttpClient) { }
  mockData: ListBean<Elaborazione> = {
    data: [
      {
        ID: 1,
        PROCEDURA: "Operazioni",
        SEZIONE: "INPUT",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "22/02/22 08:36",
        DATA_FINE: "22/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 2,
        PROCEDURA: "Clienti",
        SEZIONE: "INPUT",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 0,
        UTENTE: "U0J3597"
      },
      {
        ID: 3,
        PROCEDURA: "Gruppi",
        SEZIONE: "INPUT",
        PAGINA: "MdP",
        STATO: "INITIAL",
        DATA_INIZIO: "23/02/22 08:36",
        DATA_FINE: "23/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 4,
        PROCEDURA: "Controllo Parametri",
        SEZIONE: "Diagnostica",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "25/02/22 08:36",
        DATA_FINE: "25/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 5,
        PROCEDURA: "Controllo REGLTRY_COUNTERPARTY_TYPE_CD",
        SEZIONE: "Diagnostica",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 6,
        PROCEDURA: "Controllo coerenza FINANCIAL_BOOK_RK, FLG_INCL_FT_REP e COD_MDP",
        SEZIONE: "Diagnostica",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 10,
        UTENTE: "U0J3597"
      },
      {
        ID: 7,
        PROCEDURA: "Controllo F.TECNICA, MACROPRODOTTO",
        SEZIONE: "Diagnostica",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 8,
        PROCEDURA: "Controllo SAE",
        SEZIONE: "Diagnostica",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 9,
        PROCEDURA: "Controllo ATECO",
        SEZIONE: "Diagnostica",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 10,
        PROCEDURA: "Controllo COUNTERPARTY_REGION_CD",
        SEZIONE: "Diagnostica",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 11,
        PROCEDURA: "Controllo Modello SAE/RAE/ATECO, Modello BALANCE",
        SEZIONE: "Diagnostica",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 12,
        PROCEDURA: "Controllo Infrasegment Correlation",
        SEZIONE: "Diagnostica",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 13,
        PROCEDURA: "Controllo Gruppi",
        SEZIONE: "Diagnostica",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 14,
        PROCEDURA: "Controllo parametri Rischio Paese",
        SEZIONE: "Diagnostica",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 14,
        PROCEDURA: "Controllo RATING_GRADE",
        SEZIONE: "Diagnostica",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 14,
        PROCEDURA: "Rettifiche dati di INPUT (CLIENTI/OPERAZIONI) 1/2 (Pilota rettifiche)",
        SEZIONE: "Input 2",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 14,
        PROCEDURA: "Dati Operazioni su Clienti",
        SEZIONE: "Input 2",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 14,
        PROCEDURA: "Integra Operazioni con B2, Rischio Paese e ID_CARTO",
        SEZIONE: "Input 2",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 14,
        PROCEDURA: "Rettifiche dati di INPUT (CLIENTI/OPERAZIONI) 2/2 (Pilota rettifiche)",
        SEZIONE: "Input 2",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 14,
        PROCEDURA: "Fatturato completo",
        SEZIONE: "Clustering - Fase 1",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 14,
        PROCEDURA: "Rating a controparti",
        SEZIONE: "Clustering - Fase 1",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 14,
        PROCEDURA: "Modelli Settoriali e IC Rischio Paese",
        SEZIONE: "Clustering - Fase 1",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 14,
        PROCEDURA: "IC e Classi Dimensionali Rischio Controparte",
        SEZIONE: "Clustering - Fase 1",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 14,
        PROCEDURA: "Calcolo Rating Stress",
        SEZIONE: "Input 3",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
      {
        ID: 14,
        PROCEDURA: "Calcolo LGD DWT",
        SEZIONE: "Input 3",
        PAGINA: "MdP",
        STATO: "EXECUTED",
        DATA_INIZIO: "24/02/22 08:36",
        DATA_FINE: "24/02/22 09:36",
        DUR_MEDIA: "00:60:00",
        NUM_SEGN: 1,
        UTENTE: "U0J3597"
      },
    ],
    count: 5
  };

  getAll(): Observable<ListBean<Elaborazione>> {
    return new Observable<ListBean<Elaborazione>>(observer => {
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
