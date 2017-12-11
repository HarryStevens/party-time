// https://github.com/HindustanTimesLabs/party-time#readme Version 3.0.5. Copyright 2017 Hindustan Times.
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.pt = {})));
}(this, (function (exports) { 'use strict';

var json = [{
  "name": "Aadivasi Sena Party",
  "abbr": "ADSP",
  "type": "unrecognised"
}, {
  "name": "Aam Aadmi Party",
  "abbr": "AAP",
  "founded": 2012,
  "type": "state",
  "location": "Delhi, Punjab",
  "symbol": "Broom"
}, {
  "name": "Adarsh Political Party",
  "abbr": "APP",
  "type": "unrecognised",
  "location": "India"
}, {
  "name": "Adivasi Jan Kalyan Party",
  "abbr": "AJKP",
  "type": "unrecognised"
}, {
  "name": "Ajeya Bharat Party",
  "abbr": "AJBP",
  "type": "unrecognised"
}, {
  "name": "Akhil Bartiya Manav Seva Dal",
  "abbr": "ABMSD",
  "type": "unrecognised"
}, {
  "name": "Akhil Bharat Hindu Mahasabha",
  "abbr": "ABHM",
  "type": "unrecognised",
  "location": "India",
  "variations": {
    "name": ["Hindu Mahasabha"]
  }
}, {
  "name": "Akhil Bharatiya Congress Dal (Ambedkar)",
  "abbr": "ABCD(A)",
  "type": "unrecognised",
  "symbol": "Candles,Kite"
}, {
  "name": "Akhil Bharatiya Hindu Mahasabha",
  "abbr": "HMS",
  "type": "unrecognised",
  "location": "India"
}, {
  "name": "Akhil Bharatiya Jan Sangh",
  "abbr": "ABJS",
  "type": "unrecognised"
}, {
  "name": "Akhil Bharatiya Ram Rajya Parishad (Prem Ballabh Vyas)",
  "abbr": "ABRRP(P)",
  "type": "unrecognised",
  "variations": {
    "abbr": ["ABRRP(P )"]
  }
}, {
  "name": "Akhil Bharatiya Ram Rajya Parishad (Prem Ballabh Vyas)",
  "abbr": "ABRRP(P)",
  "type": "unrecognised",
  "variations": {
    "abbr": ["ABRRP (P)", "ABRRP( P )"]
  }
}, {
  "name": "All India Anna Dravida Munnetra Kazhagam",
  "abbr": "AIADMK",
  "founded": 1972,
  "type": "state",
  "location": "Tamil Nadu, Puducherry",
  "symbol": "Two leaves"
}, {
  "name": "All India Dalit Muslim Minorities Suraksha Mahasangh",
  "abbr": "DMM",
  "type": "unrecognised"
}, {
  "name": "All India Forward Bloc",
  "abbr": "AIFB",
  "founded": 1939,
  "type": "state",
  "location": "West Bengal",
  "symbol": "Lion"
}, {
  "name": "All India Manavadhikar Rajnaitik Dal",
  "abbr": "AIMRD",
  "type": "unrecognised",
  "location": "Uttar Pradesh, Himachal Pradesh",
  "symbol": "Road Roller"
}, {
  "name": "All India Majlis-e-Ittehadul Muslimeen",
  "abbr": "AIMIM",
  "founded": 1927,
  "type": "state",
  "location": "Telangana",
  "symbol": "Kite",
  "variations": {
    "name": ["All India Majlis-E-Ittehadul Muslimeen"]
  }
}, {
  "name": "All India N.R. Congress",
  "abbr": "AINRC",
  "founded": 2011,
  "type": "state",
  "location": "Puducherry",
  "symbol": "Jug"
}, {
  "name": "All India Rashtriya Janata Party",
  "abbr": "AIRJP",
  "type": "state",
  "location": "Gujarat"
}, {
  "name": "All India Trinamool Congress",
  "abbr": "AITC",
  "founded": 1998,
  "type": "national",
  "location": "India",
  "symbol": "Flowers & grass"
}, {
  "name": "All India United Democratic Front",
  "abbr": "AIUDF",
  "founded": 2004,
  "type": "state",
  "location": "Assam",
  "symbol": "Lock and key"
}, {
  "name": "All Jharkhand Students Union",
  "abbr": "AJSU",
  "founded": 1986,
  "type": "state",
  "location": "Jharkhand",
  "symbol": "Banana"
}, {
  "name": "Ambedkar Samaj Party",
  "abbr": "ASP",
  "type": "unrecognised"
}, {
  "name": "Asom Gana Parishad",
  "abbr": "AGP",
  "founded": 1985,
  "type": "state",
  "location": "Assam",
  "symbol": "Elephant"
}, {
  "name": "Bahujan Mukti Party",
  "abbr": "BMUP",
  "founded": 2012,
  "type": "unrecognised",
  "variations": {
    "abbr": ["BMP"]
  },
  "symbol": "Air Conditioner,Cart,Cot"
}, {
  "name": "Bahujan Samaj Party",
  "abbr": "BSP",
  "founded": 1984,
  "type": "national",
  "location": "India",
  "symbol": "Elephant (except in Assam)"
}, {
  "name": "Bahujan Suraksha Dal",
  "abbr": "BSDL",
  "type": "unrecognised"
}, {
  "name": "Bharatiya Bahujan Party",
  "abbr": "BHBP",
  "type": "unrecognised",
  "location": "India"
}, {
  "name": "Bharatiya Dalit Congress",
  "abbr": "BhDC",
  "type": "unrecognised",
  "variations": {
    "abbr": ["BHDC"]
  }
}, {
  "name": "Bhartiya Himachal Jan Vikas Party",
  "abbr": "BHJVP",
  "symbol": "Boat with Man and Sail",
  "type": "unrecognised"
}, {
  "name": "Bharatiya Jan Shakti",
  "abbr": "BJSH",
  "type": "unrecognised"
}, {
  "name": "Bharatiya Jana Sangh",
  "abbr": "BJS",
  "founded": "1951",
  "type": "national",
  "location": "India",
  "symbol": "Diya"
}, {
  "name": "Bharatiya Janata Dal",
  "abbr": "BhJD",
  "type": "unrecognised",
  "variations": {
    "abbr": ["BHJD"]
  }
}, {
  "name": "Bharatiya Janata Party",
  "abbr": "BJP",
  "founded": 1980,
  "type": "national",
  "location": "India",
  "symbol": "Lotus"
}, {
  "name": "Bharatiya Jankranti Party",
  "abbr": "BJNKP",
  "type": "unrecognised",
  "location": "Gujarat"
}, {
  "name": "Bharatiya Krishi Udyog Sangh",
  "abbr": "BKUS",
  "type": "unrecognised"
}, {
  "name": "Bharatiya Lok Dal",
  "abbr": "BLD",
  "founded": "1974",
  "type": "national",
  "location": "India"
}, {
  "name": "Bharatiya Minorities Suraksha Mahasangh",
  "abbr": "BMSM",
  "type": "unrecognised"
}, {
  "name": "Bharatiya National Janata Dal",
  "abbr": "BNJD",
  "type": "unrecognised"
}, {
  "name": "Bharatiya Navshakti Party",
  "abbr": "BNP",
  "type": "unrecognised",
  "variations": "Bharatiya Navshakti party"
}, {
  "name": "Biju Janata Dal",
  "abbr": "BJD",
  "founded": 1997,
  "type": "state",
  "location": "Odisha",
  "symbol": "Conch"
}, {
  "name": "Bodoland People's Front",
  "abbr": "BPF",
  "founded": 1985,
  "type": "state",
  "location": "Assam",
  "symbol": "Nagol",
  "variations": {
    "name": ["Bodoland Peoples Front", "Bodoland People’s Front"]
  }
}, {
  "name": "Communist Party of India",
  "abbr": "CPI",
  "founded": 1925,
  "type": "national",
  "location": "India",
  "symbol": "Ears of corn and sickle"
}, {
  "name": "Communist Party of India (Marxist)",
  "abbr": "CPI(M)",
  "founded": 1964,
  "type": "national",
  "location": "India",
  "symbol": "Hammer sickle and star",
  "variations": {
    "abbr": ["CPM"],
    "name": ["Communist Party of India  (Marxist)", "Communist Party of India  (Marxist)"]
  }
}, {
  "name": "Communist Party of India (Marxist-Leninist) (Liberation)",
  "abbr": "CPI(ML)(L)",
  "founded": 1974,
  "variations": {
    "abbr": ["CPI(ML)( L)"],
    "name": ["Communist Party of India  (Marxist-Leninist)  (Liberation)"]
  }
}, {
  "name": "Democratic Bharatiya Samaj Party",
  "abbr": "DBSP",
  "type": "unrecognised"
}, {
  "name": "Desiya Murpokku Dravida Kazhagam",
  "abbr": "DMDK",
  "founded": 2005,
  "type": "state",
  "location": "Tamil Nadu",
  "symbol": "Nagara"
}, {
  "name": "Doordarshi Party",
  "abbr": "DDP",
  "founded": 1980,
  "type": "unrecognised",
  "location": "India"
}, {
  "name": "Dravida Munnetra Kazhagam",
  "abbr": "DMK",
  "founded": 1949,
  "type": "state",
  "location": "Tamil Nadu, Puducherry",
  "symbol": "Rising sun"
}, {
  "name": "Gareebjan Samaj Party",
  "abbr": "GSP",
  "type": "unrecognised"
}, {
  "name": "Goa Forward Party",
  "abbr": "GFP",
  "founded": 2016,
  "type": "state",
  "location": "Goa",
  "symbol": "Coconut"
}, {
  "name": "Gondvana Gantantra Party",
  "abbr": "GGP",
  "type": "unrecognised"
}, {
  "name": "Gujarat Janata Parishad",
  "abbr": "GJP",
  "type": "unrecognised",
  "location": "Gujarat"
}, {
  "name": "Gujarat League",
  "abbr": "GJL",
  "type": "unrecognised",
  "location": "Gujarat"
}, {
  "name": "Gujarat Parivartan Party",
  "abbr": "GPP",
  "founded": "2012",
  "type": "unrecognised",
  "location": "Gujarat",
  "symbol": "Cricket bat"
}, {
  "name": "Gujarat Yuva Vikas Party",
  "abbr": "GYVP",
  "type": "unrecognised"
}, {
  "name": "Haryana Janhit Congress (BL)",
  "abbr": "HJC(BL)",
  "founded": 2007,
  "dissolved": 2016,
  "merged_into": "Indian National Congress",
  "type": "state",
  "location": "Haryana",
  "symbol": "tractor",
  "variations": {
    "abbr": ["HJC"]
  }
}, {
  "name": "Hill State People's Democratic Party",
  "abbr": "HSPDP",
  "founded": 1968,
  "type": "state",
  "location": "Meghalaya",
  "symbol": "Lion",
  "variations": {
    "name": ["Hill State Peoples Democratic Party", "Hill State People’s Democratic Party"]
  }
}, {
  "name": "Himachal Kranti Party",
  "abbr": "HKP",
  "type": "unrecognised",
  "location": "Himachal Pradesh"
}, {
  "name": "Himachal Lokhit Party",
  "abbr": "HLP",
  "type": "unrecognised",
  "location": "Himachal Pradesh"
}, {
  "name": "Himachal Swabhiman Party",
  "abbr": "HiSP",
  "type": "unrecognised",
  "location": "Himachal Pradesh",
  "variations": {
    "abbr": ["HISP"]
  }
}, {
  "name": "Himachal Vikas Congress",
  "abbr": "HVC",
  "type": "state",
  "location": "Himachal Pradesh"
}, {
  "name": "Hindu Swaraj Sanghathan",
  "abbr": "HSS",
  "type": "unrecognised"
}, {
  "name": "Hindusthan Nirman Dal",
  "abbr": "HND",
  "type": "unrecognised",
  "location": "India"
}, {
  "name": "Independent",
  "abbr": "IND"
}, {
  "name": "Indian Congress (Socialist)",
  "abbr": "ICS",
  "type": "unrecognised",
  "location": "India"
}, {
  "name": "Indian Congress (Socialist-Sarat Chandra Sinha)",
  "abbr": "ICS(SCS)",
  "founded": 1984,
  "type": "national",
  "location": "India"
}, {
  "name": "Indian Justice Party",
  "abbr": "IJP",
  "type": "unrecognised",
  "location": "India"
}, {
  "name": "Indian National Congress",
  "abbr": "INC",
  "founded": 1885,
  "type": "national",
  "location": "India",
  "symbol": "Hand"
}, {
  "name": "Indian National Congress (I)",
  "abbr": "INC(I)",
  "type": "national",
  "location": "India"
}, {
  "name": "Indian National Congress (Organisation)",
  "abbr": "NCO",
  "founded": "1969",
  "type": "national",
  "location": "India"
}, {
  "name": "Indian National Congress (U)",
  "abbr": "INC(U)",
  "type": "national",
  "location": "india"
}, {
  "name": "Indian National Lok Dal",
  "abbr": "INLD",
  "founded": 1999,
  "type": "state",
  "location": "Haryana",
  "symbol": "Spectacles"
}, {
  "name": "Indian Peoples Front",
  "abbr": "IPF",
  "type": "unrecognised",
  "variations": {
    "name": ["Indian People's Front", "Indian People’s Front"]
  }
}, {
  "name": "Indian Union Muslim League",
  "abbr": "IUML",
  "founded": 1948,
  "type": "state",
  "location": "Kerala",
  "symbol": "Ladder"
}, {
  "name": "Indians Front",
  "abbr": "IF",
  "type": "unrecognised"
}, {
  "name": "Jammu & Kashmir National Conference",
  "abbr": "JKNC",
  "founded": 1932,
  "type": "state",
  "location": "Jammu & Kashmir",
  "symbol": "Plough"
}, {
  "name": "Jammu & Kashmir National Panthers Party",
  "abbr": "JKNPP",
  "founded": 1982,
  "type": "state",
  "location": "Jammu & Kashmir",
  "symbol": "Bicycle"
}, {
  "name": "Jammu and Kashmir People's Democratic Party",
  "abbr": "JKPDP",
  "founded": 1998,
  "type": "state",
  "location": "Jammu & Kashmir",
  "symbol": "Inkpot and pen",
  "variations": {
    "name": ["Jammu and Kashmir Peoples Democratic Party", "Jammu and Kashmir People’s Democratic Party"]
  }
}, {
  "name": "Jan Sangh",
  "abbr": "JS"
}, {
  "name": "Janata Dal",
  "abbr": "JD",
  "founded": "1988",
  "type": "national",
  "location": "India",
  "symbol": "Wheel"
}, {
  "name": "Janata Dal (Secular)",
  "abbr": "JD(S)",
  "founded": 1999,
  "type": "state",
  "location": "Karnataka, Kerala",
  "symbol": "Lady farmer carrying paddy on her head",
  "variations": {
    "name": ["Janata Dal  (Secular)"]
  }
}, {
  "name": "Janata Dal (United)",
  "abbr": "JD(U)",
  "founded": 1999,
  "type": "state",
  "location": "Bihar",
  "symbol": "Arrow",
  "variations": {
    "name": ["Janata Dal  (United)"]
  }
}, {
  "name": "Janata Party (JP)",
  "abbr": "JNP(JP)",
  "type": "national",
  "location": "India"
}, {
  "name": "Janata Party (Secular) - Ch. Charan Singh",
  "abbr": "JNP(SC)",
  "type": "national",
  "location": "India"
}, {
  "name": "Janata Party (Secular) Raj Narain",
  "abbr": "JNP(SR)",
  "type": "national",
  "location": "india"
}, {
  "name": "Janmangal Paksh",
  "abbr": "JMP",
  "type": "unrecognised"
}, {
  "name": "Janral Samaj Party",
  "abbr": "JanSP",
  "symbol": "Sewing Machine",
  "type": "unrecognised"
}, {
  "name": "Janta Party",
  "abbr": "JNP",
  "founded": 1977,
  "type": "national",
  "location": "India",
  "variations": {
    "name": ["Janata Party"],
    "abbr": ["JP"]
  }
}, {
  "name": "Jharkhand Mukti Morcha",
  "abbr": "JMM",
  "founded": 1972,
  "type": "state",
  "location": "Jharkhand",
  "symbol": "Bow and arrow"
}, {
  "name": "Jharkhand Vikas Morcha (Prajatantrik)",
  "abbr": "JVM(P)",
  "founded": 2006,
  "type": "state",
  "location": "Jharkhand",
  "symbol": "Comb"
}, {
  "name": "Karnataka Janata Paksha",
  "abbr": "KJP",
  "founded": 2012,
  "type": "state",
  "location": "Karnataka",
  "symbol": "symbol not decided yet"
}, {
  "name": "Kerala Congress (M)",
  "abbr": "KC(M)",
  "founded": 1979,
  "type": "state",
  "location": "Kerala",
  "symbol": "Two leaves"
}, {
  "name": "Kisan Mazdoor Lok Paksha",
  "abbr": "KLP",
  "type": "unrecognised",
  "location": "Gujarat"
}, {
  "name": "Kisan Party Of India",
  "abbr": "KPI",
  "founded": 2014,
  "type": "state",
  "location": "BIHAR",
  "symbol": "Stool"
}, {
  "name": "Lok Dal",
  "abbr": "LKD",
  "founded": 1980,
  "type": "national",
  "location": "India"
}, {
  "name": "Lok Dal (B)",
  "abbr": "LKD(B)",
  "type": "national",
  "location": "India"
}, {
  "name": "Lok Gathbandhan Party",
  "abbr": "LGP",
  "type": "unrecognised"
}, {
  "name": "Lok Jan Shakti Party",
  "abbr": "LJNSP",
  "type": "unrecognised",
  "location": "India"
}, {
  "name": "Lok Janshakti Party",
  "abbr": "LJP",
  "founded": 2000,
  "type": "state",
  "location": "Bihar",
  "symbol": "Bungalow",
  "variations": {
    "name": ["Lok Jan Shakti Party"]
  }
}, {
  "name": "Lok Paritran",
  "abbr": "LKPT",
  "type": "unrecognised"
}, {
  "name": "Lok Raj Party Himachal Pradesh",
  "abbr": "LRP",
  "type": "unrecognised",
  "location": "Himachal Pradesh"
}, {
  "name": "Lokpriya Samaj Party",
  "abbr": "LPSP",
  "type": "unrecognised"
}, {
  "name": "Loktantrik Morcha Himachal Pradesh",
  "abbr": "LMHP",
  "type": "unrecognised",
  "location": "Himachal Pradesh"
}, {
  "name": "Loktantrik Rashrtavadi Party",
  "abbr": "LoRP",
  "type": "unrecognised",
  "variations": {
    "name": ["Loktantrik Rashtravadi Party"],
    "abbr": ["LORP"]
  }
}, {
  "name": "Loktantrik Samajwadi Party",
  "abbr": "LSWP",
  "type": "unrecognised"
}, {
  "name": "Maharashtra Navnirman Sena",
  "abbr": "MNS",
  "founded": 2006,
  "type": "state",
  "location": "Maharashtra",
  "symbol": "Railway engine"
}, {
  "name": "Maharashtrawadi Gomantak Party",
  "abbr": "MGP",
  "founded": 1963,
  "type": "state",
  "location": "Goa",
  "symbol": "Lion",
  "variations": {
    "name": ["Maharashtrawadi Gomantak"]
  }
}, {
  "name": "Manavadhikar Janshakti Party",
  "abbr": "MaJP",
  "type": "unrecognised",
  "variations": {
    "abbr": ["MAJP"]
  }
}, {
  "name": "Mizo National Front",
  "abbr": "MNF",
  "founded": 1959,
  "type": "state",
  "location": "Mizoram",
  "symbol": "Star"
}, {
  "name": "Mizoram People's Conference",
  "abbr": "MPC",
  "founded": 1972,
  "type": "state",
  "location": "Mizoram",
  "symbol": "Electric Bulb",
  "variations": {
    "name": ["Mizoram Peoples Conference", "Mizoram People’s Conference"]
  }
}, {
  "name": "Naga People's Front",
  "abbr": "NPF",
  "founded": 2002,
  "type": "state",
  "location": "Manipur, Nagaland",
  "symbol": "Cock",
  "variations": {
    "name": ["Nagaland Peoples Front", "Nagaland People’s Front"]
  }
}, {
  "name": "National Loktantrik Party",
  "abbr": "NLP",
  "type": "unrecognised"
}, {
  "name": "National People's Party",
  "abbr": "NPP",
  "founded": 2013,
  "type": "state",
  "location": "Meghalaya, Manipur",
  "symbol": "Book",
  "variations": {
    "name": ["National Peoples Party", "National People’s Party"]
  }
}, {
  "name": "National Secular Party",
  "abbr": "NSCP",
  "type": "unrecognised"
}, {
  "name": "Nationalist Congress Party",
  "abbr": "NCP",
  "founded": 1999,
  "type": "national",
  "location": "India",
  "symbol": "Clock"
}, {
  "name": "Navbharat Ekta Dal",
  "abbr": "NED",
  "type": "unrecognised"
}, {
  "name": "Navin Bharat Nirman",
  "abbr": "NBN",
  "type": "unrecognised"
}, {
  "name": "New Socialist Movement",
  "abbr": "NSM",
  "type": "unrecognised"
}, {
  "name": "New Socialist Movement Party",
  "abbr": "NSMP",
  "type": "unrecognised"
}, {
  "name": "Nutan Maha Gujarat Janta Parishad",
  "abbr": "NJP",
  "founded": "1960",
  "location": "Gujarat"
}, {
  "name": "Pattali Makkal Katchi",
  "abbr": "PMK",
  "founded": 1989,
  "type": "state",
  "location": "Puducherry",
  "symbol": "Mango"
}, {
  "name": "People's Democratic Alliance",
  "abbr": "PDA",
  "type": "state",
  "location": "Manipur",
  "symbol": "Crown",
  "variations": {
    "name": ["Peoples Democratic Alliance", "People’s Democratic Alliance"]
  }
}, {
  "name": "People's Party of Arunachal",
  "abbr": "PPA",
  "founded": 1987,
  "type": "state",
  "location": "Arunachal Pradesh",
  "symbol": "Maize",
  "variations": {
    "name": ["Peoples Party of Arunachal", "People’s Party of Arunachal"]
  }
}, {
  "name": "Peoples Republican Party",
  "abbr": "PRBP",
  "type": "unrecognised",
  "variations": {
    "name": ["People's Republican Party", "People’s Republican Party"]
  }
}, {
  "name": "Praja Socialist Party",
  "abbr": "PSP",
  "founded": "1952",
  "type": "national",
  "location": "India"
}, {
  "name": "Prajatantra Aadhaar Party",
  "abbr": "PAP",
  "type": "unrecognised"
}, {
  "name": "Pruutist Bloc India",
  "abbr": "PBI",
  "type": "unrecognised",
  "location": "India",
  "variations": {
    "name": ["Proutist Bloc India", "Proutist Bloc, India"]
  }
}, {
  "name": "Ram Rajya Parishad",
  "abbr": "RRP",
  "type": "unrecognised"
}, {
  "name": "Rashtravadi Pratap Sena",
  "abbr": "RPS",
  "type": "unrecognised"
}, {
  "name": "Rashtriya Azad Manch",
  "abbr": "RAM",
  "type": "unrecognised"
}, {
  "name": "Rashtriya Garib Dal",
  "abbr": "RGD",
  "type": "unrecognised",
  "location": "India"
}, {
  "name": "Rashtriya Janata Dal",
  "abbr": "RJD",
  "founded": 1997,
  "type": "state",
  "location": "Bihar, Jharkhand",
  "symbol": "Hurricane Lamp"
}, {
  "name": "Rashtriya Komi Ekta Party",
  "abbr": "RKEP",
  "type": "unrecognised"
}, {
  "name": "Rashtriya Krantikari Samajwadi Party",
  "abbr": "RKSP",
  "type": "unrecognised"
}, {
  "name": "Rashtriya Lok Dal",
  "abbr": "RLD",
  "founded": 1996,
  "type": "state",
  "location": "Uttar Pradesh",
  "symbol": "Hand pump"
}, {
  "name": "Rashtriya Lok Samta Party",
  "abbr": "RLSP",
  "founded": 2013,
  "type": "state",
  "location": "Bihar",
  "symbol": "Ceiling fan"
}, {
  "name": "Rashtriya Majdoor Paksha",
  "abbr": "RMP",
  "type": "unrecognised",
  "location": "Gujarat"
}, {
  "name": "Rashtriya Pragtisheel Morcha",
  "abbr": "RPM",
  "type": "unrecognised"
}, {
  "name": "Rashtriya Samaj Paksha",
  "abbr": "RSPS",
  "type": "unrecognised"
}, {
  "name": "Rashtriya Samajwadi Party (Secular)",
  "abbr": "RSP(S)",
  "type": "unrecognised",
  "variations": {
    "name": ["Rashtriya Samajwadi Party  (Secular)"]
  }
}, {
  "name": "Rashtriya Sindhi Congress",
  "abbr": "RSDC",
  "type": "unrecognised"
}, {
  "name": "Rashtriya Surajya Parishad",
  "abbr": "RSRP",
  "type": "unrecognised"
}, {
  "name": "Rastriya Gurujan Party",
  "abbr": "RGJP",
  "type": "unrecognised"
}, {
  "name": "Republican",
  "abbr": "REP"
}, {
  "name": "Republican Janata Party",
  "abbr": "RJP",
  "type": "unrecognised",
  "location": "India"
}, {
  "name": "Republican Party of India",
  "abbr": "RPI",
  "founded": 1956
}, {
  "name": "Republican Party of India (A)",
  "abbr": "RPI(A)",
  "founded": 1999
}, {
  "name": "Republican Party of India (Balakrishnan)",
  "abbr": "RPI(B)",
  "type": "unrecognised"
}, {
  "name": "Republican Party of India (Democratic)",
  "abbr": "RPI(D)",
  "type": "unrecognised"
}, {
  "name": "Republican Party of India (Khobragade)",
  "abbr": "RPK",
  "type": "unrecognised"
}, {
  "name": "Republican Party of India (Khobragade)",
  "abbr": "RPI(K)",
  "type": "unrecognised",
  "variations": {
    "abbr": ["RPI(KH)"]
  }
}, {
  "name": "Revolutionary Socialist Party",
  "abbr": "RSP",
  "founded": 1940,
  "type": "state",
  "location": "Kerala, West Bengal",
  "symbol": "Spade and stoker"
}, {
  "name": "Samaj Adhikar Kalyan Party",
  "abbr": "SAKP",
  "type": "unrecognised"
}, {
  "name": "Samajwadi Janata Party (Rashtriya)",
  "abbr": "SJP(R)",
  "type": "state",
  "location": "Himachal Pradesh"
}, {
  "name": "Samajwadi Janata Party (Rashtriya)",
  "abbr": "SJP(R)",
  "type": "unrecognised"
}, {
  "name": "Samajwadi Party",
  "abbr": "SP",
  "founded": 1992,
  "type": "state",
  "location": "Uttar Pradesh",
  "symbol": "Bicycle"
}, {
  "name": "Samata Partu",
  "abbr": "SAP",
  "type": "national",
  "location": "India"
}, {
  "name": "Samyukta Socialist Party",
  "abbr": "SOP",
  "founded": 1964,
  "type": "national",
  "location": "India",
  "variations": {
    "name": ["Samyukta Socialist Party/Socialist Party"]
  }
}, {
  "name": "Sanghata Socialist Party",
  "abbr": "SSP",
  "type": "national",
  "location": "India"
}, {
  "name": "Sardar Patel Congress Party",
  "abbr": "SPCP",
  "type": "unrecognised"
}, {
  "name": "Sardar Vallabhbhai Patel Party",
  "abbr": "SVPP",
  "type": "unrecognised"
}, {
  "name": "Shiromani Akali Dal",
  "abbr": "SAD",
  "founded": 1920,
  "type": "state",
  "location": "Punjab",
  "symbol": "Scale"
}, {
  "name": "Shivsena",
  "abbr": "SS",
  "founded": 1966,
  "type": "state",
  "location": "Maharashtra",
  "symbol": "Bow and arrow",
  "variations": {
    "name": ["Shiv Sena"],
    "abbr": ["SHS"]
  }
}, {
  "name": "Sikkim Democratic Front",
  "abbr": "SDF",
  "founded": 1993,
  "type": "state",
  "location": "Sikkim",
  "symbol": "Umbrella"
}, {
  "name": "Sikkim Krantikari Morcha",
  "abbr": "SKM",
  "founded": 2013,
  "type": "state",
  "location": "Sikkim",
  "symbol": "Table lamp"
}, {
  "name": "Social Party (India)",
  "abbr": "SP(I)",
  "type": "unrecognised"
}, {
  "name": "Socialist",
  "abbr": "SOC"
}, {
  "name": "Socialist League of India",
  "abbr": "SOLI",
  "type": "unrecognised"
}, {
  "name": "Socialist Party (Lohia)",
  "abbr": "SOP(L)",
  "type": "unrecognised"
}, {
  "name": "Socialist Party (Ramakant Pandey)",
  "abbr": "SOP(P)",
  "type": "unrecognised"
}, {
  "name": "Socialist Unity Centre of India (Communist)",
  "abbr": "SUCI(C)",
  "type": "unrecognised",
  "location": "India",
  "variations": {
    "abbr": ["SUCI"],
    "name": ["SOCIALIST UNITY CENTRE OF INDIA (COMMUNIST)"]
  }
}, {
  "name": "Swabhiman Party",
  "abbr": "SwP",
  "warning": "Unofficial abbreviation"
}, {
  "name": "Swatantra Party",
  "abbr": "SWA",
  "founded": "1959",
  "type": "national",
  "location": "India"
}, {
  "name": "Telangana Rashtra Samithi",
  "abbr": "TRS",
  "founded": 2001,
  "type": "state",
  "location": "Telangana,Andhra Pradesh",
  "symbol": "Car"
}, {
  "name": "Telugu Desam Party",
  "abbr": "TDP",
  "founded": 1982,
  "type": "state",
  "location": "Andhra Pradesh, Telangana",
  "symbol": "Bicycle"
}, {
  "name": "United Democratic Party",
  "abbr": "UDP",
  "founded": 1972,
  "type": "state",
  "location": "Meghalaya",
  "symbol": "Drum"
}, {
  "name": "Vishva Hindustani Sangathan",
  "abbr": "VHS",
  "type": "unrecognised"
}, {
  "name": "Yuva Sarkar",
  "abbr": "YuS",
  "type": "unrecognised",
  "variations": {
    "abbr": ["YUS"]
  }
}, {
  "name": "Yuva Vikas Party",
  "abbr": "YVP",
  "type": "unrecognised",
  "location": "Gujarat"
}, {
  "name": "Yuvajana Sramika Rythu Congress Party",
  "abbr": "YSRCP",
  "founded": 2011,
  "type": "state",
  "location": "Andhra Pradesh, Telangana",
  "symbol": "Ceiling fan",
  "variations": {
    "name": ["YSR Congress Party"]
  }
}, {
  "name": "Zoram Nationalist Party",
  "abbr": "ZNP",
  "founded": 1997,
  "type": "state",
  "location": "Mizoram",
  "symbol": "Sun (without rays)"
}];

/**
* A utility function that is not exported with the module.
* @param {string} x A string 
* @returns {boolean} Whether all the letters in the string entered are uppercase.
* @private
*/
function isAllCaps(x) {
  return x === x.toUpperCase();
}

/**
* Guesses whether the party string entered is an abbreviation or the full name. 
* @param {string} party The party, either a full name or an abbrevation.
* @returns {string} Returns "abbr" or "name".
*/
function getType(party){

  var match = json.filter(function(d){

    return d.abbr.toLowerCase() == party.toLowerCase() || (d.variations && d.variations.abbr && (d.variations.abbr.indexOf(party.toUpperCase()) !== -1 || d.variations.abbr.indexOf(party) !== -1))

  }).length > 0;

  return isAllCaps(party) || match ? "abbr" : "name";
}

/**
* Gets information about the party. If you do not specify a type in the second argument, it will guess the type.
* @param {string} party The party, either a full name or an abbrevation, to get information about.
* @param {string} [type = null] A type, which can be either "abbr" or "name". This argument is optional. `party-time` usually can determine the type by itself, but you can declare it explicitly, just in case.
* @returns {object} An object with information about the party. If the party entered is not found in the library, returns an object containing the party name and a warning.
* @example
* pt.getInfo("BJP");
* //{   
* //  name: "Bharatiya Janata Party",
* //  abbr: "BJP",
* //  founded: 1980,
* //  type: "national",
* //  location: "India",
* //  symbol: "Lotus" 
* //}
* 
* pt.getInfo("Indian National Congress");
* //{ 
* //  name: "Indian National Congress",
* //  abbr: "INC",
* //  founded: 1885,
* //  type: "national",
* //  location: "India",
* //  symbol: "Hand"
* //}
* 
* pt.getInfo("cpm");
* //{ 
* //  name: "Communist Party of India (Marxist)",
* //  abbr: "CPI(M)",
* //  founded: 1964,
* //  type: "national",
* //  location: "India",
* //  symbol: "Hammer sickle and star",
* //  variations: { abbr: [ "CPM" ] } 
* // }
* 
* pt.getInfo("Not a real party") // { name: 'Not a real party', warning: 'No match in library' }
*/  
function getInfo(party, type){
  
  type = type ? type : getType(party);

  party = type == "abbr" ? party.toUpperCase() : party;

  var out = json.filter(function(d){
    return d[type] == party || (d.variations && d.variations[type] && d.variations[type].indexOf(party) != -1);
  });

  if (out.length > 0){
    return out[0];
  } else {
    var obj = {};
    obj[type] = party;
    obj.warning = "No match in library";
    return obj;
  }

}

/**
* Converts a party abbreviation to its full name or vice versa. If the party entered is not found in the library, returns the party entered.
* @param {string} party The party, either a full name or an abbrevation, to convert.
* @param {object} [options = {greedy: TRUE}] An object specifying options for the conversion.
* @param {boolean} [options.greedy = TRUE] If `true`, the function does the conversion automatically and returns a string. If there is no match in the library, it will return the original string. If `false`, the function returns an object with the properties `abbr`, `name` and, when applicable, `variations`.
* @param {string} [options.type = null] By default, the function will guess the type of the party string by matching it against the party names and abbreviations in the library. You can override this behavior and explicitly specify the type of party string by passing `"abbr"` or `"name"`.
* @returns {(string|object)} A string with the converted party or, if the conversion is not set to greedy, an object with information about the party.
* @example
* pt.convert("BJP"); // "Bharatiya Janata Party"
* pt.convert("BJP", { greedy: false }); // { abbr: "BJP", name: "Bharatiya Janata Party" }
* pt.convert("BJP", { greedy: true }); // "Bharatiya Janata Party"
* pt.convert("bjp"); // "Bharatiya Janata Party"
* pt.convert("cpm", { greedy: false }); // { abbr: "CPI(M)", name: "Communist Party of India (Marxist)", variations: { abbr: ["CPM"] } }
* pt.convert("Indian National Congress"); // "INC"
* pt.convert("Not a real party"); // "Not a real party"
* pt.convert("NARP"); // "NARP"
* pt.convert("narp", { type: "abbr" }); // "NARP"
* pt.convert("narp", { greedy: false, type: "name" }); // { name: "narp", warning: "No match in libary" }
*/
function convert(party, options){

  // Should the conversion be greedy? Defaults to TRUE.
  var greedy = options && options.greedy === false ? false : true;

  // Determine the type
  var type = options && options.type ? options.type : getType(party);

  // Get information about the party
  var info = getInfo(party, type);

  // Figure out what to return
  if (greedy) {
    if (info.warning) {
      return info[type];
    } else {
      return info[type == "abbr" ? "name" : "abbr"];
    }
  } else {
    var obj = {};
    if (info.warning){
      obj[type] = info[type];
      obj.warning = info.warning;
    } else {
      obj.abbr = info.abbr;
      obj.name = info.name;
      if (info.variations) {
        obj.variations = info.variations;
      }
    }
    return obj;
  }

}

var version = "3.0.5";

var meta = {
  parties_count: json.length,
  version: version,
  last_updated: "November 2, 2017"
};

exports.getType = getType;
exports.getInfo = getInfo;
exports.convert = convert;
exports.meta = meta;

Object.defineProperty(exports, '__esModule', { value: true });

})));
