
const POKEMONDETAILS = {
   "1": {
      "name": "Bulbasaur",
      "attack": 49,
      "defense": 49,
      "evolveLevel": 16,
      "evolveTo": "2",
      "type": "grass",
      "moves": [
         "tackle",
         "vine whip"
      ],
      "curve": 1.3,
      "levels": [5, 10],
      "probability": 3
   },
   "2": {
      "name": "Ivysaur",
      "attack": 62,
      "defense": 63,
      "evolveLevel": 32,
      "evolveTo": "3",
      "type": "grass",
      "moves": [
         "tackle",
         "vine whip",
         "razor leaf"
      ],
      "curve": 1.3
   },
   "3": {
      "name": "Venusaur",
      "attack": 82,
      "defense": 83,
      "type": "grass",
      "moves": [
         "tackle",
         "vine whip",
         "razor leaf"
      ],
      "curve": 1.3
   },
   "4": {
      "name": "Charmander",
      "attack": 52,
      "defense": 43,
      "evolveLevel": 16,
      "evolveTo": "5",
      "type": "fire",
      "moves": [
         "scratch",
         "ember",
         "metal claw"
      ],
      "curve": 1.3,
      "levels": [5, 10],
      "probability": 3
   },
   "5": {
      "name": "Charmeleon",
      "attack": 64,
      "defense": 58,
      "evolveLevel": 36,
      "evolveTo": "6",
      "type": "fire",
      "moves": [
         "scratch",
         "ember",
         "metal claw",
         "flamethrower"
      ],
      "curve": 1.3
   },
   "6": {
      "name": "Charizard",
      "attack": 84,
      "defense": 78,
      "type": "fire",
      "moves": [
         "flamethrower",
         "wing attack",
         "slash",
         "metal claw"
      ],
      "curve": 1.3
   },
   "7": {
      "name": "Squirtle",
      "attack": 48,
      "defense": 65,
      "evolveLevel": 16,
      "evolveTo": "8",
      "type": "water",
      "moves": [
         "tackle",
         "bubble",
         "water gun"
      ],
      "curve": 1.3,
      "levels": [5, 10],
      "probability": 3
   },
   "8": {
      "name": "Wartortle",
      "attack": 63,
      "defense": 80,
      "evolveLevel": 36,
      "evolveTo": "9",
      "type": "water",
      "moves": [
         "tackle",
         "bubble",
         "water gun",
         "bite"
      ],
      "curve": 1.3
   },
   "9": {
      "name": "Blastoise",
      "attack": 83,
      "defense": 100,
      "type": "water",
      "moves": [
         "hydro pump",
         "bubble",
         "water gun",
         "bite"
      ],
      "curve": 1.3
   },
   "10": {
      "name": "Caterpie",
      "attack": 30,
      "defense": 35,
      "evolveLevel": 7,
      "evolveTo": "11",
      "type": "bug",
      "moves": [
         "tackle"
      ],
      "curve": 1.6,
      "levels": [2, 7],
      "probability": 15
   },
   "12": {
      "name": "Butterfree",
      "attack": 45,
      "defense": 50,
      "type": "bug",
      "moves": [
         "confusion",
         "gust",
         "psybeam",
         "silver wind"
      ],
      "curve": 1.6
   },
   "13": {
      "name": "Weedle",
      "attack": 35,
      "defense": 30,
      "evolveLevel": 7,
      "evolveTo": "14",
      "type": "bug",
      "moves": [
         "poison sting"
      ],
      "curve": 1.6,
      "levels": [2, 7],
      "probability": 15
   },
   "16": {
      "name": "Pidgey",
      "attack": 45,
      "defense": 40,
      "evolveLevel": 18,
      "evolveTo": "17",
      "type": "normal",
      "moves": [
         "tackle",
         "gust"
      ],
      "curve": 1.3,
      "levels": [2, 10],
      "probability": 15
   },
   "17": {
      "name": "Pidgeotto",
      "attack": 60,
      "defense": 55,
      "evolveLevel": 36,
      "evolveTo": "18",
      "type": "normal",
      "moves": [
         "tackle",
         "gust",
         "wing attack"
      ],
      "curve": 1.3
   },
   "18": {
      "name": "Pidgeot",
      "attack": 80,
      "defense": 75,
      "type": "normal",
      "moves": [
         "tackle",
         "gust",
         "wing attack"
      ],
      "curve": 1.3
   },
   "19": {
      "name": "Rattata",
      "attack": 56,
      "defense": 35,
      "evolveLevel": 20,
      "evolveTo": "20",
      "type": "normal",
      "moves": [
         "tackle",
         "hyper fang"
      ],
      "curve": 1.6,
      "levels": [2, 7],
      "probability": 20
   },
   "20": {
      "name": "Raticate",
      "attack": 81,
      "defense": 60,
      "type": "normal",
      "moves": [
         "tackle",
         "hyper fang"
      ],
      "curve": 1.6
   },
   "21": {
      "name": "Spearow",
      "attack": 60,
      "defense": 30,
      "evolveLevel": 20,
      "evolveTo": "22",
      "type": "normal",
      "moves": [
         "peck"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 10
   },
   "22": {
      "name": "Fearow",
      "attack": 90,
      "defense": 65,
      "type": "normal",
      "moves": [
         "peck",
         "drill peck"
      ],
      "curve": 1.6
   },
   "23": {
      "name": "Ekans",
      "attack": 60,
      "defense": 44,
      "evolveLevel": 22,
      "evolveTo": "24",
      "type": "poison",
      "moves": [
         "poison sting",
         "bite"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 15
   },
   "24": {
      "name": "Arbok",
      "attack": 85,
      "defense": 69,
      "type": "poison",
      "moves": [
         "poison sting",
         "bite",
         "acid"
      ],
      "curve": 1.6
   },
   "26": {
      "name": "Raichu",
      "attack": 90,
      "defense": 55,
      "type": "electric",
      "moves": [
         "thundershock",
         "thunderbolt"
      ],
      "curve": 1.6
   },
   "27": {
      "name": "Sandshrew",
      "attack": 75,
      "defense": 85,
      "evolveLevel": 22,
      "evolveTo": "28",
      "type": "ground",
      "moves": [
         "scratch",
         "poison sting"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 10
   },
   "28": {
      "name": "Sandslash",
      "attack": 100,
      "defense": 110,
      "type": "ground",
      "moves": [
         "scratch",
         "poison sting",
         "slash",
         "swift"
      ],
      "curve": 1.6
   },
   "29": {
      "name": "Nidoran",
      "attack": 47,
      "defense": 52,
      "evolveLevel": 16,
      "evolveTo": "30",
      "type": "poison",
      "moves": [
         "scratch"
      ],
      "curve": 1.3,
      "levels": [5, 8],
      "probability": 15
   },
   "31": {
      "name": "Nidoqueen",
      "attack": 82,
      "defense": 87,
      "type": "poison",
      "moves": [
         "scratch",
         "poison sting",
         "body slam",
         "superpower"
      ],
      "curve": 1.3
   },
   "32": {
      "name": "Nidoran",
      "attack": 57,
      "defense": 40,
      "evolveLevel": 16,
      "evolveTo": "33",
      "type": "poison",
      "moves": [
         "peck"
      ],
      "curve": 1.3,
      "levels": [5, 8],
      "probability": 15
   },
   "34": {
      "name": "Nidoking",
      "attack": 92,
      "defense": 77,
      "type": "poison",
      "moves": [
         "peck",
         "poison sting",
         "megahorn"
      ],
      "curve": 1.3
   },
   "38": {
      "name": "Ninetales",
      "attack": 76,
      "defense": 75,
      "type": "fire",
      "moves": [
         "ember"
      ],
      "curve": 1.6
   },
   "41": {
      "name": "Zubat",
      "attack": 45,
      "defense": 35,
      "evolveLevel": 22,
      "evolveTo": "42",
      "type": "poison",
      "moves": [
         "astonish",
         "bite",
         "wing attack"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 15
   },
   "42": {
      "name": "Golbat",
      "attack": 80,
      "defense": 70,
      "type": "poison",
      "moves": [
         "poison fang",
         "bite",
         "wing attack",
         "air cutter"
      ],
      "curve": 1.6
   },
   "46": {
      "name": "Paras",
      "attack": 70,
      "defense": 55,
      "evolveLevel": 24,
      "evolveTo": "47",
      "type": "bug",
      "moves": [
         "scratch"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 15
   },
   "47": {
      "name": "Parasect",
      "attack": 95,
      "defense": 80,
      "type": "bug",
      "moves": [
         "scratch",
         "slash"
      ],
      "curve": 1.6
   },
   "48": {
      "name": "Venonat",
      "attack": 55,
      "defense": 50,
      "evolveLevel": 31,
      "evolveTo": "49",
      "type": "bug",
      "moves": [
         "tackle",
         "confusion"
      ],
      "curve": 1.6,
      "levels": [10, 24],
      "probability": 8
   },
   "49": {
      "name": "Venomoth",
      "attack": 65,
      "defense": 60,
      "type": "bug",
      "moves": [
         "psybeam",
         "psychic",
         "confusion",
         "gust"
      ],
      "curve": 1.6
   },
   "50": {
      "name": "Diglett",
      "attack": 55,
      "defense": 25,
      "evolveLevel": 26,
      "evolveTo": "51",
      "type": "ground",
      "moves": [
         "scratch"
      ],
      "curve": 1.6,
      "levels": [8, 16],
      "probability": 15
   },
   "51": {
      "name": "Dugtrio",
      "attack": 80,
      "defense": 50,
      "type": "ground",
      "moves": [
         "scratch",
         "slash",
         "earthquake"
      ],
      "curve": 1.6
   },
   "52": {
      "name": "Meowth",
      "attack": 45,
      "defense": 35,
      "evolveLevel": 28,
      "evolveTo": "53",
      "type": "normal",
      "moves": [
         "scratch",
         "bite"
      ],
      "curve": 1.6,
      "levels": [8, 20],
      "probability": 10
   },
   "53": {
      "name": "Persian",
      "attack": 70,
      "defense": 60,
      "type": "normal",
      "moves": [
         "scratch",
         "bite",
         "slash"
      ],
      "curve": 1.6
   },
   "54": {
      "name": "Psyduck",
      "attack": 52,
      "defense": 48,
      "evolveLevel": 33,
      "evolveTo": "55",
      "type": "water",
      "moves": [
         "scratch",
         "confusion"
      ],
      "curve": 1.6,
      "levels": [8, 20],
      "probability": 15
   },
   "55": {
      "name": "Golduck",
      "attack": 82,
      "defense": 78,
      "type": "water",
      "moves": [
         "scratch",
         "confusion",
         "hydro pump"
      ],
      "curve": 1.6
   },
   "56": {
      "name": "Mankey",
      "attack": 80,
      "defense": 35,
      "evolveLevel": 28,
      "evolveTo": "57",
      "type": "fighting",
      "moves": [
         "scratch",
         "low kick",
         "karate chop"
      ],
      "curve": 1.6,
      "levels": [5, 18],
      "probability": 8
   },
   "57": {
      "name": "Primeape",
      "attack": 105,
      "defense": 60,
      "type": "fighting",
      "moves": [
         "scratch",
         "low kick",
         "karate chop",
         "cross chop"
      ],
      "curve": 1.6
   },
   "59": {
      "name": "Arcanine",
      "attack": 110,
      "defense": 80,
      "type": "fire",
      "moves": [
         "bite",
         "ember"
      ],
      "curve": 1
   },
   "60": {
      "name": "Poliwag",
      "attack": 50,
      "defense": 40,
      "evolveLevel": 25,
      "evolveTo": "61",
      "type": "water",
      "moves": [
         "bubble",
         "water gun"
      ],
      "curve": 1.3,
      "levels": [5, 18],
      "probability": 6
   },
   "62": {
      "name": "Poliwrath",
      "attack": 85,
      "defense": 95,
      "type": "water",
      "moves": [
         "water gun"
      ],
      "curve": 1.3
   },
   "65": {
      "name": "Alakazam",
      "attack": 50,
      "defense": 45,
      "type": "psychic",
      "moves": [
         "confusion",
         "psybeam",
         "psychic"
      ],
      "curve": 1.3
   },
   "66": {
      "name": "Machop",
      "attack": 80,
      "defense": 50,
      "evolveLevel": 28,
      "evolveTo": "67",
      "type": "fighting",
      "moves": [
         "low kick",
         "karate chop"
      ],
      "curve": 1.3,
      "levels": [5, 19],
      "probability": 12
   },
   "68": {
      "name": "Machamp",
      "attack": 130,
      "defense": 80,
      "type": "fighting",
      "moves": [
         "low kick",
         "karate chop",
         "cross chop",
         "dynamicpunch"
      ],
      "curve": 1.3
   },
   "69": {
      "name": "Bellsprout",
      "attack": 75,
      "defense": 35,
      "evolveLevel": 21,
      "evolveTo": "70",
      "type": "grass",
      "moves": [
         "vine whip"
      ],
      "curve": 1.3,
      "levels": [5, 20],
      "probability": 15
   },
   "71": {
      "name": "Victreebel",
      "attack": 105,
      "defense": 65,
      "type": "grass",
      "moves": [
         "vine whip",
         "razor leaf"
      ],
      "curve": 1.3
   },
   "72": {
      "name": "Tentacool",
      "attack": 40,
      "defense": 35,
      "evolveLevel": 30,
      "evolveTo": "73",
      "type": "water",
      "moves": [
         "poison sting",
         "constrict",
         "acid",
         "bubblebeam"
      ],
      "curve": 1,
      "levels": [5, 20],
      "probability": 10
   },
   "73": {
      "name": "Tentacruel",
      "attack": 70,
      "defense": 65,
      "type": "water",
      "moves": [
         "hydro pump",
         "constrict",
         "acid",
         "bubblebeam"
      ],
      "curve": 1
   },
   "74": {
      "name": "Geodude",
      "attack": 80,
      "defense": 100,
      "evolveLevel": 25,
      "evolveTo": "75",
      "type": "rock",
      "moves": [
         "tackle",
         "rock throw"
      ],
      "curve": 1.3,
      "levels": [5, 20],
      "probability": 15
   },
   "76": {
      "name": "Golem",
      "attack": 110,
      "defense": 130,
      "type": "rock",
      "moves": [
         "tackle",
         "rock throw",
         "earthquake"
      ],
      "curve": 1.3
   },
   "77": {
      "name": "Ponyta",
      "attack": 85,
      "defense": 55,
      "evolveLevel": 40,
      "evolveTo": "78",
      "type": "fire",
      "moves": [
         "ember",
         "stomp"
      ],
      "curve": 1.6,
      "levels": [20, 35],
      "probability": 6
   },
   "78": {
      "name": "Rapidash",
      "attack": 100,
      "defense": 70,
      "type": "fire",
      "moves": [
         "ember",
         "stomp",
         "fire blast"
      ],
      "curve": 1.6
   },
   "79": {
      "name": "Slowpoke",
      "attack": 65,
      "defense": 65,
      "evolveLevel": 37,
      "evolveTo": "80",
      "type": "water",
      "moves": [
         "tackle",
         "water gun",
         "confusion",
         "headbutt"
      ],
      "curve": 1.6,
      "levels": [25, 35],
      "probability": 5
   },
   "80": {
      "name": "Slowbro",
      "attack": 75,
      "defense": 110,
      "type": "water",
      "moves": [
         "psychic",
         "water gun",
         "confusion",
         "headbutt"
      ],
      "curve": 1.6
   },
   "81": {
      "name": "Magnemite",
      "attack": 35,
      "defense": 70,
      "evolveLevel": 30,
      "evolveTo": "82",
      "type": "electric",
      "moves": [
         "tackle",
         "thundershock",
         "spark"
      ],
      "curve": 1.6,
      "levels": [5, 20],
      "probability": 8
   },
   "82": {
      "name": "Magneton",
      "attack": 60,
      "defense": 95,
      "type": "electric",
      "moves": [
         "tackle",
         "thundershock",
         "spark",
         "zap cannon"
      ],
      "curve": 1.6
   },
   "83": {
      "name": "Farfetch'd",
      "attack": 65,
      "defense": 55,
      "type": "normal",
      "moves": [
         "peck",
         "slash"
      ],
      "curve": 1.6,
      "levels": [25, 40],
      "probability": 8
   },
   "84": {
      "name": "Doduo",
      "attack": 85,
      "defense": 45,
      "evolveLevel": 31,
      "evolveTo": "85",
      "type": "normal",
      "moves": [
         "peck"
      ],
      "curve": 1.6,
      "levels": [15, 25],
      "probability": 8
   },
   "85": {
      "name": "Dodrio",
      "attack": 110,
      "defense": 70,
      "type": "normal",
      "moves": [
         "peck",
         "drill peck"
      ],
      "curve": 1.6
   },
   "86": {
      "name": "Seel",
      "attack": 45,
      "defense": 55,
      "evolveLevel": 34,
      "evolveTo": "87",
      "type": "water",
      "moves": [
         "headbutt",
         "icy wind",
         "aurora beam"
      ],
      "curve": 1.6,
      "levels": [25, 30],
      "probability": 4
   },
   "87": {
      "name": "Dewgong",
      "attack": 70,
      "defense": 80,
      "type": "water",
      "moves": [
         "ice beam",
         "headbutt",
         "icy wind",
         "aurora beam"
      ],
      "curve": 1.6
   },
   "88": {
      "name": "Grimer",
      "attack": 80,
      "defense": 50,
      "evolveLevel": 38,
      "evolveTo": "89",
      "type": "poison",
      "moves": [
         "pound",
         "sludge"
      ],
      "curve": 1.6,
      "levels": [5, 30],
      "probability": 10
   },
   "89": {
      "name": "Muk",
      "attack": 105,
      "defense": 75,
      "type": "poison",
      "moves": [
         "pound",
         "sludge",
         "sludge bomb"
      ],
      "curve": 1.6
   },
   "91": {
      "name": "Cloyster",
      "attack": 95,
      "defense": 180,
      "type": "water",
      "moves": [
         "aurora beam"
      ],
      "curve": 1
   },
   "92": {
      "name": "Gastly",
      "attack": 35,
      "defense": 30,
      "evolveLevel": 25,
      "evolveTo": "93",
      "type": "ghost",
      "moves": [
         "tackle",
         "lick"
      ],
      "curve": 1.3,
      "levels": [5, 15],
      "probability": 10
   },
   "94": {
      "name": "Gengar",
      "attack": 65,
      "defense": 60,
      "type": "ghost",
      "moves": [
         "tackle",
         "lick",
         "shadow punch",
         "shadow ball"
      ],
      "curve": 1.3
   },
   "95": {
      "name": "Onix",
      "attack": 45,
      "defense": 160,
      "type": "rock",
      "moves": [
         "iron tail",
         "rock throw",
         "dragonbreath",
         "slam"
      ],
      "curve": 1.6,
      "levels": [5, 40],
      "probability": 8
   },
   "96": {
      "name": "Drowzee",
      "attack": 48,
      "defense": 45,
      "evolveLevel": 26,
      "evolveTo": "97",
      "type": "psychic",
      "moves": [
         "pound",
         "confusion",
         "headbutt"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 8
   },
   "97": {
      "name": "Hypno",
      "attack": 73,
      "defense": 70,
      "type": "psychic",
      "moves": [
         "pound",
         "confusion",
         "headbutt",
         "psychic"
      ],
      "curve": 1.6
   },
   "98": {
      "name": "Krabby",
      "attack": 105,
      "defense": 90,
      "evolveLevel": 28,
      "evolveTo": "99",
      "type": "water",
      "moves": [
         "bubble",
         "vicegrip",
         "mud shot",
         "stomp"
      ],
      "curve": 1.6,
      "levels": [15, 20],
      "probability": 6
   },
   "99": {
      "name": "Kingler",
      "attack": 130,
      "defense": 115,
      "type": "water",
      "moves": [
         "stomp",
         "crabhammer",
         "vicegrip",
         "mud shot"
      ],
      "curve": 1.6
   },
   "100": {
      "name": "Voltorb",
      "attack": 30,
      "defense": 50,
      "evolveLevel": 30,
      "evolveTo": "101",
      "type": "electric",
      "moves": [
         "tackle",
         "spark"
      ],
      "curve": 1.6,
      "levels": [5, 12],
      "probability": 6
   },
   "101": {
      "name": "Electrode",
      "attack": 50,
      "defense": 70,
      "type": "electric",
      "moves": [
         "tackle",
         "spark",
         "swift"
      ],
      "curve": 1.6
   },
   "103": {
      "name": "Exeggutor",
      "attack": 95,
      "defense": 85,
      "type": "grass",
      "moves": [
         "confusion",
         "stomp",
         "egg bomb"
      ],
      "curve": 1
   },
   "104": {
      "name": "Cubone",
      "attack": 50,
      "defense": 95,
      "evolveLevel": 28,
      "evolveTo": "105",
      "type": "ground",
      "moves": [
         "bone club",
         "headbutt"
      ],
      "curve": 1.6,
      "levels": [15, 22],
      "probability": 5
   },
   "105": {
      "name": "Marowak",
      "attack": 80,
      "defense": 110,
      "type": "ground",
      "moves": [
         "bone club",
         "headbutt"
      ],
      "curve": 1.6
   },
   "106": {
      "name": "Hitmonlee",
      "attack": 120,
      "defense": 53,
      "evolveLevel": 20,
      "evolveTo": "107",
      "type": "fighting",
      "moves": [
         "rolling kick"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 4
   },
   "107": {
      "name": "Hitmonchan",
      "attack": 105,
      "defense": 79,
      "type": "fighting",
      "moves": [
         "mega punch",
         "ice punch",
         "fire punch",
         "sky uppercut"
      ],
      "curve": 1.6
   },
   "108": {
      "name": "Lickitung",
      "attack": 55,
      "defense": 75,
      "type": "normal",
      "moves": [
         "lick",
         "stomp",
         "slam"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 10
   },
   "109": {
      "name": "Koffing",
      "attack": 65,
      "defense": 95,
      "evolveLevel": 35,
      "evolveTo": "110",
      "type": "poison",
      "moves": [
         "tackle",
         "smog",
         "sludge"
      ],
      "curve": 1.6,
      "levels": [15, 25],
      "probability": 6
   },
   "110": {
      "name": "Weezing",
      "attack": 90,
      "defense": 120,
      "type": "poison",
      "moves": [
         "tackle",
         "smog",
         "sludge"
      ],
      "curve": 1.6
   },
   "111": {
      "name": "Rhyhorn",
      "attack": 85,
      "defense": 95,
      "evolveLevel": 42,
      "evolveTo": "112",
      "type": "ground",
      "moves": [
         "horn attack",
         "stomp"
      ],
      "curve": 1,
      "levels": [15, 35],
      "probability": 4
   },
   "112": {
      "name": "Rhydon",
      "attack": 130,
      "defense": 120,
      "type": "ground",
      "moves": [
         "horn attack",
         "stomp",
         "earthquake",
         "megahorn"
      ],
      "curve": 1
   },
   "113": {
      "name": "Chansey",
      "attack": 5,
      "defense": 5,
      "type": "normal",
      "moves": [
         "pound",
         "egg bomb"
      ],
      "curve": 1.9,
      "levels": [25, 55],
      "probability": 4
   },
   "114": {
      "name": "Tangela",
      "attack": 55,
      "defense": 115,
      "type": "grass",
      "moves": [
         "constrict",
         "vine whip",
         "slam"
      ],
      "curve": 1.6,
      "levels": [15, 45],
      "probability": 4
   },
   "115": {
      "name": "Kangaskhan",
      "attack": 95,
      "defense": 80,
      "type": "normal",
      "moves": [
         "bite",
         "mega punch",
         "dizzy punch"
      ],
      "curve": 1.6,
      "levels": [5, 45],
      "probability": 4
   },
   "116": {
      "name": "Horsea",
      "attack": 40,
      "defense": 70,
      "evolveLevel": 32,
      "evolveTo": "117",
      "type": "water",
      "moves": [
         "bubble",
         "water gun",
         "twister"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 10
   },
   "117": {
      "name": "Seadra",
      "attack": 65,
      "defense": 95,
      "type": "water",
      "moves": [
         "bubble",
         "water gun",
         "twister",
         "hydro pump"
      ],
      "curve": 1.6
   },
   "118": {
      "name": "Goldeen",
      "attack": 67,
      "defense": 60,
      "evolveLevel": 33,
      "evolveTo": "119",
      "type": "water",
      "moves": [
         "peck",
         "horn attack"
      ],
      "curve": 1.6,
      "levels": [5, 25],
      "probability": 12
   },
   "119": {
      "name": "Seaking",
      "attack": 92,
      "defense": 65,
      "type": "water",
      "moves": [
         "peck",
         "horn attack",
         "waterfall",
         "megahorn"
      ],
      "curve": 1.6
   },
   "121": {
      "name": "Starmie",
      "attack": 75,
      "defense": 85,
      "type": "water",
      "moves": [
         "water gun",
         "swift"
      ],
      "curve": 1
   },
   "122": {
      "name": "Mr. mime",
      "attack": 45,
      "defense": 65,
      "type": "psychic",
      "moves": [
         "confusion",
         "magical leaf",
         "psybeam",
         "psychic"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 4
   },
   "123": {
      "name": "Scyther",
      "attack": 110,
      "defense": 80,
      "type": "bug",
      "moves": [
         "wing attack",
         "slash"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 4
   },
   "124": {
      "name": "Jynx",
      "attack": 50,
      "defense": 35,
      "type": "ice",
      "moves": [
         "body slam",
         "blizzard",
         "powder snow",
         "ice punch"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 4
   },
   "125": {
      "name": "Electabuzz",
      "attack": 83,
      "defense": 57,
      "type": "electric",
      "moves": [
         "thunderpunch",
         "swift",
         "thunderbolt",
         "thunder"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 4
   },
   "126": {
      "name": "Magmar",
      "attack": 95,
      "defense": 57,
      "type": "fire",
      "moves": [
         "fire blast",
         "smog",
         "fire punch",
         "flamethrower"
      ],
      "curve": 1.6,
      "levels": [5, 15],
      "probability": 4
   },
   "127": {
      "name": "Pinsir",
      "attack": 125,
      "defense": 100,
      "type": "bug",
      "moves": [
         "vicegrip"
      ],
      "curve": 1,
      "levels": [5, 15],
      "probability": 4
   },
   "128": {
      "name": "Tauros",
      "attack": 100,
      "defense": 95,
      "type": "normal",
      "moves": [
         "tackle",
         "horn attack"
      ],
      "curve": 1,
      "levels": [5, 15],
      "probability": 4
   },
   "129": {
      "name": "Magikarp",
      "attack": 10,
      "defense": 55,
      "evolveLevel": 20,
      "evolveTo": "130",
      "type": "water",
      "moves": [
         "tackle"
      ],
      "curve": 1,
      "levels": [5, 15],
      "probability": 15
   },
   "130": {
      "name": "Gyarados",
      "attack": 125,
      "defense": 79,
      "type": "water",
      "moves": [
         "bite",
         "twister",
         "hydro pump"
      ],
      "curve": 1
   },
   "131": {
      "name": "Lapras",
      "attack": 85,
      "defense": 80,
      "type": "water",
      "moves": [
         "water gun",
         "body slam",
         "ice beam",
         "hydro pump"
      ],
      "curve": 1,
      "levels": [5, 15],
      "probability": 4
   },
   "133": {
      "name": "Eevee",
      "attack": 55,
      "defense": 50,
      "type": "normal",
      "moves": [
         "tackle",
         "bite"
      ],
      "curve": 1.6,
      "levels": [5, 35],
      "probability": 8
   },
   "135": {
      "levels": [5, 15],
      "probability": 4,
      "name": "Jolteon",
      "attack": 65,
      "defense": 60,
      "type": "electric",
      "moves": [
         "tackle",
         "thundershock",
         "thunder"
      ],
      "curve": 1.6
   },
   "136": {
      "name": "Flareon",
      "attack": 130,
      "defense": 60,
      "type": "fire",
      "moves": [
         "flamethrower",
         "ember",
         "bite",
         "smog"
      ],
      "curve": 1.6
   },
   "137": {
      "name": "Porygon",
      "attack": 60,
      "defense": 70,
      "type": "normal",
      "moves": [
         "tackle",
         "psybeam",
         "zap cannon"
      ],
      "curve": 1.6,
      "levels": [5, 45],
      "probability": 4
   },
   "138": {
      "name": "Omanyte",
      "attack": 40,
      "defense": 100,
      "evolveLevel": 40,
      "evolveTo": "139",
      "type": "rock",
      "moves": [
         "constrict",
         "bite",
         "water gun",
         "mud shot"
      ],
      "curve": 1.6
   },
   "139": {
      "name": "Omastar",
      "attack": 60,
      "defense": 125,
      "type": "rock",
      "moves": [
         "ancientpower",
         "hydro pump",
         "water gun",
         "mud shot"
      ],
      "curve": 1.6
   },
   "140": {
      "name": "Kabuto",
      "attack": 80,
      "defense": 90,
      "evolveLevel": 40,
      "evolveTo": "141",
      "type": "rock",
      "moves": [
         "scratch",
         "mud shot"
      ],
      "curve": 1.6
   },
   "141": {
      "name": "Kabutops",
      "attack": 115,
      "defense": 105,
      "type": "rock",
      "moves": [
         "scratch",
         "mud shot",
         "slash",
         "ancientpower"
      ],
      "curve": 1.6
   },
   "142": {
      "name": "Aerodactyl",
      "attack": 105,
      "defense": 65,
      "type": "rock",
      "moves": [
         "wing attack",
         "bite",
         "ancientpower"
      ],
      "curve": 1
   },
   "143": {
      "name": "Snorlax",
      "attack": 110,
      "defense": 65,
      "type": "normal",
      "moves": [
         "tackle",
         "headbutt",
         "snore",
         "body slam"
      ],
      "curve": 1,
      "levels": [25, 25],
      "probability": 2
   },
   "144": {
      "name": "Articuno",
      "attack": 85,
      "defense": 100,
      "type": "ice",
      "moves": [
         "gust",
         "powder snow",
         "ice beam",
         "blizzard"
      ],
      "curve": 1,
      "levels": [50, 50],
      "probability": 1
   },
   "145": {
      "name": "Zapdos",
      "attack": 90,
      "defense": 85,
      "type": "electric",
      "moves": [
         "peck",
         "thundershock",
         "drill peck",
         "thunder"
      ],
      "curve": 1,
      "levels": [50, 50],
      "probability": 1
   },
   "146": {
      "name": "Moltres",
      "attack": 100,
      "defense": 90,
      "type": "fire",
      "moves": [
         "wing attack",
         "ember",
         "flamethrower",
         "heat wave"
      ],
      "curve": 1,
      "levels": [50, 50],
      "probability": 1
   },
   "147": {
      "name": "Dratini",
      "attack": 64,
      "defense": 45,
      "evolveLevel": 30,
      "evolveTo": "148",
      "type": "dragon",
      "moves": [
         "twister",
         "slam"
      ],
      "curve": 1,
      "levels": [10, 20],
      "probability": 6
   },
   "148": {
      "name": "Dragonair",
      "attack": 84,
      "defense": 65,
      "evolveLevel": 55,
      "evolveTo": "149",
      "type": "dragon",
      "moves": [
         "twister",
         "slam"
      ],
      "curve": 1
   },
   "149": {
      "name": "Dragonite",
      "attack": 134,
      "defense": 95,
      "type": "dragon",
      "moves": [
         "twister",
         "slam",
         "wing attack"
      ],
      "curve": 1
   },
   "150": {
      "name": "Mewtwo",
      "attack": 110,
      "defense": 90,
      "type": "psychic",
      "moves": [
         "confusion",
         "swift",
         "psychic"
      ],
      "curve": 1,
      "levels": [70, 70],
      "probability": 1
   },
   "151": {
      "name": "Mew",
      "attack": 100,
      "defense": 100,
      "type": "psychic",
      "moves": [
         "pound",
         "mega punch",
         "psychic",
         "ancientpower"
      ],
      "curve": 1.3,
      "levels": [50, 50],
      "probability": .3
   }
}

export default POKEMONDETAILS