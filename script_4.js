const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];





console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")

console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70.")
for(let i=0; i < entrepreneurs.length; i++){
  if ((1969 < entrepreneurs[i].year)&&(entrepreneurs[i].year < 1980)) {
    console.log(entrepreneurs[i]);
  }
}

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")

console.log("Sors une array qui contient le prénom et le nom des entrepreneurs.")
let names = [];
entrepreneurs.forEach(entrepreneur =>{
  names.push(`${entrepreneur.first} ${entrepreneur.last}`);
})
console.log(names)

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")

console.log("Quel âge aurait chaque inventeur aujourd'hui ?")
entrepreneurs.forEach(entrepreneur =>{
  let actual_age = 2020-entrepreneur.year;
  console.log(`${entrepreneur.first} ${entrepreneur.last} à/aurait ${actual_age} ans.`);
})

console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.")
function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const lastA = a.last.toUpperCase();
  const lastB = b.last.toUpperCase();

  let comparison = 0;
  if (lastA > lastB) {
    comparison = 1;
  } else if (lastA < lastB) {
    comparison = -1;
  }
  return comparison;
}
console.log(entrepreneurs.sort(compare));
