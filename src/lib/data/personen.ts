export const personen: Persoon[] = [
  {
    id: 1,
    naam: "Armin Arlert",
    leeftijd: 31,
    beroep: "Frontend Developer",
    stad: "Zwolle", 
    maandelijks_inkomen: 3850,
    valuta: "EUR",
    inkomen_bronnen: { salaris: 3200, freelance: 450, investeringen: 200 },
    maandelijkse_kosten: { huur: 1100, boodschappen: 320, transport: 140, abonnementen: 55, overig: 480 },
    spaargeld: 12450,
    laatste_login: "2026-05-28",
    avatar_kleur: "#6C9EFF"
  },
  {
    id: 2,
    naam: "Mark Reiss",
    leeftijd: 28,
    beroep: "UX Designer",
    stad: "Amsterdam",
    maandelijks_inkomen: 4200,
    valuta: "EUR",
    inkomen_bronnen: { salaris: 3600, freelance: 400, investeringen: 200 },
    maandelijkse_kosten: { huur: 1350, boodschappen: 290, transport: 95, abonnementen: 75, overig: 510 },
    spaargeld: 18900,
    laatste_login: "2026-05-27",
    avatar_kleur: "#FF8FAB"
  },
  { 
    id: 3,
    naam: "Zeke Jeager",
    leeftijd: 34,
    beroep: "Data Analyst",
    stad: "Utrecht",
    maandelijks_inkomen: 3650,
    valuta: "EUR",
    inkomen_bronnen: { salaris: 3100, freelance: 300, investeringen: 250 },
    maandelijkse_kosten: { huur: 980, boodschappen: 340, transport: 180, abonnementen: 45, overig: 395 },
    spaargeld: 22100,
    laatste_login: "2026-05-26",
    avatar_kleur: "#5ECFA0"
  },
  {
    id: 4,
    naam: "Alex Braun",
    leeftijd: 37,
    beroep: "Marketing Manager",
    stad: "Rotterdam",
    maandelijks_inkomen: 5100,
    valuta: "EUR",
    inkomen_bronnen: { salaris: 4500, freelance: 350, investeringen: 250 },
    maandelijkse_kosten: { huur: 1600, boodschappen: 380, transport: 210, abonnementen: 90, overig: 620 },
    spaargeld: 34750,
    laatste_login: "2026-05-28",
    avatar_kleur: "#FFB347"
  }
];

export const geselecteerdePersoon = writable<Persoon>(personen[0]);