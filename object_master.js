const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// const bListPkmn = pokemon.filter( p => p.name[0] === "B" );
// console.log('///////////////////////////// Example 1 /////////////////////////////');
// console.log(bListPkmn);

// const pkmnIds = pokemon.map( p => p.id )
// console.log('///////////////////////////// Example 2 /////////////////////////////');
// console.log(pkmnIds);

console.log('///////////////////////////// # 1 /////////////////////////////');
const task_1 = pokemon.filter( p => p.id % 3 === 0 )
console.log(task_1);

console.log('///////////////////////////// # 2 /////////////////////////////');
const task_2 = pokemon.filter( p => p.types.includes("fire") )
console.log(task_2);

console.log('///////////////////////////// # 3 /////////////////////////////');
const task_3 = pokemon.filter( p => p.types.length > 1)
console.log(task_3);

// console.log('///////////////////////////// # 3.1 /////////////////////////////');
// const task_3_1 = pokemon.map( p => p.types.length)
// console.log(task_3_1);

// console.log('///////////////////////////// # 3.2 /////////////////////////////');
// const task_3_2 = pokemon.map( p => p.types.length).length
// console.log(task_3_2);

console.log('///////////////////////////// # 4 /////////////////////////////');
const task_4 = pokemon.map( p => p.name)
console.log(task_4);

console.log('///////////////////////////// # 5 /////////////////////////////');
const task_5 = pokemon.filter( p => p.id > 99)
console.log(task_5.map(p => p.name));

console.log('///////////////////////////// # 6 /////////////////////////////');
const task_6 = pokemon.filter( p => (p.types.includes("poison")));
console.log(task_6.map(p => p.name));

console.log('///////////////////////////// # 7 /////////////////////////////');
const task_7 = pokemon.filter( p => p.types.includes("flying") )
console.log(task_7);

console.log('///////////////////////////// # 8 /////////////////////////////');
const task_8 = pokemon.filter( p => p.types.includes("normal") )
console.log(task_8.length);