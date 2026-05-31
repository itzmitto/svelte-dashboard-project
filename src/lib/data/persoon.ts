export interface Persoon {
  id: number;
  naam: string;
  leeftijd: number;
  beroep: string;
  stad: string;
  maandelijks_inkomen: number;
  valuta: string;
  inkomen_bronnen:
  {
    salaris: number;
    freelance: number;
    investeringen: number;
  };
  maandelijkse_kosten:
  {
    huur: number;
    boodschappen: number;
    transport: number;
    abonnementen: number;
    overig: number;
  };
  spaargeld: number;
  avatar_kleur: string;
}