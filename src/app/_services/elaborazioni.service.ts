import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListBean, Procedura, ElabParam, Elaborazione, Segnalazione } from '../_models';

@Injectable({ providedIn: 'root' })
export class ElaborazioniService {
  constructor(private http: HttpClient) { }
  mockData3: ListBean<Elaborazione> = {
    data: [
      {
        ID_ELABORAZIONE: 666,
        ID_PROCEDURA: 1,
        TITOLO_PROCEDURA: 'Operazioni',
        STATO: 'ABORTED',
        DATA_INIZIO: '24/02/22 08:36',
        DATA_FINE: '24/02/22 09:36',
        NUM_SEGN: 10,
        UTENTE: 'U0J3597'
      },
      {
        ID_ELABORAZIONE: 667,
        ID_PROCEDURA: 1,
        TITOLO_PROCEDURA: 'Operazioni',
        STATO: 'EXECUTED',
        DATA_INIZIO: '24/02/22 08:36',
        DATA_FINE: '24/02/22 09:36',
        NUM_SEGN: 10,
        UTENTE: 'U0J3597'
      },
      {
        ID_ELABORAZIONE: 668,
        ID_PROCEDURA: 1,
        TITOLO_PROCEDURA: 'Operazioni',
        STATO: 'ERROR',
        DATA_INIZIO: '24/02/22 08:36',
        DATA_FINE: '24/02/22 09:36',
        NUM_SEGN: 10,
        UTENTE: 'U0J3597'
      }
    ],
    count: 5
  };

  mockData: ListBean<Procedura> = {
    data: [
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
      },
      {
        ID_PROCEDURA: 2,
        TITOLO_PROCEDURA: 'Clienti',
        SEZIONE: 'INPUT',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: 'Clienti',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 10,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 3,
        TITOLO_PROCEDURA: 'Gruppi',
        SEZIONE: 'INPUT',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'INITIAL',
          TITOLO_PROCEDURA: 'Gruppi',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 0,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 4,
        TITOLO_PROCEDURA: 'Controllo Parametri',
        SEZIONE: 'Diagnostica',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: 'Controllo Parametri',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 0,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 5,
        TITOLO_PROCEDURA: 'Controllo REGLTRY_COUNTERPARTY_TYPE_CD',
        SEZIONE: 'Diagnostica',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: 'Controllo REGLTRY_COUNTERPARTY_TYPE_CD',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 6,
        TITOLO_PROCEDURA: 'Controllo coerenza FINANCIAL_BOOK_RK, FLG_INCL_FT_REP e COD_MDP',
        SEZIONE: 'Diagnostica',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 7,
        TITOLO_PROCEDURA: 'Controllo F.TECNICA, MACROPRODOTTO',
        SEZIONE: 'Diagnostica',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 8,
        TITOLO_PROCEDURA: 'Controllo SAE',
        SEZIONE: 'Diagnostica',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 9,
        TITOLO_PROCEDURA: 'Controllo ATECO',
        SEZIONE: 'Diagnostica',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 10,
        TITOLO_PROCEDURA: 'Controllo COUNTERPARTY_REGION_CD',
        SEZIONE: 'Diagnostica',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 11,
        TITOLO_PROCEDURA: 'Controllo Modello SAE/RAE/ATECO, Modello BALANCE',
        SEZIONE: 'Diagnostica',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 12,
        TITOLO_PROCEDURA: 'Controllo Infrasegment Correlation',
        SEZIONE: 'Diagnostica',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 13,
        TITOLO_PROCEDURA: 'Controllo Gruppi',
        SEZIONE: 'Diagnostica',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 14,
        TITOLO_PROCEDURA: 'Controllo parametri Rischio Paese',
        SEZIONE: 'Diagnostica',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 14,
        TITOLO_PROCEDURA: 'Controllo RATING_GRADE',
        SEZIONE: 'Diagnostica',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 14,
        TITOLO_PROCEDURA: 'Rettifiche dati di INPUT (CLIENTI/OPERAZIONI) 1/2 (Pilota rettifiche)',
        SEZIONE: 'Input 2',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 14,
        TITOLO_PROCEDURA: 'Dati Operazioni su Clienti',
        SEZIONE: 'Input 2',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 14,
        TITOLO_PROCEDURA: 'Integra Operazioni con B2, Rischio Paese e ID_CARTO',
        SEZIONE: 'Input 2',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 14,
        TITOLO_PROCEDURA: 'Rettifiche dati di INPUT (CLIENTI/OPERAZIONI) 2/2 (Pilota rettifiche)',
        SEZIONE: 'Input 2',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 14,
        TITOLO_PROCEDURA: 'Fatturato completo',
        SEZIONE: 'Clustering - Fase 1',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 14,
        TITOLO_PROCEDURA: 'Rating a controparti',
        SEZIONE: 'Clustering - Fase 1',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 14,
        TITOLO_PROCEDURA: 'Modelli Settoriali e IC Rischio Paese',
        SEZIONE: 'Clustering - Fase 1',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 14,
        TITOLO_PROCEDURA: 'IC e Classi Dimensionali Rischio Controparte',
        SEZIONE: 'Clustering - Fase 1',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 14,
        TITOLO_PROCEDURA: 'Calcolo Rating Stress',
        SEZIONE: 'Input 3',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
      {
        ID_PROCEDURA: 14,
        TITOLO_PROCEDURA: 'Calcolo LGD DWT',
        SEZIONE: 'Input 3',
        PAGINA: 'MdP',
        DUR_MEDIA: '00:60:00',
        ULTIMA_ELAB: {
          ID_ELABORAZIONE: 666,
          ID_PROCEDURA: 1,
          STATO: 'EXECUTED',
          TITOLO_PROCEDURA: '',
          DATA_INIZIO: '22/02/22 08:36',
          DATA_FINE: '22/02/22 09:36',
          NUM_SEGN: 1,
          UTENTE: 'U0J3597'
        }
      },
    ],
    count: 5
  };

