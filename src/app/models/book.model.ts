export interface Autor {
  imie: string;
  nazwisko: string;
}

export interface Egzemplarz {
  id: number;
  sygnatura: string;
  dostepny: boolean;
}

export interface Book {
  id: number;
  tytul: string;
  isbn: string;
  gatunek: string;
  liczbaStron: number;
  dataWydania: Date;

  autor: Autor;
  tagi: string[];
  egzemplarze: Egzemplarz[];
}