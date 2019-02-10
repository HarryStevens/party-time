// https://github.com/HarryStevens/party-time#readme Version 3.2.54. Copyright 2019 Harry Stevens.
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.pt = {})));
}(this, (function (exports) { 'use strict';

var json = [
  {
    "name": "Aadijan Mukti Sena",
    "abbr": "AMS",
    "type": "unrecognised"
  },
  {
    "name": "Aadivasi Sena Party",
    "abbr": "ADSP",
    "type": "unrecognised"
  },
  {
    "name": "Aam Aadmi Party",
    "abbr": "AAP",
    "founded": 2012,
    "type": "state",
    "location": "Delhi, Punjab",
    "symbol": "Broom"
  },
  {
    "name": "Adarsh Political Party",
    "abbr": "APP",
    "type": "unrecognised",
    "location": "India"
  },
  {
    "name": "Adarsh Rashtriya Vikas Party",
    "abbr": "ARVP"
  },
  {
    "name": "Adivasi Jan Kalyan Party",
    "abbr": "AJKP",
    "type": "unrecognised"
  },
  {
    "name": "Advait Ishwasyam Congress",
    "abbr": "AIC",
    "type": "unrecognised"
  },
  {
    "name": "Agar Jan Party",
    "abbr": "AGRJP",
    "type": "unrecognised"
  },
  {
    "name": "Ajeya Bharat Party",
    "abbr": "AJBP",
    "type": "unrecognised"
  },
  {
    "name": "Akhand Bharat Samaj Party",
    "abbr": "ABSP",
    "type": "unrecognised"
  },
  {
    "name": "Akhil Bartiya Manav Seva Dal",
    "abbr": "ABMSD",
    "type": "unrecognised"
  },
  {
    "name": "Akhil Bharat Hindu Mahasabha",
    "abbr": "ABHM",
    "type": "unrecognised",
    "location": "India",
    "variations": {
      "name": [
        "Hindu Mahasabha"
      ],
      "abbr": [
        "ABHIM"
      ]
    }
  },
  {
    "name": "Akhil Bharatiya Ashok Sena",
    "abbr": "ABAS",
    "type": "unrecognised"
  },
  {
    "name": "Akhil Bharatiya Congress Dal (Ambedkar)",
    "abbr": "ABCD(A)",
    "type": "unrecognised",
    "symbol": "Candles,Kite"
  },
  {
    "name": "Akhil Bharatiya Desh Bhakt Morcha",
    "abbr": "ABDBM",
    "type": "unrecognised"
  },
  {
    "name": "Akhil Bharatiya Hindu Mahasabha",
    "abbr": "HMS",
    "type": "unrecognised",
    "location": "India"
  },
  {
    "name": "Akhil Bharatiya Jan Sangh",
    "abbr": "ABJS",
    "type": "unrecognised"
  },
  {
    "name": "Akhil Bharatiya Manav Adhikar Dal",
    "abbr": "ABMAD"
  },
  {
    "name": "Akhil Bharatiya Ram Rajya Parishad (Prem Ballabh Vyas)",
    "abbr": "ABRRP(P)",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "ABRRP (P)",
        "ABRRP( P )",
        "ABRRP(P )"
      ]
    }
  },
  {
    "name": "Akhil Bhartiya Atyant Pichara Sangharsh Morcha Party",
    "abbr": "ABAPSMP",
    "type": "unrecognised"
  },
  {
    "name": "Akhil Bhartiya Gondwana Party",
    "abbr": "ABGP",
    "type": "unrecognised"
  },
  {
    "name": "Akhil Bhartiya Hind Kranti Party",
    "abbr": "ABKP",
    "type": "unrecognised"
  },
  {
    "name": "Akhil Bhartiya Sindhu Samajwadi Party",
    "abbr": "ABSSP"
  },
  {
    "name": "Akhil Jan Vikas Dal",
    "abbr": "AJVD",
    "type": "unrecognised"
  },
  {
    "name": "Akhila India Jananayaka Makkal Katchi (Dr. Issac)",
    "abbr": "AIJMK"
  },
  {
    "name": "All India Anna Dravida Munnetra Kazhagam",
    "abbr": "AIADMK",
    "founded": 1972,
    "type": "state",
    "location": "Tamil Nadu, Puducherry",
    "symbol": "Two leaves",
    "variations": {
      "abbr": [
        "ADMK"
      ]
    }
  },
  {
    "name": "All India Babu Jagjivan Ram Saheb National Congress",
    "abbr": "AIBJRBSNC",
    "type": "unrecognised"
  },
  {
    "name": "All India Dalit Muslim Minorities Suraksha Mahasangh",
    "abbr": "DMM",
    "type": "unrecognised"
  },
  {
    "name": "All India Forward Bloc",
    "abbr": "AIFB",
    "founded": 1939,
    "type": "state",
    "location": "West Bengal",
    "symbol": "Lion",
    "variations": {
      "abbr": [
        "FBL"
      ]
    }
  },
  {
    "name": "All India Forward Bloc (Subhasist)",
    "abbr": "AIFB(S)",
    "variations": {
      "abbr": [
        "AIFB(Subhasist)"
      ]
    }
  },
  {
    "name": "All India Majlis-e-Ittehadul Muslimeen",
    "abbr": "AIMIM",
    "founded": 1927,
    "type": "state",
    "location": "Telangana",
    "symbol": "Kite",
    "variations": {
      "name": [
        "All India Majlis-E-Ittehadul Muslimeen"
      ]
    }
  },
  {
    "name": "All India Manavadhikar Rajnaitik Dal",
    "abbr": "AIMRD",
    "type": "unrecognised",
    "location": "Uttar Pradesh, Himachal Pradesh",
    "symbol": "Road Roller"
  },
  {
    "name": "All India Minorities Front",
    "abbr": "AIMF",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "AIMP"
      ]
    }
  },
  {
    "name": "All India N.R. Congress",
    "abbr": "AINRC",
    "founded": 2011,
    "type": "state",
    "location": "Puducherry",
    "symbol": "Jug"
  },
  {
    "name": "All India Party for the Protection of Civil Rights",
    "abbr": "AIPPMR"
  },
  {
    "name": "All India Rashtriya Janata Party",
    "abbr": "AIRJP",
    "type": "state",
    "location": "Gujarat"
  },
  {
    "name": "All India Trinamool Congress",
    "abbr": "AITC",
    "founded": 1998,
    "type": "national",
    "location": "India",
    "symbol": "Flowers & grass",
    "variations": {
      "abbr": [
        "TMC"
      ]
    }
  },
  {
    "name": "All India United Democratic Front",
    "abbr": "AIUDF",
    "founded": 2004,
    "type": "state",
    "location": "Assam",
    "symbol": "Lock and key"
  },
  {
    "name": "All Jharkhand Students Union",
    "abbr": "AJSU",
    "founded": 1986,
    "type": "state",
    "location": "Jharkhand",
    "symbol": "Banana",
    "variations": {
      "abbr": [
        "AJSU Party"
      ]
    }
  },
  {
    "name": "Ambedkar National Congress",
    "abbr": "ANC"
  },
  {
    "name": "Ambedkar Samaj Party",
    "abbr": "ASP",
    "type": "unrecognised"
  },
  {
    "name": "Amra Bengali",
    "abbr": "AMB",
    "location": "Tripura, Bihar, Odisha, Assam, Jharkhand",
    "variations": {
      "name": [
        "Amra Bangalee"
      ],
      "abbr": [
        "AB"
      ]
    }
  },
  {
    "name": "Anaithinthiya Thamizhaga Munnetra Kazhagam",
    "abbr": "ATMK"
  },
  {
    "name": "Apna Dal",
    "abbr": "AD",
    "founded": 1995,
    "type": "state",
    "symbol": "Cup and Saucer"
  },
  {
    "name": "Arunachal Congress",
    "abbr": "AC",
    "founded": 1996,
    "type": "state",
    "location": "Arunachal Pradesh"
  },
  {
    "name": "Asom Gana Parishad",
    "abbr": "AGP",
    "founded": 1985,
    "type": "state",
    "location": "Assam",
    "symbol": "Elephant"
  },
  {
    "name": "Assam United Democratic Front",
    "abbr": "AUDF",
    "type": "unrecognised",
    "location": "Assam"
  },
  {
    "name": "Awami Party",
    "abbr": "AP",
    "type": "unrecognised"
  },
  {
    "name": "Azad Janata Party",
    "abbr": "AJP",
    "location": "Chhattisgarh",
    "type": "unrecognised"
  },
  {
    "name": "Backward Classes Democratic Party, J&K",
    "abbr": "BCDP"
  },
  {
    "name": "Badavara Shramikara Raitara Congress Party",
    "abbr": "BSRC",
    "variations": {
      "abbr": [
        "BSRCP"
      ]
    }
  },
  {
    "name": "Bahujan Kisan Dal",
    "abbr": "BKD"
  },
  {
    "name": "Bahujan Mukti Party",
    "abbr": "BMUP",
    "founded": 2012,
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "BMP"
      ]
    },
    "symbol": "Air Conditioner,Cart,Cot"
  },
  {
    "name": "Bahujan Republican Ekta Manch",
    "abbr": "BREM"
  },
  {
    "name": "Bahujan Samaj Party",
    "abbr": "BSP",
    "founded": 1984,
    "type": "national",
    "location": "India",
    "symbol": "Elephant (except in Assam)"
  },
  {
    "name": "Bahujan Samaj Party (Ambedkar)",
    "abbr": "BSP(A)"
  },
  {
    "name": "Bahujan Samaj Party (Ambedkar-Phule)",
    "abbr": "BSP(AP)",
    "type": "unrecognised",
    "variations": {
      "name": [
        "Bahujan Samaj Party(Ambedkar-Phule)"
      ]
    }
  },
  {
    "name": "Bahujan Samaj Vikas Party",
    "abbr": "BHSVP"
  },
  {
    "name": "Bahujan Sangharsh Party (Kanshiram)",
    "abbr": "BSP(K)",
    "variations": {
      "abbr": [
        "BSP(Kanshiram)"
      ]
    }
  },
  {
    "name": "Bahujan Sangharshh Dal",
    "abbr": "BASD",
    "variations": {
      "abbr": [
        "BA S D"
      ]
    }
  },
  {
    "name": "Bahujan Shakti",
    "abbr": "BSA"
  },
  {
    "name": "Bahujan Suraksha Dal",
    "abbr": "BSDL",
    "type": "unrecognised"
  },
  {
    "name": "Bahujan Uday Manch",
    "abbr": "BUM"
  },
  {
    "name": "Bahujan Vikas Aaghadi",
    "abbr": "BVA"
  },
  {
    "name": "Bahujan Vikas Party",
    "abbr": "BVP",
    "type": "unrecognised"
  },
  {
    "name": "Bajjikanchal Vikas Party",
    "abbr": "BJKVP",
    "type": "unrecognised"
  },
  {
    "name": "Bharat Dal",
    "abbr": "BD"
  },
  {
    "name": "Bharat Ki Lok Jimmedar Party",
    "abbr": "BKLJP"
  },
  {
    "name": "Bharat Kranti Rakshak Party",
    "abbr": "BKRP"
  },
  {
    "name": "Bharat Nav Nirman Party",
    "abbr": "BNNP"
  },
  {
    "name": "Bharat Punarnirman Dal",
    "abbr": "BPD",
    "type": "unrecognised"
  },
  {
    "name": "Bharat Uday Mission",
    "abbr": "BUDM"
  },
  {
    "name": "Bharat Vikas Morcha",
    "abbr": "BVM"
  },
  {
    "name": "Bharatheeya Sadharma Samsthapana Party",
    "abbr": "BHSASP",
    "type": "unrecognised"
  },
  {
    "name": "Bharathiya Dravida Makkal Katchi",
    "abbr": "BDMK"
  },
  {
    "name": "Bharathiya Sahayog Congress",
    "abbr": "BSC"
  },
  {
    "name": "Bharatiya Backward Party",
    "abbr": "BBP"
  },
  {
    "name": "Bharatiya Bahujan Party",
    "abbr": "BHBP",
    "type": "unrecognised",
    "location": "India"
  },
  {
    "name": "Bharatiya Chhatrasangh Bharat",
    "abbr": "BCB"
  },
  {
    "name": "Bharatiya Dalit Congress",
    "abbr": "BhDC",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "BHDC"
      ]
    }
  },
  {
    "name": "Bharatiya Eklavya Party",
    "abbr": "BEP"
  },
  {
    "name": "Bharatiya Ekta Dal",
    "abbr": "BED",
    "type": "unrecognised"
  },
  {
    "name": "Bharatiya Gaon Taj Dal",
    "abbr": "BGTD"
  },
  {
    "name": "Bharatiya Grameen Dal",
    "abbr": "BGD"
  },
  {
    "name": "Bharatiya Jai Bheem Party",
    "abbr": "BJBP"
  },
  {
    "name": "Bharatiya Jan Berojgar Chhatra Dal",
    "abbr": "BJBCD"
  },
  {
    "name": "Bharatiya Jan Kranti Dal (Democratic)",
    "abbr": "BJKD"
  },
  {
    "name": "Bharatiya Jan Shakti",
    "abbr": "BJSH",
    "type": "unrecognised"
  },
  {
    "name": "Bharatiya Jana Sangh",
    "abbr": "BJS",
    "founded": "1951",
    "type": "national",
    "location": "India",
    "symbol": "Diya"
  },
  {
    "name": "Bharatiya Janata Dal",
    "abbr": "BhJD",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "BHJD"
      ]
    }
  },
  {
    "name": "Bharatiya Janata Party",
    "abbr": "BJP",
    "founded": 1980,
    "type": "national",
    "location": "India",
    "symbol": "Lotus"
  },
  {
    "name": "Bharatiya Jankranti Party",
    "abbr": "BJNKP",
    "type": "unrecognised",
    "location": "Gujarat",
    "variations": {
      "abbr": [
        "BJKP"
      ]
    }
  },
  {
    "name": "Bharatiya Jantantrik Janta Dal",
    "abbr": "BJJD"
  },
  {
    "name": "Bharatiya Jantantrik Parishad",
    "abbr": "BJTP"
  },
  {
    "name": "Bharatiya Kisan Parivartan Party",
    "abbr": "BKPP"
  },
  {
    "name": "Bharatiya Krishi Udyog Sangh",
    "abbr": "BKUS",
    "type": "unrecognised"
  },
  {
    "name": "Bharatiya Lok Dal",
    "abbr": "BLD",
    "founded": "1974",
    "type": "national",
    "location": "India"
  },
  {
    "name": "Bharatiya Lok Kalyan Dal",
    "abbr": "BLKD"
  },
  {
    "name": "Bharatiya Loktantrik Party (Gandhi-Lohiawadi)",
    "abbr": "BLPGL",
    "variations": {
      "name": [
        "Bharatiya Loktantrik Party(Gandhi-Lohiawadi)"
      ]
    }
  },
  {
    "name": "Bharatiya Manavata Vikas Party",
    "abbr": "BMVP"
  },
  {
    "name": "Bharatiya Minorities Suraksha Mahasangh",
    "abbr": "BMSM",
    "type": "unrecognised"
  },
  {
    "name": "Bharatiya Momin Front",
    "abbr": "BMF",
    "type": "unrecognised"
  },
  {
    "name": "Bharatiya Nagrik Party",
    "abbr": "BNRP"
  },
  {
    "name": "Bharatiya National Janata Dal",
    "abbr": "BNJD",
    "type": "unrecognised"
  },
  {
    "name": "Bharatiya Navshakti Party",
    "abbr": "BNP",
    "type": "unrecognised",
    "variations": "Bharatiya Navshakti party"
  },
  {
    "name": "Bharatiya Peoples Party",
    "abbr": "BPP",
    "variations": {
      "name": [
        "Bharatiya People's Party",
        "Bharatiya People’s Party"
      ],
      "abbr": [
        "BHPP"
      ]
    }
  },
  {
    "name": "Bharatiya Pichhra Dal",
    "abbr": "BHPD"
  },
  {
    "name": "Bharatiya Praja Paksha",
    "abbr": "BPJP"
  },
  {
    "name": "Bharatiya Prajatantra Nirman Party",
    "abbr": "BPNP"
  },
  {
    "name": "Bharatiya Prajatantra Party",
    "abbr": "BPTP"
  },
  {
    "name": "Bharatiya Prajatantrik Shudh Gandhiwadi Krishak Dal",
    "abbr": "BPSGKD"
  },
  {
    "name": "Bharatiya Rashtravadi Samanta Party",
    "abbr": "BRSP",
    "type": "unrecognised"
  },
  {
    "name": "Bharatiya Rashtriya Morcha",
    "abbr": "BRM"
  },
  {
    "name": "Bharatiya Republican Paksha",
    "abbr": "BRPP",
    "variations": {
      "abbr": [
        "BRP"
      ]
    }
  },
  {
    "name": "Bharatiya Sadbhawna Samaj Party",
    "abbr": "BSSP"
  },
  {
    "name": "Bharatiya Samaj Dal",
    "abbr": "BSD"
  },
  {
    "name": "Bharatiya Samaj Kalyan Party Bharat",
    "abbr": "BSKPB"
  },
  {
    "name": "Bharatiya Samajik Kranti Dal",
    "abbr": "BSKD"
  },
  {
    "name": "Bharatiya Sampuran Krantikari Party",
    "abbr": "BSKRP"
  },
  {
    "name": "Bharatiya Samta Samaj Party",
    "abbr": "BSSPA"
  },
  {
    "name": "Bharatiya Sant Mat Party",
    "abbr": "BHSMP",
    "variations": {
      "abbr": [
        "BhSMP"
      ]
    }
  },
  {
    "name": "Bharatiya Sarvajan Party",
    "abbr": "BhSaPa"
  },
  {
    "name": "Bharatiya Sarvkalayan Kranti Dal",
    "abbr": "BSK"
  },
  {
    "name": "Bharatiya Sarvodaya Kranti Party",
    "abbr": "BSKP",
    "type": "unrecognised"
  },
  {
    "name": "Bharatiya Subhash Sena",
    "abbr": "BSRD"
  },
  {
    "name": "Bharatiya Surajya Manch",
    "abbr": "BSJM"
  },
  {
    "name": "Bharatiya Vanchitsamaj Party",
    "abbr": "BhVSP"
  },
  {
    "name": "Bharatiya Yuva Shakti",
    "abbr": "BYS"
  },
  {
    "name": "Bharipa Bahujan Mahasangha",
    "abbr": "BBM"
  },
  {
    "name": "Bhartiya Chaitanya Party",
    "abbr": "BCP"
  },
  {
    "name": "Bhartiya Congress (M)",
    "abbr": "BHC"
  },
  {
    "name": "Bhartiya Deshbhakt Party",
    "abbr": "BDBP"
  },
  {
    "name": "Bhartiya Himachal Jan Vikas Party",
    "abbr": "BHJVP",
    "symbol": "Boat with Man and Sail",
    "type": "unrecognised"
  },
  {
    "name": "Bhartiya Jagran Party",
    "abbr": "BHJAP"
  },
  {
    "name": "Bhartiya Jan Sahyog Samanvaya Party",
    "abbr": "BJSSP",
    "type": "unrecognised"
  },
  {
    "name": "Bhartiya Krishak Dal",
    "abbr": "BKrD"
  },
  {
    "name": "Bhartiya Pragatisheel Congress",
    "abbr": "BPC",
    "type": "unrecognised"
  },
  {
    "name": "Bhartiya Praja Jan Party",
    "abbr": "BHPJP",
    "variations": {
      "abbr": [
        "bhpjp"
      ]
    }
  },
  {
    "name": "Bhartiya Satya Sangharsh Party",
    "abbr": "BHSSP",
    "type": "unrecognised"
  },
  {
    "name": "Bhartiya Vikas Party",
    "abbr": "BRVP",
    "type": "unrecognised"
  },
  {
    "name": "Bihar People's Party",
    "abbr": "BPSP",
    "variations": {
      "name": [
        "Bihar Peoples Party",
        "Bihar People’s Party"
      ]
    }
  },
  {
    "name": "Biju Janata Dal",
    "abbr": "BJD",
    "founded": 1997,
    "type": "state",
    "location": "Odisha",
    "symbol": "Conch"
  },
  {
    "name": "Bira Oriya Party",
    "abbr": "BOP"
  },
  {
    "name": "Bodoland People's Front",
    "abbr": "BPF",
    "founded": 1985,
    "type": "state",
    "location": "Assam",
    "symbol": "Nagol",
    "variations": {
      "name": [
        "Bodoland Peoples Front",
        "Bodoland People’s Front"
      ]
    }
  },
  {
    "name": "Braj Vikas Party",
    "abbr": "BRAVP"
  },
  {
    "name": "Buddhiviveki Vikas Party",
    "abbr": "BVVP",
    "type": "unrecognised"
  },
  {
    "name": "Bundelkhand Akikrit Party",
    "abbr": "BAP",
    "type": "unrecognised"
  },
  {
    "name": "Bundelkhand Congress",
    "abbr": "BC"
  },
  {
    "name": "Bundelkhand Mukti Morcha",
    "abbr": "BMM"
  },
  {
    "name": "Chandigarh Vikas Party",
    "abbr": "CVKP"
  },
  {
    "name": "Chhattisgarh Mukti Morcha",
    "abbr": "CMM",
    "founded": 1982,
    "location": "Chhattisgarh"
  },
  {
    "name": "Chhattisgarh Swabhiman Manch",
    "abbr": "CSM",
    "location": "Chhattisgarh",
    "variations": {
      "name": [
        "Chattisgarh Swabhiman Manch"
      ]
    }
  },
  {
    "name": "Chhattisgarh Vikas Party",
    "abbr": "CGVP"
  },
  {
    "name": "Chhattisgarhi Samaj Party",
    "abbr": "CSP",
    "location": "Chhattisgarh"
  },
  {
    "name": "Christian Democratic Front",
    "abbr": "CDF"
  },
  {
    "name": "Communist Marxist Party Kerala State Committee",
    "abbr": "CMPKSC",
    "variations": {
      "abbr": [
        "CMP"
      ]
    }
  },
  {
    "name": "Communist Party of India",
    "abbr": "CPI",
    "founded": 1925,
    "type": "national",
    "location": "India",
    "symbol": "Ears of corn and sickle",
    "variations": {
      "name": [
        "Communist Party Of India"
      ]
    }
  },
  {
    "name": "Communist Party of India (Marxist)",
    "abbr": "CPI(M)",
    "founded": 1964,
    "type": "national",
    "location": "India",
    "symbol": "Hammer sickle and star",
    "variations": {
      "abbr": [
        "CPM",
        "CPI[M]"
      ],
      "name": [
        "Communist Party Of India (Marxist)",
        "Communist Party of India  (Marxist)",
        "Communist Party Of India  (Marxist)"
      ]
    }
  },
  {
    "name": "Communist Party of India (Marxist-Leninist) (Liberation)",
    "abbr": "CPI(ML)(L)",
    "founded": 1974,
    "variations": {
      "abbr": [
        "CPI(ML)( L)",
        "CPI(ML)",
        "CPI(M)(L)(L)",
        "CPI(ML)L"
      ],
      "name": [
        "Communist Party Of India (Marxist-Leninist) (Liberation)",
        "Communist Party of India  (Marxist-Leninist)  (Liberation)",
        "Communist Party Of India  (Marxist-Leninist)  (Liberation)",
        "Communist Party Of India  (Marxist-leninist)  (Liberation)"
      ]
    }
  },
  {
    "name": "Communist Party of India (Marxist-Leninist) Red Star",
    "abbr": "CPI(ML) Red Star",
    "variations": {
      "abbr": [
        "CPI(ML) Red star",
        "CPI(ML)Red Star"
      ]
    }
  },
  {
    "name": "Congress (Secular)",
    "abbr": "C(S)"
  },
  {
    "name": "Dalit Kranti Dal",
    "abbr": "DKD"
  },
  {
    "name": "Dalita Bahujana Party",
    "abbr": "DABAP",
    "type": "unrecognised"
  },
  {
    "name": "Democratic Bharatiya Samaj Party",
    "abbr": "DBSP",
    "type": "unrecognised"
  },
  {
    "name": "Democratic Congress Party",
    "abbr": "DCP"
  },
  {
    "name": "Democratic Indira Congress (Karunakaran)",
    "abbr": "DIC"
  },
  {
    "name": "Democratic Party of India",
    "abbr": "DPI"
  },
  {
    "name": "Democratic Secular Party",
    "abbr": "DESEP",
    "variations": {
      "abbr": [
        "DSP"
      ]
    }
  },
  {
    "name": "Democratic Socialist Party (Prabodh Chandra)",
    "abbr": "DSP(P)",
    "variations": {
      "abbr": [
        "DSP(PC)"
      ]
    }
  },
  {
    "name": "Desh Bachao Jan Morcha",
    "abbr": "DBJ"
  },
  {
    "name": "Desh Bhakt Party",
    "abbr": "DBP",
    "type": "unrecognised"
  },
  {
    "name": "Desia Pathukappu Kazhagam",
    "abbr": "DPK"
  },
  {
    "name": "Desiya Murpokku Dravida Kazhagam",
    "abbr": "DMDK",
    "founded": 2005,
    "type": "state",
    "location": "Tamil Nadu",
    "symbol": "Nagara"
  },
  {
    "name": "Dharam Nirpeksh Dal",
    "abbr": "DND"
  },
  {
    "name": "Doordarshi Party",
    "abbr": "DDP",
    "founded": 1980,
    "type": "unrecognised",
    "location": "India"
  },
  {
    "name": "Dravida Munnetra Kazhagam",
    "abbr": "DMK",
    "founded": 1949,
    "type": "state",
    "location": "Tamil Nadu, Puducherry",
    "symbol": "Rising sun"
  },
  {
    "name": "Duggar Pradesh Party",
    "abbr": "DGPP"
  },
  {
    "name": "Eklavya Samaj Party",
    "abbr": "EKSP"
  },
  {
    "name": "Ekta Shakti",
    "abbr": "ES"
  },
  {
    "name": "Ephraim Union",
    "abbr": "EU"
  },
  {
    "name": "Federal Congress of India",
    "abbr": "FCI"
  },
  {
    "name": "Federal Party of Manipur",
    "abbr": "FPM",
    "location": "Manipur",
    "type": "state"
  },
  {
    "name": "Forward Bloc (Socialist)",
    "abbr": "FB(S)"
  },
  {
    "name": "Gareeb Samana Party",
    "abbr": "GASP"
  },
  {
    "name": "Gareebjan Samaj Party",
    "abbr": "GSP",
    "type": "unrecognised"
  },
  {
    "name": "Garib Samaj Party (Shoshit)",
    "abbr": "GSPS"
  },
  {
    "name": "Garo National Council",
    "abbr": "GNC",
    "location": "Meghalaya"
  },
  {
    "name": "Goa Forward Party",
    "abbr": "GFP",
    "founded": 2016,
    "type": "state",
    "location": "Goa",
    "symbol": "Coconut"
  },
  {
    "name": "Goa Su-Raj Party",
    "abbr": "GSRP"
  },
  {
    "name": "Goa Vikas Party",
    "abbr": "GVP"
  },
  {
    "name": "Gondvana Gantantra Party",
    "abbr": "GGP",
    "type": "unrecognised"
  },
  {
    "name": "Gondwana Mukti Sena",
    "abbr": "GMS"
  },
  {
    "name": "Gorakha National Liberation Front",
    "abbr": "GNLF"
  },
  {
    "name": "Gorkha Democratic Front",
    "abbr": "GDP"
  },
  {
    "name": "Gorkha Janmukti Morcha",
    "abbr": "GOJAM",
    "variations": {
      "abbr": [
        "GJM"
      ]
    }
  },
  {
    "name": "Great India Party",
    "abbr": "GRIP",
    "type": "unrecognised"
  },
  {
    "name": "Gujarat Janata Parishad",
    "abbr": "GJP",
    "type": "unrecognised",
    "location": "Gujarat"
  },
  {
    "name": "Gujarat League",
    "abbr": "GJL",
    "type": "unrecognised",
    "location": "Gujarat"
  },
  {
    "name": "Gujarat Parivartan Party",
    "abbr": "GPP",
    "founded": "2012",
    "type": "unrecognised",
    "location": "Gujarat",
    "symbol": "Cricket bat"
  },
  {
    "name": "Gujarat Yuva Vikas Party",
    "abbr": "GYVP",
    "type": "unrecognised"
  },
  {
    "name": "Guru Chand Mukti Morcha",
    "abbr": "GMM"
  },
  {
    "name": "Hamara Dal",
    "abbr": "HD"
  },
  {
    "name": "Haryana Janhit Congress (BL)",
    "abbr": "HJC(BL)",
    "founded": 2007,
    "dissolved": 2016,
    "merged_into": "Indian National Congress",
    "type": "state",
    "location": "Haryana",
    "symbol": "tractor",
    "variations": {
      "abbr": [
        "HJC"
      ]
    }
  },
  {
    "name": "Haryana Raksha Party",
    "abbr": "HYRP"
  },
  {
    "name": "Haryana Swantra Party",
    "abbr": "HASWP",
    "variations": {
      "name": [
        "Haryana Swatantra Party"
      ],
      "abbr": [
        "HSP"
      ]
    }
  },
  {
    "name": "Haryana Vikas Party",
    "abbr": "HVP"
  },
  {
    "name": "Hill State People's Democratic Party",
    "abbr": "HSPDP",
    "founded": 1968,
    "type": "state",
    "location": "Meghalaya",
    "symbol": "Lion",
    "variations": {
      "name": [
        "Hill State Peoples Democratic Party",
        "Hill State People’s Democratic Party"
      ],
      "abbr": [
        "HPDP"
      ]
    }
  },
  {
    "name": "Himachal Kranti Party",
    "abbr": "HKP",
    "type": "unrecognised",
    "location": "Himachal Pradesh"
  },
  {
    "name": "Himachal Lokhit Party",
    "abbr": "HLP",
    "type": "unrecognised",
    "location": "Himachal Pradesh"
  },
  {
    "name": "Himachal Swabhiman Party",
    "abbr": "HiSP",
    "type": "unrecognised",
    "location": "Himachal Pradesh",
    "variations": {
      "abbr": [
        "HISP"
      ]
    }
  },
  {
    "name": "Himachal Vikas Congress",
    "abbr": "HVC",
    "type": "state",
    "location": "Himachal Pradesh"
  },
  {
    "name": "Hind Raksha Sena",
    "abbr": "HRS",
    "type": "unrecognised"
  },
  {
    "name": "Hind Vikas Party",
    "abbr": "HDVP"
  },
  {
    "name": "Hindu Ekta Andolan Party",
    "abbr": "HEAP"
  },
  {
    "name": "Hindu Swaraj Sanghathan",
    "abbr": "HSS",
    "type": "unrecognised"
  },
  {
    "name": "Hindustan Janta Party",
    "abbr": "HJP"
  },
  {
    "name": "Hindusthan Nirman Dal",
    "abbr": "HND",
    "type": "unrecognised",
    "location": "India"
  },
  {
    "name": "Independent",
    "abbr": "IND"
  },
  {
    "name": "Indian Bahujan Samajwadi Party",
    "abbr": "IBSP"
  },
  {
    "name": "Indian Congress (Socialist)",
    "abbr": "ICS",
    "type": "unrecognised",
    "location": "India"
  },
  {
    "name": "Indian Congress (Socialist-Sarat Chandra Sinha)",
    "abbr": "ICS(SCS)",
    "founded": 1984,
    "type": "national",
    "location": "India"
  },
  {
    "name": "Indian Democratic Party",
    "abbr": "IDP",
    "type": "unrecognised"
  },
  {
    "name": "Indian Federal Democratic Party",
    "abbr": "IFDP"
  },
  {
    "name": "Indian Justice Party",
    "abbr": "IJP",
    "type": "unrecognised",
    "location": "India"
  },
  {
    "name": "Indian National Congress",
    "abbr": "INC",
    "founded": 1885,
    "type": "national",
    "location": "India",
    "symbol": "Hand"
  },
  {
    "name": "Indian National Congress (I)",
    "abbr": "INC(I)",
    "type": "national",
    "location": "India"
  },
  {
    "name": "Indian National Congress (Organisation)",
    "abbr": "NCO",
    "founded": "1969",
    "type": "national",
    "location": "India"
  },
  {
    "name": "Indian National Congress (U)",
    "abbr": "INC(U)",
    "type": "national",
    "location": "india"
  },
  {
    "name": "Indian National League",
    "abbr": "INL"
  },
  {
    "name": "Indian National Lok Dal",
    "abbr": "INLD",
    "founded": 1999,
    "type": "state",
    "location": "Haryana",
    "symbol": "Spectacles"
  },
  {
    "name": "Indian Oceanic Party",
    "abbr": "IOP"
  },
  {
    "name": "Indian Peace Party",
    "abbr": "IPP"
  },
  {
    "name": "Indian People's Congress",
    "abbr": "IPC",
    "variations": {
      "name": [
        "Indian Peoples Congress",
        "India People’s Congress"
      ]
    }
  },
  {
    "name": "Indian Peoples Forward Block",
    "abbr": "IPFB"
  },
  {
    "name": "Indian Peoples Front",
    "abbr": "IPF",
    "type": "unrecognised",
    "variations": {
      "name": [
        "Indian People's Front",
        "Indian People’s Front"
      ]
    }
  },
  {
    "name": "Indian Peoples Green Party",
    "abbr": "IPGP",
    "variations": {
      "abbr": [
        "INGP"
      ]
    }
  },
  {
    "name": "Indian Union Muslim League",
    "abbr": "IUML",
    "founded": 1948,
    "type": "state",
    "location": "Kerala",
    "symbol": "Ladder"
  },
  {
    "name": "Indian Unity Centre",
    "abbr": "IUC"
  },
  {
    "name": "Indians Front",
    "abbr": "IF",
    "type": "unrecognised"
  },
  {
    "name": "Indians Victory Party",
    "abbr": "IVP"
  },
  {
    "name": "Indigenous Nationalist Party of Twipra",
    "abbr": "INPT",
    "founded": 2002,
    "location": "Tripura",
    "variations": {
      "name": [
        "Indigenous Nationalist Party Of Twipra"
      ]
    }
  },
  {
    "name": "Indigenous People's Front of Tripura",
    "abbr": "IPFT",
    "location": "Tripura",
    "variations": {
      "name": [
        "Indigenous People’s Front of Tripura",
        "Indigenous Peoples Front of Tripura",
        "Indigenousn People's Front Of Tripura",
        "Indigenousn Peoples Front Of Tripura"
      ]
    }
  },
  {
    "name": "Indiya Jananayaka Katchi",
    "abbr": "IJK",
    "type": "unrecognised"
  },
  {
    "name": "Inqalab Vikas Dal",
    "abbr": "IVD",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "INQLAB VD"
      ]
    }
  },
  {
    "name": "Ittehad-E-Millait Council",
    "abbr": "IEMC"
  },
  {
    "name": "Jaganmay Nari Sangathan",
    "abbr": "JANS"
  },
  {
    "name": "Jago Party",
    "abbr": "JGP"
  },
  {
    "name": "Jagrat Bharat Party",
    "abbr": "JaBhP"
  },
  {
    "name": "Jai Bharat Party",
    "abbr": "JBP"
  },
  {
    "name": "Jai Bharat Samanta Party",
    "abbr": "JBSP"
  },
  {
    "name": "Jai Chhattisgarh Party",
    "abbr": "JCGP"
  },
  {
    "name": "Jai Hind Party",
    "abbr": "JHP",
    "type": "unrecognised"
  },
  {
    "name": "Jai Jawan Jai Kisan Mazdoor Congress",
    "abbr": "JJJKMC",
    "type": "unrecognised",
    "variations": {
      "name": [
        "Jai Jawan Jai Kisan Mazdoor Congess"
      ]
    }
  },
  {
    "name": "Jai Maha Bharath Party",
    "abbr": "JMBP",
    "type": "unrecognised"
  },
  {
    "name": "Jai Prakash Janata Dal",
    "abbr": "JPJD",
    "type": "unrecognised"
  },
  {
    "name": "Jai Vijaya Bharathi Party",
    "abbr": "JVBP"
  },
  {
    "name": "Jammu & Kashmir Awami National Conference",
    "abbr": "JKANC"
  },
  {
    "name": "Jammu & Kashmir Democratic Party Nationalist",
    "abbr": "JKDPN"
  },
  {
    "name": "Jammu & Kashmir National Conference",
    "abbr": "JKNC",
    "founded": 1932,
    "type": "state",
    "location": "Jammu & Kashmir",
    "symbol": "Plough",
    "variations": {
      "abbr": [
        "JKN"
      ]
    }
  },
  {
    "name": "Jammu & Kashmir National Panthers Party",
    "abbr": "JKNPP",
    "founded": 1982,
    "type": "state",
    "location": "Jammu & Kashmir",
    "symbol": "Bicycle"
  },
  {
    "name": "Jammu & Kashmir National United Front",
    "abbr": "JKNUF"
  },
  {
    "name": "Jammu & Kashmir People Conference",
    "abbr": "JPC"
  },
  {
    "name": "Jammu And Kashmir Awami League",
    "abbr": "JKAL"
  },
  {
    "name": "Jammu State Morcha (Progressive)",
    "abbr": "JSM(P)"
  },
  {
    "name": "Jammu and Kashmir Panchayat Conference",
    "abbr": "JKPC",
    "variations": {
      "name": [
        "Jammu & Kashmir Panchayat Conference"
      ]
    }
  },
  {
    "name": "Jammu and Kashmir People's Democratic Party",
    "abbr": "JKPDP",
    "founded": 1998,
    "type": "state",
    "location": "Jammu & Kashmir",
    "symbol": "Inkpot and pen",
    "variations": {
      "name": [
        "Jammu and Kashmir Peoples Democratic Party",
        "Jammu and Kashmir People’s Democratic Party"
      ]
    }
  },
  {
    "name": "Jan Adhikar Party (Loktantrik)",
    "abbr": "JAP(L)",
    "variations": {
      "name": [
        "Jan Adhikar Party Loktantrik"
      ]
    }
  },
  {
    "name": "Jan Chetna Party",
    "abbr": "JCP"
  },
  {
    "name": "Jan Ekta Dal",
    "abbr": "JKD"
  },
  {
    "name": "Jan Kranti Party (Rashtrawadi)",
    "abbr": "JKP",
    "variations": {
      "name": [
        "Jan Kranti Party(Rashtrawadi)"
      ]
    }
  },
  {
    "name": "Jan Lok Kalyan Party",
    "abbr": "JLKP"
  },
  {
    "name": "Jan Morcha",
    "abbr": "JM"
  },
  {
    "name": "Jan Raajya Party",
    "abbr": "JaRaP"
  },
  {
    "name": "Jan Sangh",
    "abbr": "JS"
  },
  {
    "name": "Jan Sangh Party",
    "abbr": "JASP"
  },
  {
    "name": "Jan Shakti Dal",
    "abbr": "JaSD"
  },
  {
    "name": "Jan Surajya Shakti",
    "abbr": "JSS"
  },
  {
    "name": "Jana Hitkari Party",
    "abbr": "JHKP"
  },
  {
    "name": "Jana Unnayan Mancha",
    "abbr": "JUM"
  },
  {
    "name": "Janabadi Forward Block",
    "abbr": "JFB"
  },
  {
    "name": "Janadhipathya Samrakshana Samithi",
    "abbr": "JPSS",
    "type": "state",
    "location": "Kerala"
  },
  {
    "name": "Janata Dal",
    "abbr": "JD",
    "founded": "1988",
    "type": "national",
    "location": "India",
    "symbol": "Wheel"
  },
  {
    "name": "Janata Dal (Secular)",
    "abbr": "JD(S)",
    "founded": 1999,
    "type": "state",
    "location": "Karnataka, Kerala",
    "symbol": "Lady farmer carrying paddy on her head",
    "variations": {
      "name": [
        "Janata Dal  (Secular)"
      ],
      "abbr": [
        "JDS"
      ]
    }
  },
  {
    "name": "Janata Dal (United)",
    "abbr": "JD(U)",
    "founded": 1999,
    "type": "state",
    "symbol": "Arrow",
    "variations": {
      "name": [
        "Janata Dal  (United)"
      ],
      "abbr": [
        "JD (U)",
        "J D (U)",
        "JDU"
      ]
    }
  },
  {
    "name": "Janata Party (JP)",
    "abbr": "JNP(JP)",
    "type": "national",
    "location": "India"
  },
  {
    "name": "Janata Party (Secular) - Ch. Charan Singh",
    "abbr": "JNP(SC)",
    "type": "national",
    "location": "India"
  },
  {
    "name": "Janata Party (Secular) Raj Narain",
    "abbr": "JNP(SR)",
    "type": "national",
    "location": "india"
  },
  {
    "name": "Janata Uday Party",
    "abbr": "JUP"
  },
  {
    "name": "Janhit Kisan Party",
    "abbr": "JKiP"
  },
  {
    "name": "Janhit Samaj Party",
    "abbr": "JHSP"
  },
  {
    "name": "Janmangal Paksh",
    "abbr": "JMP",
    "type": "unrecognised"
  },
  {
    "name": "Janral Samaj Party",
    "abbr": "JanSP",
    "symbol": "Sewing Machine",
    "type": "unrecognised"
  },
  {
    "name": "Jansatta Party",
    "abbr": "JSP"
  },
  {
    "name": "Janta Party",
    "abbr": "JNP",
    "founded": 1977,
    "type": "national",
    "location": "India",
    "variations": {
      "name": [
        "Janata Party"
      ],
      "abbr": [
        "JP"
      ]
    }
  },
  {
    "name": "Janvadi Party(Socialist)",
    "abbr": "JPS",
    "type": "unrecognised",
    "variations": {
      "name": [
        "Janvadi Party(Socialist)"
      ]
    }
  },
  {
    "name": "Jawan Kisan Morcha",
    "abbr": "JKM",
    "type": "unrecognised"
  },
  {
    "name": "Jebamani Janata",
    "abbr": "JJ"
  },
  {
    "name": "Jharkhand Anushilan Party",
    "abbr": "JHAP",
    "variations": {
      "abbr": [
        "JAP"
      ]
    }
  },
  {
    "name": "Jharkhand Disom Party",
    "abbr": "JDP",
    "type": "unrecognised"
  },
  {
    "name": "Jharkhand Janadikhar Manch",
    "abbr": "JHJAM"
  },
  {
    "name": "Jharkhand Mukti Morcha",
    "abbr": "JMM",
    "founded": 1972,
    "type": "state",
    "location": "Jharkhand",
    "symbol": "Bow and arrow"
  },
  {
    "name": "Jharkhand Mukti Morcha (Ulgulan)",
    "abbr": "JMM(U)",
    "type": "unrecognised"
  },
  {
    "name": "Jharkhand Party (Naren)",
    "abbr": "JKP(N)"
  },
  {
    "name": "Jharkhand Vikas Dal",
    "abbr": "JVD"
  },
  {
    "name": "Jharkhand Vikas Morcha (Prajatantrik)",
    "abbr": "JVM(P)",
    "founded": 2006,
    "type": "state",
    "location": "Jharkhand, West Bengal",
    "symbol": "Comb",
    "variations": {
      "abbr": [
        "JVM"
      ]
    }
  },
  {
    "name": "Kalinga Sena",
    "abbr": "KS"
  },
  {
    "name": "Kamarajar Deseeya Congress",
    "abbr": "KDC"
  },
  {
    "name": "Kamtapur Progressive Party",
    "abbr": "KPP"
  },
  {
    "name": "Kannada Chalavali Vatal Paksha",
    "abbr": "KCVP",
    "variations": {
      "abbr": [
        "KCP"
      ]
    }
  },
  {
    "name": "Kannada Nadu Party",
    "abbr": "KNDP"
  },
  {
    "name": "Kannada Paksha",
    "abbr": "KP"
  },
  {
    "name": "Karnataka Janata Paksha",
    "abbr": "KJP",
    "founded": 2012,
    "type": "state",
    "location": "Karnataka",
    "symbol": "symbol not decided yet"
  },
  {
    "name": "Karnataka Makkala Paksha",
    "abbr": "KMP"
  },
  {
    "name": "Karnataka Rajya Ryota Sangha",
    "abbr": "KRRS"
  },
  {
    "name": "Karnataka Swarajya Party",
    "abbr": "KSP",
    "variations": {
      "abbr": [
        "KaSP"
      ]
    }
  },
  {
    "name": "Karnataka Thamizhar Munnetra Kazhagam",
    "abbr": "KTMK"
  },
  {
    "name": "Kerala Congress",
    "abbr": "KEC",
    "type": "state"
  },
  {
    "name": "Kerala Congress (Anti-merger Group)",
    "abbr": "KC(AMG)",
    "variations": {
      "abbr": [
        "KC(ANTI MERGER GROUP)"
      ]
    }
  },
  {
    "name": "Kerala Congress (B)",
    "abbr": "KEC(B)",
    "variations": {
      "abbr": [
        "KCB"
      ]
    }
  },
  {
    "name": "Kerala Congress (Jacob)",
    "abbr": "KEC(J)",
    "variations": {
      "abbr": [
        "KC(J)"
      ]
    }
  },
  {
    "name": "Kerala Congress (M)",
    "abbr": "KC(M)",
    "founded": 1979,
    "type": "state",
    "location": "Kerala",
    "symbol": "Two leaves",
    "variations": {
      "abbr": [
        "KEC(M)"
      ]
    }
  },
  {
    "name": "Kerala Congress Secular",
    "abbr": "KCS"
  },
  {
    "name": "Kerala Revolutionary Socialist Party (Baby John)",
    "abbr": "KRSP",
    "variations": {
      "name": [
        "Kerala Revolutionary Socialist Party(Baby John)"
      ]
    }
  },
  {
    "name": "Khun Hynniewtrep National Awakening Movement",
    "abbr": "KHNAM",
    "location": "Meghalaya"
  },
  {
    "name": "Kisan Majdoor Berojgar Sangh",
    "abbr": "KMBS"
  },
  {
    "name": "Kisan Majdoor Praja Party",
    "abbr": "KMPP"
  },
  {
    "name": "Kisan Mazdoor Lok Paksha",
    "abbr": "KLP",
    "type": "unrecognised",
    "location": "Gujarat"
  },
  {
    "name": "Kisan Party Of India",
    "abbr": "KPI",
    "founded": 2014,
    "type": "state",
    "location": "BIHAR",
    "symbol": "Stool"
  },
  {
    "name": "Kisan Shakti Jantantrik Party",
    "abbr": "KSJP"
  },
  {
    "name": "Kishore Raj Party",
    "abbr": "KiRP"
  },
  {
    "name": "Kongu Nadu Munnetra Kazhagam",
    "abbr": "KNMK",
    "variations": {
      "abbr": [
        "KMK"
      ]
    }
  },
  {
    "name": "Kosal Kranti Dal",
    "abbr": "KOKD"
  },
  {
    "name": "Kosi Vikas Party",
    "abbr": "KVSP",
    "type": "unrecognised"
  },
  {
    "name": "Kranti Dal",
    "abbr": "KRD"
  },
  {
    "name": "Kranti Kari Jai Hind Sena",
    "abbr": "KKJHS",
    "variations": {
      "abbr": [
        "KJS"
      ]
    }
  },
  {
    "name": "Krantikari Samta Party",
    "abbr": "KrSaP"
  },
  {
    "name": "Krantikari Samyavadi Party",
    "abbr": "KSVP",
    "type": "unrecognised"
  },
  {
    "name": "Krantisena Maharashtra",
    "abbr": "KM"
  },
  {
    "name": "Labour Party (Secular)",
    "abbr": "LP(S)"
  },
  {
    "name": "Labour Party of India (V.V. Prasad)",
    "abbr": "LPI(V)"
  },
  {
    "name": "Laghujan Samaj Vikas Party",
    "abbr": "LSVP"
  },
  {
    "name": "Lal Morcha",
    "abbr": "LM"
  },
  {
    "name": "Lok Bhalai Party",
    "abbr": "LBP"
  },
  {
    "name": "Lok Bharati",
    "abbr": "LB",
    "type": "unrecognised"
  },
  {
    "name": "Lok Dal",
    "abbr": "LKD",
    "founded": 1980,
    "type": "national",
    "location": "India",
    "variations": {
      "abbr": [
        "LD"
      ]
    }
  },
  {
    "name": "Lok Dal (B)",
    "abbr": "LKD(B)",
    "type": "national",
    "location": "India"
  },
  {
    "name": "Lok Gathbandhan Party",
    "abbr": "LGP",
    "type": "unrecognised"
  },
  {
    "name": "Lok Jan Vikas Morcha",
    "abbr": "LJVM"
  },
  {
    "name": "Lok Janshakti Party",
    "abbr": "LJP",
    "founded": 2000,
    "type": "state",
    "symbol": "Bungalow",
    "variations": {
      "name": [
        "Lok Jan Shakti Party"
      ],
      "abbr": [
        "LJNSP",
        "LJSP",
        "LP"
      ]
    }
  },
  {
    "name": "Lok Paritran",
    "abbr": "LKPT",
    "type": "unrecognised"
  },
  {
    "name": "Lok Raj Party Himachal Pradesh",
    "abbr": "LRP",
    "type": "unrecognised",
    "location": "Himachal Pradesh"
  },
  {
    "name": "Lok Satta Party",
    "abbr": "LSP"
  },
  {
    "name": "Lok Sewa Dal",
    "abbr": "LSD",
    "type": "unrecognised"
  },
  {
    "name": "Lok Vikas Party",
    "abbr": "LVKP"
  },
  {
    "name": "Loko Sanmilon",
    "abbr": "LKS",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "LS"
      ]
    }
  },
  {
    "name": "Lokpriya Samaj Party",
    "abbr": "LPSP",
    "type": "unrecognised"
  },
  {
    "name": "Loksangram",
    "abbr": "LKSGM"
  },
  {
    "name": "Loktanrik Janata Party (Secular)",
    "abbr": "LKJP"
  },
  {
    "name": "Loktanrik Sarkar Party",
    "abbr": "LKSP"
  },
  {
    "name": "Loktantrik Morcha Himachal Pradesh",
    "abbr": "LMHP",
    "type": "unrecognised",
    "location": "Himachal Pradesh"
  },
  {
    "name": "Loktantrik Rashrtavadi Party",
    "abbr": "LoRP",
    "type": "unrecognised",
    "variations": {
      "name": [
        "Loktantrik Rashtravadi Party"
      ],
      "abbr": [
        "LORP"
      ]
    }
  },
  {
    "name": "Loktantrik Samajwadi Party",
    "abbr": "LSWP",
    "type": "unrecognised"
  },
  {
    "name": "Loktantrik Samata Dal",
    "abbr": "LTSD"
  },
  {
    "name": "MGR Thonderkal Katchi",
    "abbr": "MGRTK"
  },
  {
    "name": "Mahagujarat Janta Party",
    "abbr": "MJP"
  },
  {
    "name": "Mahan Dal",
    "abbr": "MD"
  },
  {
    "name": "Maharashtra Navnirman Sena",
    "abbr": "MNS",
    "founded": 2006,
    "type": "state",
    "location": "Maharashtra",
    "symbol": "Railway engine"
  },
  {
    "name": "Maharashtra Rajiv Congress",
    "abbr": "MRRC"
  },
  {
    "name": "Maharashtrawadi Gomantak",
    "abbr": "MAG",
    "type": "state"
  },
  {
    "name": "Maharashtrawadi Gomantak Party",
    "abbr": "MGP",
    "founded": 1963,
    "type": "state",
    "location": "Goa",
    "symbol": "Lion",
    "variations": {
      "name": [
        "Maharashtrawadi Gomantak"
      ]
    }
  },
  {
    "name": "Mahila Adhikar Party",
    "abbr": "MAP"
  },
  {
    "name": "Mahila Pradhana Paksha",
    "abbr": "MPP",
    "variations": {
      "abbr": [
        "MPHP"
      ]
    }
  },
  {
    "name": "Maidani Kranti Dal",
    "abbr": "MKD"
  },
  {
    "name": "Majdoor Kisan Union Party",
    "abbr": "MKUP"
  },
  {
    "name": "Majlis Bachao Tahreek",
    "abbr": "MBT",
    "type": "unrecognised"
  },
  {
    "name": "Makkal Manadu Katchi",
    "abbr": "MMKA"
  },
  {
    "name": "Makkal Sakthi Katchi",
    "abbr": "MSK"
  },
  {
    "name": "Mana Party",
    "abbr": "MANP",
    "type": "unrecognised"
  },
  {
    "name": "Manav Mukti Morcha",
    "abbr": "MMM"
  },
  {
    "name": "Manav Samaj Party",
    "abbr": "MSP"
  },
  {
    "name": "Manavadhikar Janshakti Party",
    "abbr": "MaJP",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "MAJP"
      ]
    }
  },
  {
    "name": "Manavtawadi Samaj Party",
    "abbr": "MwSP"
  },
  {
    "name": "Manipur Democratic People's Front",
    "abbr": "MDPF",
    "variations": {
      "name": [
        "Manipur Democratic Peoples's Front",
        "Manipur Democratic Peoples Front",
        "Manipur Democratic People’s Front"
      ]
    }
  },
  {
    "name": "Manipur State Congress Party",
    "abbr": "MSCP"
  },
  {
    "name": "Manithaneya Makkal Katchi",
    "abbr": "MAMAK"
  },
  {
    "name": "Maraland Democratic Front",
    "abbr": "MDF"
  },
  {
    "name": "Marumalarchi Dravida Munnetra Kazhagam",
    "abbr": "MDMK",
    "type": "state"
  },
  {
    "name": "Marxist Co-Ordination",
    "abbr": "MCO"
  },
  {
    "name": "Marxist Communist Party of India (S.S. Srivastava)",
    "abbr": "MCPI(S)",
    "type": "unrecognised"
  },
  {
    "name": "Matra Bhakta Party",
    "abbr": "MBP"
  },
  {
    "name": "Mazdur Kranti Parishad",
    "abbr": "MKP"
  },
  {
    "name": "Megh Desham Party",
    "abbr": "MEDP"
  },
  {
    "name": "Meghalaya Democratic Party",
    "abbr": "MDP",
    "location": "Meghalay",
    "symbol": "Bridge"
  },
  {
    "name": "Mizo National Front",
    "abbr": "MNF",
    "founded": 1959,
    "type": "state",
    "location": "Mizoram",
    "symbol": "Star"
  },
  {
    "name": "Mizoram People's Conference",
    "abbr": "MPC",
    "founded": 1972,
    "type": "state",
    "location": "Mizoram",
    "symbol": "Electric Bulb",
    "variations": {
      "name": [
        "Mizoram Peoples Conference",
        "Mizoram People’s Conference"
      ]
    }
  },
  {
    "name": "Moderate Party",
    "abbr": "MOP"
  },
  {
    "name": "Momin Conference",
    "abbr": "MC"
  },
  {
    "name": "Mool Bharati (S) Party",
    "abbr": "MB(S)P"
  },
  {
    "name": "Moolniwasi Samaj Party",
    "abbr": "MOSP"
  },
  {
    "name": "Most Backward Classes Of India",
    "abbr": "MBCOI"
  },
  {
    "name": "Moulik Adhikar Party",
    "abbr": "MADP"
  },
  {
    "name": "Mudiraj Rashtriya Samithi",
    "abbr": "MRS"
  },
  {
    "name": "Muslim League Kerala State Committee",
    "abbr": "MUL",
    "type": "state",
    "variations": {
      "abbr": [
        "ML"
      ]
    }
  },
  {
    "name": "Muslim Majlis Uttar Pradesh",
    "abbr": "MMUP"
  },
  {
    "name": "NTR Telugu Desam Party (Lakshmi Parvathi)",
    "abbr": "NTRTDP(LP)"
  },
  {
    "name": "Naari Shakti Party",
    "abbr": "NSTP"
  },
  {
    "name": "Naga National Party",
    "abbr": "NNLP"
  },
  {
    "name": "Naga People's Front",
    "abbr": "NPF",
    "founded": 2002,
    "type": "state",
    "location": "Manipur, Nagaland",
    "symbol": "Cock",
    "variations": {
      "name": [
        "Naga Peoples Front",
        "Naga People’s Front"
      ]
    }
  },
  {
    "name": "Naitik Party",
    "abbr": "NAP"
  },
  {
    "name": "Naki Bharatiya Ekta Party",
    "abbr": "NBEP"
  },
  {
    "name": "Namadhu Makkal Katchi",
    "abbr": "NMK"
  },
  {
    "name": "Narayani Sena",
    "abbr": "NRSN"
  },
  {
    "name": "National Democratic Peoples Front",
    "abbr": "NDPF"
  },
  {
    "name": "National Development Party",
    "abbr": "NDEP",
    "variations": {
      "abbr": [
        "NDP"
      ]
    }
  },
  {
    "name": "National Jankranti Dal",
    "abbr": "NJD"
  },
  {
    "name": "National Lokhind Party",
    "abbr": "NLHP"
  },
  {
    "name": "National Loktantrik Party",
    "abbr": "NLP",
    "type": "unrecognised"
  },
  {
    "name": "National Party",
    "abbr": "NP"
  },
  {
    "name": "National People's Party",
    "abbr": "NPP",
    "founded": 2013,
    "type": "state",
    "location": "Meghalaya, Manipur",
    "symbol": "Book",
    "variations": {
      "name": [
        "National Peoples Party",
        "National People’s Party"
      ],
      "abbr": [
        "NPEPT"
      ]
    }
  },
  {
    "name": "National Secular Party",
    "abbr": "NSCP",
    "type": "unrecognised"
  },
  {
    "name": "National Unionist Zamindara Party",
    "abbr": "NUZP",
    "variations": {
      "abbr": [
        "nuzp"
      ]
    }
  },
  {
    "name": "National Youth Party",
    "abbr": "NYP"
  },
  {
    "name": "Nationalist Congress Party",
    "abbr": "NCP",
    "founded": 1999,
    "type": "national",
    "location": "India",
    "symbol": "Clock"
  },
  {
    "name": "Nationalist Democratic Progressive Party",
    "abbr": "NDPP"
  },
  {
    "name": "Nationalist People's Front",
    "abbr": "NPSF",
    "variations": {
      "name": [
        "Nationalist Peoples Front",
        "Nationalist People’s Front"
      ]
    }
  },
  {
    "name": "Navbharat Ekta Dal",
    "abbr": "NED",
    "type": "unrecognised"
  },
  {
    "name": "Navbharat Nirman Party",
    "abbr": "NBNP",
    "variations": {
      "abbr": [
        "NNP"
      ]
    }
  },
  {
    "name": "Navin Bharat Nirman",
    "abbr": "NBN",
    "type": "unrecognised"
  },
  {
    "name": "Naya Daur Party",
    "abbr": "NADP"
  },
  {
    "name": "Nelopa (United)",
    "abbr": "NELU",
    "variations": {
      "name": [
        "Nelopa(United)"
      ],
      "abbr": [
        "NELOPA(U)"
      ]
    }
  },
  {
    "name": "New Socialist Movement",
    "abbr": "NSM",
    "type": "unrecognised"
  },
  {
    "name": "New Socialist Movement Party",
    "abbr": "NSMP",
    "type": "unrecognised"
  },
  {
    "name": "Nirjatita Samaj Biplabi Party",
    "abbr": "NSBP"
  },
  {
    "name": "Niswarth Sewa Party",
    "abbr": "NSSP"
  },
  {
    "name": "None of the Above",
    "abbr": "NOTA",
    "variations": {
      "name": [
        "None Of The Above",
        "Nove of The Above",
        "None Of the Above"
      ]
    }
  },
  {
    "name": "North East India Development Party",
    "abbr": "NEIDP",
    "founded": 2015,
    "location": "Manipur, Tripura"
  },
  {
    "name": "North East Social Democratic Party",
    "abbr": "NESDP",
    "founded": 2013,
    "location": "Meghalaya",
    "variations": {
      "abbr": [
        "NeSDP"
      ]
    }
  },
  {
    "name": "Nutan Maha Gujarat Janta Parishad",
    "abbr": "NJP",
    "founded": "1960",
    "location": "Gujarat"
  },
  {
    "name": "Orissa Communist Party",
    "abbr": "OCP"
  },
  {
    "name": "Orissa Gana Parishad",
    "abbr": "OGP"
  },
  {
    "name": "Orissa Mukti Morcha",
    "abbr": "OMM"
  },
  {
    "name": "Pachai Kudi Makkal Katchi",
    "abbr": "PKMK"
  },
  {
    "name": "Parivartan Samaj Party",
    "abbr": "PSJP"
  },
  {
    "name": "Party for Democratic Socialism",
    "abbr": "PDS",
    "type": "unrecognised",
    "location": "West Bengal, Tripura"
  },
  {
    "name": "Paschim Banga Rajya Muslim League",
    "abbr": "PBRML",
    "variations": {
      "abbr": [
        "PBRSL"
      ]
    }
  },
  {
    "name": "Pattali Makkal Katchi",
    "abbr": "PMK",
    "founded": 1989,
    "type": "state",
    "location": "Puducherry",
    "symbol": "Mango"
  },
  {
    "name": "Peace Party",
    "abbr": "PECP"
  },
  {
    "name": "Peasants And Workers Party of India",
    "abbr": "PWPI"
  },
  {
    "name": "People's Democratic Alliance",
    "abbr": "PDA",
    "type": "state",
    "location": "Manipur",
    "symbol": "Crown",
    "variations": {
      "name": [
        "Peoples Democratic Alliance",
        "People’s Democratic Alliance"
      ]
    }
  },
  {
    "name": "People's Democratic Conference of India",
    "abbr": "PDCI",
    "variations": {
      "name": [
        "Peoples Democratic Conference of India",
        "People’s Democratic Conference of India"
      ]
    }
  },
  {
    "name": "People's Democratic Forum",
    "abbr": "PDFO",
    "variations": {
      "name": [
        "People’s Democratic Forum",
        "Peoples Democratic Forum"
      ]
    }
  },
  {
    "name": "People's Democratic Front",
    "abbr": "PDF",
    "variations": {
      "name": [
        "People’s Democratic Front",
        "Peoples Democratic Front"
      ]
    }
  },
  {
    "name": "People's Democratic Party",
    "abbr": "PDP",
    "variations": {
      "name": [
        "Peoples Democratic Party",
        "People’s Democratic Party"
      ]
    }
  },
  {
    "name": "People's Party Of Punjab",
    "abbr": "PPOP",
    "variations": {
      "name": [
        "Peoples Party Of Punjab",
        "People’s Party Of Punjab"
      ]
    }
  },
  {
    "name": "People's Party of Arunachal",
    "abbr": "PPA",
    "founded": 1987,
    "type": "state",
    "location": "Arunachal Pradesh",
    "symbol": "Maize",
    "variations": {
      "name": [
        "Peoples Party of Arunachal",
        "People’s Party of Arunachal"
      ]
    }
  },
  {
    "name": "People's Party of India (Secular)",
    "abbr": "PPIS",
    "variations": {
      "name": [
        "People's Party of India(secular)",
        "People’s Party of India (Secular)",
        "Peoples Party of India (Secular)"
      ],
      "abbr": [
        "PPI(S)"
      ]
    }
  },
  {
    "name": "Peoples Guardian",
    "abbr": "PG"
  },
  {
    "name": "Peoples Republican Party",
    "abbr": "PRBP",
    "type": "unrecognised",
    "variations": {
      "name": [
        "People's Republican Party",
        "People’s Republican Party"
      ]
    }
  },
  {
    "name": "Pichhra Samaj Party",
    "abbr": "PHSP"
  },
  {
    "name": "Prabuddha Republican Party",
    "abbr": "PRCP"
  },
  {
    "name": "Pragatisheel Manav Samaj Party",
    "abbr": "PMSP",
    "type": "unrecognised"
  },
  {
    "name": "Praja Bharath Party",
    "abbr": "PBHP",
    "type": "unrecognised"
  },
  {
    "name": "Praja Party",
    "abbr": "PP",
    "type": "unrecognised"
  },
  {
    "name": "Praja Rajyam Party",
    "abbr": "PRAP",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "PRP"
      ]
    }
  },
  {
    "name": "Praja Shanthi Party",
    "abbr": "PRSHP",
    "type": "unrecognised"
  },
  {
    "name": "Praja Socialist Party",
    "abbr": "PSP",
    "founded": 1952,
    "type": "national",
    "location": "India"
  },
  {
    "name": "Prajatantra Aadhaar Party",
    "abbr": "PAP",
    "type": "unrecognised"
  },
  {
    "name": "Prajatantrik Bahujan Shakti Dal",
    "abbr": "PBSD"
  },
  {
    "name": "Prajatantrik Samadhan Party",
    "abbr": "PRSP",
    "type": "unrecognised"
  },
  {
    "name": "Prism",
    "abbr": "PRISM",
    "symbol": "Basket containing fruits"
  },
  {
    "name": "Prithak Bastar Rajya Party",
    "abbr": "PBRP"
  },
  {
    "name": "Professionals Party of India",
    "abbr": "PRPI"
  },
  {
    "name": "Progressive Democratic Party",
    "abbr": "PrDP"
  },
  {
    "name": "Proutist Sarva Samaj Party",
    "abbr": "PTSS",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "PSS"
      ]
    }
  },
  {
    "name": "Pruutist Bloc India",
    "abbr": "PBI",
    "type": "unrecognised",
    "location": "India",
    "variations": {
      "name": [
        "Proutist Bloc India",
        "Proutist Bloc, India"
      ]
    }
  },
  {
    "name": "Pudhucherry Munnetra Congress",
    "abbr": "PMC",
    "type": "unrecognised",
    "location": "Puducherry"
  },
  {
    "name": "Punjab Labour Party",
    "abbr": "PLP"
  },
  {
    "name": "Punjab People's Party",
    "abbr": "PnPP",
    "variations": {
      "name": [
        "Punjab Peoples Party",
        "Punjab People’s Party"
      ]
    }
  },
  {
    "name": "Puratchi Bharatham",
    "abbr": "PB",
    "type": "unrecognised"
  },
  {
    "name": "Purvanchal Rajya Banao Dal",
    "abbr": "PRBD"
  },
  {
    "name": "Puthiya Needhi Katchi",
    "abbr": "PNK"
  },
  {
    "name": "Puthiya Tamilagam",
    "abbr": "PT"
  },
  {
    "name": "Pyramid Party of India",
    "abbr": "PPOI",
    "type": "unrecognised"
  },
  {
    "name": "Quami Ekta Dal",
    "abbr": "QED"
  },
  {
    "name": "Rajasthan Dev Sena Dal",
    "abbr": "RDSD"
  },
  {
    "name": "Rajasthan Vikas Party",
    "abbr": "RJVP",
    "variations": {
      "abbr": [
        "RVP"
      ]
    }
  },
  {
    "name": "Rajlok Party",
    "abbr": "RAJP"
  },
  {
    "name": "Rajya Nojawan Shakti Party",
    "abbr": "RNSP"
  },
  {
    "name": "Rajyadhikara Party",
    "abbr": "RDHP",
    "type": "unrecognised"
  },
  {
    "name": "Ram Rajya Parishad",
    "abbr": "RRP",
    "type": "unrecognised"
  },
  {
    "name": "Rani Chennamma Party",
    "abbr": "RCP",
    "variations": {
      "abbr": [
        "RCMP"
      ]
    }
  },
  {
    "name": "Rashtra Bhakt Dal",
    "abbr": "RBD"
  },
  {
    "name": "Rashtra Nirman Party",
    "abbr": "RaNP",
    "variations": {
      "abbr": [
        "RNP"
      ]
    }
  },
  {
    "name": "Rashtra Sewa Dal",
    "abbr": "RASED",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "RSWD"
      ]
    }
  },
  {
    "name": "Rashtravadi Aarthik Swatantrata Dal",
    "abbr": "RASD"
  },
  {
    "name": "Rashtravadi Janata Party",
    "abbr": "RVNP",
    "type": "unrecognised"
  },
  {
    "name": "Rashtravadi Pratap Sena",
    "abbr": "RPS",
    "type": "unrecognised"
  },
  {
    "name": "Rashtrawadi Labour Party",
    "abbr": "RALP"
  },
  {
    "name": "Rashtrawadi Samaj Party",
    "abbr": "RWSP"
  },
  {
    "name": "Rashtrawadi Sena",
    "abbr": "RWS",
    "variations": {
      "abbr": [
        "RS"
      ]
    }
  },
  {
    "name": "Rashtriya Agraniye Dal",
    "abbr": "RAD"
  },
  {
    "name": "Rashtriya Aman Sena",
    "abbr": "RAS"
  },
  {
    "name": "Rashtriya Ambedkar Dal",
    "abbr": "RaAD"
  },
  {
    "name": "Rashtriya Apna Dal",
    "abbr": "RsAD"
  },
  {
    "name": "Rashtriya Arya Raj Sabha",
    "abbr": "RARS"
  },
  {
    "name": "Rashtriya Azad Manch",
    "abbr": "RAM",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Backward Party",
    "abbr": "RBP"
  },
  {
    "name": "Rashtriya Bahujan Congress Party",
    "abbr": "RBCP"
  },
  {
    "name": "Rashtriya Dehat Morcha Party",
    "abbr": "RDMP"
  },
  {
    "name": "Rashtriya Deshaj Party",
    "abbr": "RADP",
    "variations": {
      "abbr": [
        "RDP"
      ]
    }
  },
  {
    "name": "Rashtriya Dharmanirpeksha Nava Bharat Party",
    "abbr": "RDNBP",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Garib Dal",
    "abbr": "RGD",
    "type": "unrecognised",
    "location": "India"
  },
  {
    "name": "Rashtriya Garima Party",
    "abbr": "RSGP",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Gondvana Party",
    "abbr": "RGOP"
  },
  {
    "name": "Rashtriya Hamara Dal",
    "abbr": "RHD"
  },
  {
    "name": "Rashtriya Hindustan Sena Karnataka",
    "abbr": "RAHS"
  },
  {
    "name": "Rashtriya Hith Congress",
    "abbr": "RHC"
  },
  {
    "name": "Rashtriya Jan Sahay Dal",
    "abbr": "RJSD"
  },
  {
    "name": "Rashtriya Jan Sewak Party",
    "abbr": "RJSWP"
  },
  {
    "name": "Rashtriya Jan-Jagram Morcha",
    "abbr": "RJJM",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Janadhikar Party",
    "abbr": "RJAP"
  },
  {
    "name": "Rashtriya Janasachetan Party",
    "abbr": "RJNP"
  },
  {
    "name": "Rashtriya Janata Dal",
    "abbr": "RJD",
    "founded": 1997,
    "type": "state",
    "location": "Bihar, Jharkhand",
    "symbol": "Hurricane Lamp"
  },
  {
    "name": "Rashtriya Janhit Party",
    "abbr": "RASJP"
  },
  {
    "name": "Rashtriya Janpriya Party",
    "abbr": "RtJP"
  },
  {
    "name": "Rashtriya Janseva - Secular Party",
    "abbr": "RJNSP"
  },
  {
    "name": "Rashtriya Jantantra Paksh",
    "abbr": "RJTP"
  },
  {
    "name": "Rashtriya Janutthan Party",
    "abbr": "RAJUP"
  },
  {
    "name": "Rashtriya Janwadi Party (Krantikari)",
    "abbr": "RJPK"
  },
  {
    "name": "Rashtriya Kamgar Party",
    "abbr": "RKAP"
  },
  {
    "name": "Rashtriya Kamjor Varg Party",
    "abbr": "RKVP",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Komi Ekta Party",
    "abbr": "RKEP",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Kranti Party",
    "abbr": "RTKP",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "RKP"
      ]
    }
  },
  {
    "name": "Rashtriya Krantikari Janata Party",
    "abbr": "RKJP"
  },
  {
    "name": "Rashtriya Krantikari Samajwadi Party",
    "abbr": "RKSP",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Lok Dal",
    "abbr": "RLD",
    "founded": 1996,
    "type": "state",
    "location": "Uttar Pradesh",
    "symbol": "Hand pump"
  },
  {
    "name": "Rashtriya Lok Nirman Party",
    "abbr": "RLNP"
  },
  {
    "name": "Rashtriya Lok Samta Party",
    "abbr": "RLSP",
    "founded": 2013,
    "type": "state",
    "location": "Bihar",
    "symbol": "Ceiling fan"
  },
  {
    "name": "Rashtriya Lok Seva Morcha",
    "abbr": "RLSM"
  },
  {
    "name": "Rashtriya Lokhit Party",
    "abbr": "RLP"
  },
  {
    "name": "Rashtriya Lokmanch",
    "abbr": "RLM"
  },
  {
    "name": "Rashtriya Lokwadi Party",
    "abbr": "RALOP"
  },
  {
    "name": "Rashtriya Machhua Samaj Party",
    "abbr": "RMSP"
  },
  {
    "name": "Rashtriya Mahan Dal",
    "abbr": "RMD"
  },
  {
    "name": "Rashtriya Mahan Gantantra Party",
    "abbr": "RMGP"
  },
  {
    "name": "Rashtriya Majdoor Paksha",
    "abbr": "RMP",
    "type": "unrecognised",
    "location": "Gujarat"
  },
  {
    "name": "Rashtriya Manav Samman Party",
    "abbr": "RaMSP"
  },
  {
    "name": "Rashtriya Mangalam Party",
    "abbr": "RMGLMP"
  },
  {
    "name": "Rashtriya Mazdoor Ekta Party",
    "abbr": "RMEP"
  },
  {
    "name": "Rashtriya Naujawan Dal",
    "abbr": "RND"
  },
  {
    "name": "Rashtriya Parivartan Dal",
    "abbr": "RPD"
  },
  {
    "name": "Rashtriya Pragati Party",
    "abbr": "RPP"
  },
  {
    "name": "Rashtriya Pragtisheel Morcha",
    "abbr": "RPM",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Praja Congress (Secular)",
    "abbr": "RPC(S)",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Raksha Dal",
    "abbr": "RRD"
  },
  {
    "name": "Rashtriya Sahara Party",
    "abbr": "RASAP"
  },
  {
    "name": "Rashtriya Sakar Party",
    "abbr": "RSKP"
  },
  {
    "name": "Rashtriya Samaj Paksha",
    "abbr": "RSPS",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Samajik Nayak Paksha",
    "abbr": "RSNP"
  },
  {
    "name": "Rashtriya Samajwadi Party (Secular)",
    "abbr": "RSP(S)",
    "type": "unrecognised",
    "variations": {
      "name": [
        "Rashtriya Samajwadi Party  (Secular)"
      ]
    }
  },
  {
    "name": "Rashtriya Samanta Dal",
    "abbr": "RSMD",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Sant Sandesh Party",
    "abbr": "RSSDP",
    "variations": {
      "abbr": [
        "RSSP"
      ]
    }
  },
  {
    "name": "Rashtriya Sawarn Dal",
    "abbr": "RSD",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Sawarn Shakti Party",
    "abbr": "RSSHP"
  },
  {
    "name": "Rashtriya Sindhi Congress",
    "abbr": "RSDC",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Surajya Parishad",
    "abbr": "RSRP",
    "type": "unrecognised"
  },
  {
    "name": "Rashtriya Surya Prakash Party",
    "abbr": "RSUPRP"
  },
  {
    "name": "Rashtriya Swabhimaan Party",
    "abbr": "RSBP"
  },
  {
    "name": "Rashtriya Ulama Council",
    "abbr": "RUC"
  },
  {
    "name": "Rashtriya Viklang Party",
    "abbr": "RVLP"
  },
  {
    "name": "Rashtriya Yuva Sangh",
    "abbr": "RYS"
  },
  {
    "name": "Rastriya Gurujan Party",
    "abbr": "RGJP",
    "type": "unrecognised"
  },
  {
    "name": "Rastriya Insaaf Party",
    "abbr": "RaIP"
  },
  {
    "name": "Rayalaseema Rashtra Samithi",
    "abbr": "RRS",
    "type": "unrecognised"
  },
  {
    "name": "Republican",
    "abbr": "REP"
  },
  {
    "name": "Republican Janata Party",
    "abbr": "RJP",
    "type": "unrecognised",
    "location": "India"
  },
  {
    "name": "Republican Paksha (Khoripa)",
    "abbr": "RP(K)"
  },
  {
    "name": "Republican Party of India",
    "abbr": "RPI",
    "founded": 1956,
    "variations": {
      "name": [
        "Republican Party Of India"
      ]
    }
  },
  {
    "name": "Republican Party of India (A)",
    "abbr": "RPI(A)",
    "founded": 1999
  },
  {
    "name": "Republican Party of India (Balakrishnan)",
    "abbr": "RPI(B)",
    "type": "unrecognised"
  },
  {
    "name": "Republican Party of India (Democratic)",
    "abbr": "RPI(D)",
    "type": "unrecognised"
  },
  {
    "name": "Republican Party of India (Khobragade)",
    "abbr": "RPI(K)",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "RPI(KH)",
        "RPI(Khobragade)",
        "RPK"
      ]
    }
  },
  {
    "name": "Republican Presidium Party of India",
    "abbr": "RPPI"
  },
  {
    "name": "Republician Party of India Ektawadi",
    "abbr": "RPIE",
    "variations": {
      "abbr": [
        "RPI(E)"
      ],
      "name": [
        "Republican Party of India Ektavadi"
      ]
    }
  },
  {
    "name": "Revolutionary Communist Party of India (Rasik Bhatt)",
    "abbr": "RCPI(R)",
    "variations": {
      "abbr": [
        "RCPI(RB)"
      ]
    }
  },
  {
    "name": "Revolutionary Socialist Party",
    "abbr": "RSP",
    "founded": 1940,
    "type": "state",
    "location": "Kerala, West Bengal",
    "symbol": "Spade and stoker"
  },
  {
    "name": "Revolutionary Socialist Party of India (Marxist)",
    "abbr": "RSPI",
    "variations": {
      "name": [
        "Revolutionary Socialist Party of India(Marxist)"
      ],
      "abbr": [
        "RSP(M)"
      ]
    }
  },
  {
    "name": "Sainik Samaj Party",
    "abbr": "SaSP"
  },
  {
    "name": "Sakhthi Baratha Desam",
    "abbr": "SBD"
  },
  {
    "name": "Samaj Adhikar Kalyan Party",
    "abbr": "SAKP",
    "type": "unrecognised"
  },
  {
    "name": "Samajik Jantantrik Party",
    "abbr": "SJTP",
    "type": "unrecognised"
  },
  {
    "name": "Samajik Nyaya Party",
    "abbr": "SNP"
  },
  {
    "name": "Samajtantric Party of India",
    "abbr": "STPI"
  },
  {
    "name": "Samajwadi Jan Parishad",
    "abbr": "SWJP",
    "type": "unrecognised"
  },
  {
    "name": "Samajwadi Janata Party (Karnataka)",
    "abbr": "SJP(K)",
    "variations": {
      "name": [
        "Samajwadi Janata Party(Karnataka)"
      ],
      "abbr": [
        "SAJP"
      ]
    }
  },
  {
    "name": "Samajwadi Janata Party (Rashtriya)",
    "abbr": "SJP(R)",
    "type": "state",
    "location": "Himachal Pradesh"
  },
  {
    "name": "Samajwadi Party",
    "abbr": "SP",
    "founded": 1992,
    "type": "state",
    "location": "Uttar Pradesh",
    "symbol": "Bicycle"
  },
  {
    "name": "Samata Party",
    "abbr": "SAP",
    "type": "national",
    "location": "India"
  },
  {
    "name": "Samata Samaj Party",
    "abbr": "SMSP"
  },
  {
    "name": "Sampurna Vikas Dal",
    "abbr": "SPVD"
  },
  {
    "name": "Samruddha Odisha",
    "abbr": "SAMO"
  },
  {
    "name": "Samta Samjwadi Congress Party",
    "abbr": "SSCP"
  },
  {
    "name": "Samyukta Socialist Party",
    "abbr": "SOP",
    "founded": 1964,
    "type": "national",
    "location": "India",
    "variations": {
      "name": [
        "Samyukta Socialist Party/Socialist Party"
      ]
    }
  },
  {
    "name": "Sanghata Socialist Party",
    "abbr": "SSP",
    "type": "national",
    "location": "India"
  },
  {
    "name": "Sanyukt Samajwadi Dal",
    "abbr": "SSAD"
  },
  {
    "name": "Sardar Patel Congress Party",
    "abbr": "SPCP",
    "type": "unrecognised"
  },
  {
    "name": "Sardar Vallabhbhai Patel Party",
    "abbr": "SVPP",
    "type": "unrecognised"
  },
  {
    "name": "Sarva Janata Party",
    "abbr": "SJP",
    "variations": {
      "name": [
        "Sarva Janata Paksha"
      ],
      "abbr": [
        "SJPA"
      ]
    }
  },
  {
    "name": "Sarvajan Samaj Party (D)",
    "abbr": "SSPD"
  },
  {
    "name": "Sarvodaya Karnataka Paksha",
    "abbr": "SKP"
  },
  {
    "name": "Sarwajan Mahasabha",
    "abbr": "SM"
  },
  {
    "name": "Savarn Samaj Party",
    "abbr": "SVSP",
    "type": "unrecognised"
  },
  {
    "name": "Save Goa Front",
    "abbr": "SGF"
  },
  {
    "name": "Secular Party of India",
    "abbr": "SPI"
  },
  {
    "name": "Shakti Sena (Bharat Desh)",
    "abbr": "SSBD"
  },
  {
    "name": "Shiromani Akali Dal",
    "abbr": "SAD",
    "founded": 1920,
    "type": "state",
    "location": "Punjab",
    "symbol": "Scale"
  },
  {
    "name": "Shiromani Akali Dal (Simranjit Singh Mann)",
    "abbr": "SAD(M)",
    "variations": {
      "abbr": [
        "SAD(A)(Simranjit Singh Mann)"
      ]
    }
  },
  {
    "name": "Shivrajya Party",
    "abbr": "SVRP"
  },
  {
    "name": "Shivsena",
    "abbr": "SS",
    "founded": 1966,
    "type": "state",
    "location": "Maharashtra",
    "symbol": "Bow and arrow",
    "variations": {
      "name": [
        "Shiv Sena"
      ],
      "abbr": [
        "SHS"
      ]
    }
  },
  {
    "name": "Shoshit Samaj Dal",
    "abbr": "SSD",
    "type": "unrecognised"
  },
  {
    "name": "Shoshit Samaj Party",
    "abbr": "SHSP"
  },
  {
    "name": "Shubha Karnataka",
    "abbr": "SK"
  },
  {
    "name": "Sikkim Democratic Front",
    "abbr": "SDF",
    "founded": 1993,
    "type": "state",
    "location": "Sikkim",
    "symbol": "Umbrella"
  },
  {
    "name": "Sikkim Gorkha Prajatantric Party",
    "abbr": "SGPP"
  },
  {
    "name": "Sikkim Himali Rajya Parishad Party",
    "abbr": "SHRP"
  },
  {
    "name": "Sikkim Jan-Ekta Party",
    "abbr": "SJEP"
  },
  {
    "name": "Sikkim Krantikari Morcha",
    "abbr": "SKM",
    "founded": 2013,
    "type": "state",
    "location": "Sikkim",
    "symbol": "Table lamp"
  },
  {
    "name": "Smast Bhartiya Party",
    "abbr": "SMBHP",
    "type": "unrecognised"
  },
  {
    "name": "Social Action Party",
    "abbr": "SLAP"
  },
  {
    "name": "Social Democratic Party of India",
    "abbr": "SDPI",
    "variations": {
      "name": [
        "SOCIAL DEMOCRATIC PARTY OF INDIA"
      ]
    }
  },
  {
    "name": "Social Party (India)",
    "abbr": "SP(I)",
    "type": "unrecognised"
  },
  {
    "name": "Socialist",
    "abbr": "SOC"
  },
  {
    "name": "Socialist Janta (Democratic)",
    "abbr": "SJD",
    "variations": {
      "name": [
        "SOCIALIST JANTA (DEMOCRATIC)"
      ]
    }
  },
  {
    "name": "Socialist League of India",
    "abbr": "SOLI",
    "type": "unrecognised"
  },
  {
    "name": "Socialist Party (Lohia)",
    "abbr": "SOP(L)",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "SLP(L)"
      ]
    }
  },
  {
    "name": "Socialist Party (Ramakant Pandey)",
    "abbr": "SOP(P)",
    "type": "unrecognised"
  },
  {
    "name": "Socialist Unity Centre of India (Communist)",
    "abbr": "SUCI(C)",
    "type": "unrecognised",
    "location": "India",
    "variations": {
      "abbr": [
        "SUCI"
      ],
      "name": [
        "SOCIALIST UNITY CENTRE OF INDIA (COMMUNIST)"
      ]
    }
  },
  {
    "name": "Socialistic Democratic Party",
    "abbr": "SDP"
  },
  {
    "name": "Suheldev Bhartiya Samaj Party",
    "abbr": "SBSP",
    "type": "unrecognised"
  },
  {
    "name": "Sunder Samaj Party",
    "abbr": "SUSP",
    "location": "Chhattisgarh"
  },
  {
    "name": "Swabhiman Party",
    "abbr": "SwP",
    "warning": "Unofficial abbreviation"
  },
  {
    "name": "Swabhimani Paksha",
    "abbr": "SWP"
  },
  {
    "name": "Swaraj Dal",
    "abbr": "SWD"
  },
  {
    "name": "Swaraj Party - Yes (Subhash Chandra Bosh)",
    "abbr": "SPYSCB",
    "variations": {
      "name": [
        "Swaraj Party -Yes(Subhash chandra Bosh)"
      ]
    }
  },
  {
    "name": "Swarajya Party Of India",
    "abbr": "SWPI"
  },
  {
    "name": "Swarna Yuga Party",
    "abbr": "SUP"
  },
  {
    "name": "Swatantra Bharat Paksha",
    "abbr": "STBP",
    "variations": {
      "abbr": [
        "SBP"
      ]
    }
  },
  {
    "name": "Swatantra Party",
    "abbr": "SWA",
    "founded": 1959,
    "type": "national",
    "location": "India"
  },
  {
    "name": "Tamil Desiyak Katchi",
    "abbr": "TDK"
  },
  {
    "name": "Tamil Nadu Jananayaka Congress",
    "abbr": "TNJC"
  },
  {
    "name": "Tamil Nadu Makkal Congress",
    "abbr": "TNMC"
  },
  {
    "name": "Tamil Nadu Peoples Party",
    "abbr": "TNPP"
  },
  {
    "name": "Telangana Rashtra Samithi",
    "abbr": "TRS",
    "founded": 2001,
    "type": "state",
    "location": "Telangana,Andhra Pradesh",
    "symbol": "Car"
  },
  {
    "name": "Telugu Desam Party",
    "abbr": "TDP",
    "founded": 1982,
    "type": "state",
    "location": "Andhra Pradesh, Telangana",
    "symbol": "Bicycle"
  },
  {
    "name": "The Humanist Party of India",
    "abbr": "THPI"
  },
  {
    "name": "The Religion of Man Revolving Political Party of India",
    "abbr": "TRMRPPI"
  },
  {
    "name": "Tippu Sultan National Republic Party",
    "abbr": "TSNRP"
  },
  {
    "name": "Tipraland State Party",
    "abbr": "TSP",
    "location": "Tripura"
  },
  {
    "name": "Tola Party",
    "abbr": "ToP"
  },
  {
    "name": "Trilinga Praja Pragati Party",
    "abbr": "TPPP",
    "type": "unrecognised"
  },
  {
    "name": "Trinamool Gana Parishad",
    "abbr": "TNGP",
    "type": "unrecognised"
  },
  {
    "name": "Tripura People's Party",
    "abbr": "TPP",
    "location": "Tripura",
    "variations": {
      "name": [
        "Tripura People’s Party",
        "Tripura Peoples Party"
      ]
    }
  },
  {
    "name": "Ulzaipali Makkal Katchy",
    "abbr": "UMK"
  },
  {
    "name": "United Citizen Party",
    "abbr": "UCP"
  },
  {
    "name": "United Communist Party of India",
    "abbr": "UCPI"
  },
  {
    "name": "United Democratic Party",
    "abbr": "UDP",
    "founded": 1972,
    "type": "state",
    "location": "Meghalaya",
    "symbol": "Drum"
  },
  {
    "name": "United Goans Democratic Party",
    "abbr": "UGDP",
    "type": "state"
  },
  {
    "name": "United Minorities Front, Assam",
    "abbr": "UMFA"
  },
  {
    "name": "United Naga Democratic Party",
    "abbr": "UNDP",
    "location": "Nagaland"
  },
  {
    "name": "United National Loktantrik Party",
    "abbr": "UNLP"
  },
  {
    "name": "United Secular Congress Party of India",
    "abbr": "USCPI"
  },
  {
    "name": "United Women Front",
    "abbr": "UWF",
    "type": "unrecognised"
  },
  {
    "name": "Upekshit Samaj Party",
    "abbr": "UKSP",
    "variations": {
      "abbr": [
        "USP"
      ]
    }
  },
  {
    "name": "Urs Samyuktha Paksha",
    "abbr": "USYP"
  },
  {
    "name": "Uttar Pradesh Republican Party",
    "abbr": "UPRP"
  },
  {
    "name": "Uttar Pradesh United Democratic Front",
    "abbr": "UPUDF"
  },
  {
    "name": "Uttarakhand Kranti Dal",
    "abbr": "UKKD",
    "type": "state",
    "variations": {
      "abbr": [
        "UKD"
      ]
    }
  },
  {
    "name": "Uttarakhand Kranti Dal (P)",
    "abbr": "UKDP",
    "type": "state",
    "variations": {
      "name": [
        "Uttarakhand Kranti Dal(P)"
      ],
      "abbr": [
        "UKD (P)",
        "UKD(P)"
      ]
    }
  },
  {
    "name": "Uttarakhand Pragatisheel Party",
    "abbr": "UtPP"
  },
  {
    "name": "Uttarakhand Raksha Morcha",
    "abbr": "UtRM"
  },
  {
    "name": "Uttarkhand Janwadi Party",
    "abbr": "UJP"
  },
  {
    "name": "Uttarkhand Parivartan Party",
    "abbr": "UPP"
  },
  {
    "name": "Vanchit Jamat Party",
    "abbr": "VAJP",
    "variations": {
      "abbr": [
        "VJP"
      ]
    }
  },
  {
    "name": "Vanchitsamaj Insaaf Party",
    "abbr": "VIP",
    "type": "unrecognised"
  },
  {
    "name": "Vichara Jagruthi Congress Paksha",
    "abbr": "VJCP"
  },
  {
    "name": "Vidharbha Janata Congress",
    "abbr": "VJC"
  },
  {
    "name": "Vidharbha Rajya Party",
    "abbr": "VRP"
  },
  {
    "name": "Viduthalai Chiruthaigal Katch",
    "abbr": "VCK"
  },
  {
    "name": "Vikas Party",
    "abbr": "VP"
  },
  {
    "name": "Vishva Hindustani Sangathan",
    "abbr": "VHS",
    "type": "unrecognised"
  },
  {
    "name": "Vishwa Vikas Sangh",
    "abbr": "VVS"
  },
  {
    "name": "Vivasayi Anbhu Katchi",
    "abbr": "VAK"
  },
  {
    "name": "Vyavastha Parivartan Party",
    "abbr": "VPP"
  },
  {
    "name": "Welfare Party of India",
    "abbr": "WPI",
    "variations": {
      "name": [
        "Welfare Party Of India"
      ],
      "abbr": [
        "WPOI"
      ]
    }
  },
  {
    "name": "West Bengal Socialist Party",
    "abbr": "WBSP"
  },
  {
    "name": "YSR Bahujana Party",
    "abbr": "YBP"
  },
  {
    "name": "Youth And Students Party",
    "abbr": "YSP"
  },
  {
    "name": "Youth For Equality",
    "abbr": "YFE"
  },
  {
    "name": "Yuva Gantantra Party",
    "abbr": "YGP"
  },
  {
    "name": "Yuva Sarkar",
    "abbr": "YuS",
    "type": "unrecognised",
    "variations": {
      "abbr": [
        "YUS"
      ]
    }
  },
  {
    "name": "Yuva Vikas Party",
    "abbr": "YVP",
    "type": "unrecognised",
    "location": "Gujarat"
  },
  {
    "name": "Yuvajana Sramika Rythu Congress Party",
    "abbr": "YSRCP",
    "founded": 2011,
    "type": "state",
    "location": "Andhra Pradesh, Telangana",
    "symbol": "Ceiling fan",
    "variations": {
      "name": [
        "YSR Congress Party"
      ],
      "abbr": [
        "YSRC"
      ]
    }
  },
  {
    "name": "Zoram Nationalist Party",
    "abbr": "ZNP",
    "founded": 1997,
    "type": "state",
    "location": "Mizoram",
    "symbol": "Sun (without rays)"
  }
];

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

  var out = json.filter(function(d){
    return (d[type] == party || d[type] == party.toUpperCase()) || (d.variations && d.variations[type] && (d.variations[type].indexOf(party) !== -1 || d.variations[type].indexOf(party.toUpperCase()) != -1));
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
* pt.convert("narp", { type: "abbr" }); // "narp"
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

var version = "3.2.54";

var meta = {
  parties_count: json.length,
  version: version,
  last_updated: "March 15, 2018"
};

exports.getType = getType;
exports.getInfo = getInfo;
exports.convert = convert;
exports.meta = meta;

Object.defineProperty(exports, '__esModule', { value: true });

})));
