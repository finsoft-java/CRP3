import { ElabParam } from './ElabParam';

export interface Elaborazione {
  ID_ELABORAZIONE: number;
  ID_PROCEDURA: number;
  TITOLO_PROCEDURA: string;
  STATO: string|null;
  DATA_INIZIO: string|null;
  DATA_FINE: string|null;
  NUM_SEGN: number;
  UTENTE: string|null;
}

export interface Procedura {
  ID_PROCEDURA: number;
  TITOLO_PROCEDURA: string;
  SEZIONE: string;
  PAGINA: 'MdP'|'CS'|'MdP2',
  DUR_MEDIA: string|null;
  ULTIMA_ELAB?: Elaborazione;
  PARAMETRI?: ElabParam[];
}
