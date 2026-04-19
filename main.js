function main(dtoIn) {
  const maleNames = [
    "Jan","Petr","Pavel","Martin","Tomáš","Josef","Milan","David","Jakub","Lukáš",
    "Jaroslav","Marek","Michal","Ondřej","Filip","Roman","Karel","Radek","Daniel","Patrik",
    "Adam","Matěj","Dominik","Aleš","Stanislav","Richard","Václav","Vojtěch","Jiří","Antonín",
    "Zdeněk","Libor","Oldřich","Vratislav","Rostislav","Bohumil","Hynek","Igor","Emil","Norbert",
    "Miroslav","Dalibor","Robin","Kristián","Denis","Šimon","Tadeáš","Erik","Marcel","Bedřich"
  ];

  const femaleNames = [
    "Jana","Petra","Marie","Eva","Lucie","Kateřina","Lenka","Hana","Alena","Veronika",
    "Martina","Barbora","Tereza","Monika","Klára","Nikola","Michaela","Adéla","Anna","Eliška",
    "Karolína","Markéta","Simona","Ivana","Dagmar","Jiřina","Zuzana","Radka","Natálie","Vendula",
    "Kristýna","Denisa","Olga","Miroslava","Blažena","Božena","Renata","Gabriela","Sabina","Andrea",
    "Sofie","Nela","Ludmila","Helena","Irena","Kamila","Jitka","Milada","Věra","Pavla"
  ];

  const surnames = [
    "Novák","Svoboda","Novotný","Dvořák","Černý","Procházka","Kučera","Veselý","Horák","Němec",
    "Marek","Pospíšil","Hájek","Jelínek","Král","Růžička","Beneš","Fiala","Sedláček","Doležal",
    "Zeman","Kolář","Navrátil","Urban","Blažek","Krejčí","Kratochvíl","Musil","Pokorný","Vlček",
    "Polák","Konečný","Malý","Tichý","Staněk","Kadlec","Sýkora","Ptáček","Mach","Šimek",
    "Bartoš","Soukup","Valenta","Dušek","Čech","Beran","Pešek","Holub","Kříž","Šťastný"
  ];

  const workloads = [10, 20, 30, 40];
  const dtoOut = [];

  for (let i = 0; i < dtoIn.count; i++) {
    const gender = randomItem(["male", "female"]);

    dtoOut.push({
      gender: gender,
      birthdate: generateBirthdate(dtoIn.age.min, dtoIn.age.max),
      name: gender === "male" ? randomItem(maleNames) : randomItem(femaleNames),
      surname: randomItem(surnames),
      workload: randomItem(workloads)
    });
  }

  return dtoOut;
}

/*
   GENEROVÁNÍ DATA NAROZENÍ
*/
function generateBirthdate(minAge, maxAge) {
  const now = new Date();

  const yearMs = 365.25 * 24 * 60 * 60 * 1000;

  // nejstarší osoba = maxAge
  const minTime = now.getTime() - (maxAge * yearMs);

  // nejmladší osoba = minAge
  const maxTime = now.getTime() - (minAge * yearMs);

  // náhodný timestamp v intervalu
  const randomTime = randomNumber(minTime, maxTime);

  return new Date(randomTime).toISOString();
}

/*
   POMOCNÉ FUNKCE
*/
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

/* 
   TESTOVÁNÍ
*/
// const dtoIn = { count: 5, age: { min: 20, max: 60 } };
// console.log(JSON.stringify(main(dtoIn), null, 2));


// POUŽITÍ

const dtoIn = {
  count: 5,
  age: {
    min: 19,
    max: 35
  }
};

const dtoOut = main(dtoIn);