  getAll(): Observable<ListBean<Procedura>> {
    return new Observable<ListBean<Procedura>>(observer => {
      // JSON parse/stringify serve per eseguire una deep copy
      const list: ListBean<Procedura> = JSON.parse(JSON.stringify(this.mockData));
      observer.next(list);
      observer.complete();
    });
  }

  mockData2: ListBean<ElabParam> = {
    data: [
      {
        NOME_PARAMETRO: 'P1',
        TIPO: 'number',
        VALORE_DEFAULT: '2.0',
        VALORE_PREC: '2.0'
      },
      {
        NOME_PARAMETRO: 'P2',
        TIPO: 'string',
        VALORE_DEFAULT: '',
        VALORE_PREC: 'xxxx'
      },
      {
        NOME_PARAMETRO: 'P3',
        TIPO: 'select',
        VALORE_DEFAULT: '2.0',
        VALORE_PREC: '2.0',
        OPTIONS: [{ DESC: 'aaa' }, { DESC: 'bbb' }, { DESC: 'ccc' }]
      },
    ],
    count: 3
  };

  getParametriDefault(idProcedura: number): Observable<ListBean<ElabParam>> {
    return new Observable<ListBean<ElabParam>>(observer => {
      // JSON parse/stringify serve per eseguire una deep copy
      const list: ListBean<any> = JSON.parse(JSON.stringify(this.mockData2));
      observer.next(list);
      observer.complete();
    });
  }

  getStorico(): Observable<ListBean<Elaborazione>> {
    return new Observable<ListBean<Elaborazione>>(observer => {
      // JSON parse/stringify serve per eseguire una deep copy
      const list: ListBean<Elaborazione> = JSON.parse(JSON.stringify(this.mockData3));
      observer.next(list);
      observer.complete();
    });
  }

  mockData4: ListBean<Segnalazione> = {
    data: [
      {
        ID_ELABORAZIONE: 666,
        COD_ERRORE: '101',
        MSG: 'ABI not found 1234'
      },
      {
        ID_ELABORAZIONE: 666,
        COD_ERRORE: '101',
        MSG: 'ABI not found 4321'
      },
      {
        ID_ELABORAZIONE: 666,
        COD_ERRORE: '777',
        MSG: 'Some very very bad error'
      },
    ],
    count: 3
  };

  getSegnalazioni(idElaborazione: number): Observable<ListBean<Segnalazione>> {
    return new Observable<ListBean<Segnalazione>>(observer => {
      observer.next(this.mockData4);
      observer.complete();
    });
  }
}
