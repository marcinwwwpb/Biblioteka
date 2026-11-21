
export interface Wypozyczenie {
  id: number;
  ksiazkaId: number;
  egzemplarzId: number;
  czytelnik: string;
  dataWypozyczenia: Date;
  dataZwrotu: Date | null;
}