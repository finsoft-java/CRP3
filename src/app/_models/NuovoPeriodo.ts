export interface NuovoPeriodo {
  ID_PROCEDURA: number;
  TITOLO_PROCEDURA: string;
  STATO: string;
  DATA_INIZIO: string | null;
  DATA_FINE: string | null;
  DUR_MEDIA: string | null;
  NUM_SEGN: number;
}
