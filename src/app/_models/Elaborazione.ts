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
}

export interface StoricoElab {
  STATO: string;
  DATA_INIZIO: string;
  DATA_FINE: string;
  DUR_MEDIA: string;
  NUM_SEGN: number;
  UTENTE?: string;
}
