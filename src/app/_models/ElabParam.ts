export interface ElabParam {
  NOME_PARAMETRO: string
  TIPO: 'number'|'string'|'select';
  VALORE_DEFAULT: string;
  VALORE_PREC: string;
  OPTIONS?: {DESC: string, VALUE?: string}[];
}
