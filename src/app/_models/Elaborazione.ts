import { ElabParam } from './ElabParam';

export interface Elaborazione {
  ID: number;
  PROCEDURA: string;
  SEZIONE: string;
  PAGINA: 'MdP'|'CS'|'MdP2',
  STATO: string;
  DATA_INIZIO: string;
  DATA_FINE: string;
  DUR_MEDIA: string;
  NUM_SEGN: number;
  TIPO_RIGA?: 'normale'|'intestazione'|'storico';
  UTENTE?: string;
  PARAMETRI?: ElabParam[];
}

export interface StoricoElab {
  PROCEDURA: string;
  STATO: string;
  DATA_INIZIO: string;
  DATA_FINE: string;
  DUR_MEDIA: string;
  NUM_SEGN: number;
  UTENTE?: string;
}
