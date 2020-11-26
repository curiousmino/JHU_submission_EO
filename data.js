// ---> Data Dictionary
// state	:Name of the State
// stabr	:State abbreviation
// tot_pop	:Total population in the State
// staff_ct	:Number of contact tracers
// staff_ct_bypop	:Number of contact tracers per 100,000 inhabitants
// cases_14_day_avg	:Average daily number of COVID-19 cases during the last 14 days
// cases_14_day_avg_bypop	:Average daily number of COVID-19 cases during the last 14 days per 100,000 inhabitants
// ct_per_case	:Number of contact tracers per each case: staff_ct / cases_14_day_avg/


let data = [
 {
   "state": "District of Columbia",
   "stabr": "DC",
   "tot_pop": 702455,
   "staff_ct": 418,
   "staff_ct_bypop": 0.0006,
   "cases_14_day_avg": 45,
   "cases_14_day_avg_bypop": 6,
   "ct_per_case": 9
 },
 {
   "state": "Virginia",
   "stabr": "VA",
   "tot_pop": 8517685,
   "staff_ct": 2503,
   "staff_ct_bypop": 0.00029,
   "cases_14_day_avg": 909,
   "cases_14_day_avg_bypop": 11,
   "ct_per_case": 3
 },
 {
   "state": "Oregon",
   "stabr": "OR",
   "tot_pop": 4190713,
   "staff_ct": 1197,
   "staff_ct_bypop": 0.00029,
   "cases_14_day_avg": 203,
   "cases_14_day_avg_bypop": 5,
   "ct_per_case": 6
 },
 {
   "state": "Massachusetts",
   "stabr": "MA",
   "tot_pop": 6902149,
   "staff_ct": 1873,
   "staff_ct_bypop": 0.00027,
   "cases_14_day_avg": 345,
   "cases_14_day_avg_bypop": 5,
   "ct_per_case": 5
 },
 {
   "state": "Arkansas",
   "stabr": "AR",
   "tot_pop": 3013825,
   "staff_ct": 787,
   "staff_ct_bypop": 0.00026,
   "cases_14_day_avg": 755,
   "cases_14_day_avg_bypop": 25,
   "ct_per_case": 1
 },
 {
   "state": "Tennessee",
   "stabr": "TN",
   "tot_pop": 6770010,
   "staff_ct": 1630,
   "staff_ct_bypop": 0.00024,
   "cases_14_day_avg": 1324,
   "cases_14_day_avg_bypop": 20,
   "ct_per_case": 1
 },
 {
   "state": "California",
   "stabr": "CA",
   "tot_pop": 39557045,
   "staff_ct": 9130,
   "staff_ct_bypop": 0.00023,
   "cases_14_day_avg": 3270,
   "cases_14_day_avg_bypop": 8,
   "ct_per_case": 3
 },
 {
   "state": "Maryland",
   "stabr": "MD",
   "tot_pop": 6042718,
   "staff_ct": 1350,
   "staff_ct_bypop": 0.00022,
   "cases_14_day_avg": 524,
   "cases_14_day_avg_bypop": 9,
   "ct_per_case": 3
 },
 {
   "state": "New Jersey",
   "stabr": "NJ",
   "tot_pop": 8908520,
   "staff_ct": 1873,
   "staff_ct_bypop": 0.00021,
   "cases_14_day_avg": 399,
   "cases_14_day_avg_bypop": 4,
   "ct_per_case": 5
 },
 {
   "state": "Ohio",
   "stabr": "OH",
   "tot_pop": 11689442,
   "staff_ct": 2411,
   "staff_ct_bypop": 0.00021,
   "cases_14_day_avg": 920,
   "cases_14_day_avg_bypop": 8,
   "ct_per_case": 3
 },
 {
   "state": "Hawaii",
   "stabr": "HI",
   "tot_pop": 1420491,
   "staff_ct": 288,
   "staff_ct_bypop": 0.0002,
   "cases_14_day_avg": 111,
   "cases_14_day_avg_bypop": 8,
   "ct_per_case": 3
 },
 {
   "state": "Nebraska",
   "stabr": "NE",
   "tot_pop": 1929268,
   "staff_ct": 388,
   "staff_ct_bypop": 0.0002,
   "cases_14_day_avg": 348,
   "cases_14_day_avg_bypop": 18,
   "ct_per_case": 1
 },
 {
   "state": "Nevada",
   "stabr": "NV",
   "tot_pop": 3034392,
   "staff_ct": 600,
   "staff_ct_bypop": 0.0002,
   "cases_14_day_avg": 289,
   "cases_14_day_avg_bypop": 10,
   "ct_per_case": 2
 },
 {
   "state": "West Virginia",
   "stabr": "WV",
   "tot_pop": 1805832,
   "staff_ct": 350,
   "staff_ct_bypop": 0.00019,
   "cases_14_day_avg": 184,
   "cases_14_day_avg_bypop": 10,
   "ct_per_case": 2
 },
 {
   "state": "Rhode Island",
   "stabr": "RI",
   "tot_pop": 1057315,
   "staff_ct": 200,
   "staff_ct_bypop": 0.00019,
   "cases_14_day_avg": 98,
   "cases_14_day_avg_bypop": 9,
   "ct_per_case": 2
 },
 {
   "state": "Montana",
   "stabr": "MT",
   "tot_pop": 1062305,
   "staff_ct": 200,
   "staff_ct_bypop": 0.00019,
   "cases_14_day_avg": 159,
   "cases_14_day_avg_bypop": 15,
   "ct_per_case": 1
 },
 {
   "state": "Minnesota",
   "stabr": "MN",
   "tot_pop": 5611179,
   "staff_ct": 1000,
   "staff_ct_bypop": 0.00018,
   "cases_14_day_avg": 682,
   "cases_14_day_avg_bypop": 12,
   "ct_per_case": 1
 },
 {
   "state": "Delaware",
   "stabr": "DE",
   "tot_pop": 967171,
   "staff_ct": 171,
   "staff_ct_bypop": 0.00018,
   "cases_14_day_avg": 104,
   "cases_14_day_avg_bypop": 11,
   "ct_per_case": 2
 },
 {
   "state": "Idaho",
   "stabr": "ID",
   "tot_pop": 1754208,
   "staff_ct": 300,
   "staff_ct_bypop": 0.00017,
   "cases_14_day_avg": 289,
   "cases_14_day_avg_bypop": 16,
   "ct_per_case": 1
 },
 {
   "state": "Illinois",
   "stabr": "IL",
   "tot_pop": 12741080,
   "staff_ct": 1943,
   "staff_ct_bypop": 0.00015,
   "cases_14_day_avg": 1703,
   "cases_14_day_avg_bypop": 13,
   "ct_per_case": 1
 },
 {
   "state": "Georgia",
   "stabr": "GA",
   "tot_pop": 10519475,
   "staff_ct": 1600,
   "staff_ct_bypop": 0.00015,
   "cases_14_day_avg": 1500,
   "cases_14_day_avg_bypop": 14,
   "ct_per_case": 1
 },
 {
   "state": "New Mexico",
   "stabr": "NM",
   "tot_pop": 2095428,
   "staff_ct": 300,
   "staff_ct_bypop": 0.00014,
   "cases_14_day_avg": 109,
   "cases_14_day_avg_bypop": 5,
   "ct_per_case": 3
 },
 {
   "state": "Colorado",
   "stabr": "CO",
   "tot_pop": 5695564,
   "staff_ct": 802,
   "staff_ct_bypop": 0.00014,
   "cases_14_day_avg": 439,
   "cases_14_day_avg_bypop": 8,
   "ct_per_case": 2
 },
 {
   "state": "North Carolina",
   "stabr": "NC",
   "tot_pop": 10383620,
   "staff_ct": 1311,
   "staff_ct_bypop": 0.00013,
   "cases_14_day_avg": 1197,
   "cases_14_day_avg_bypop": 12,
   "ct_per_case": 1
 },
 {
   "state": "Texas",
   "stabr": "TX",
   "tot_pop": 28701845,
   "staff_ct": 3533,
   "staff_ct_bypop": 0.00012,
   "cases_14_day_avg": 5276,
   "cases_14_day_avg_bypop": 18,
   "ct_per_case": 1
 },
 {
   "state": "South Carolina",
   "stabr": "SC",
   "tot_pop": 5084127,
   "staff_ct": 586,
   "staff_ct_bypop": 0.00012,
   "cases_14_day_avg": 1041,
   "cases_14_day_avg_bypop": 20,
   "ct_per_case": 1
 },
 {
   "state": "New York",
   "stabr": "NY",
   "tot_pop": 19542209,
   "staff_ct": 2000,
   "staff_ct_bypop": 0.0001,
   "cases_14_day_avg": 720,
   "cases_14_day_avg_bypop": 4,
   "ct_per_case": 3
 },
 {
   "state": "Pennsylvania",
   "stabr": "PA",
   "tot_pop": 12807060,
   "staff_ct": 1303,
   "staff_ct_bypop": 0.0001,
   "cases_14_day_avg": 746,
   "cases_14_day_avg_bypop": 6,
   "ct_per_case": 2
 },
 {
   "state": "Oklahoma",
   "stabr": "OK",
   "tot_pop": 3943079,
   "staff_ct": 400,
   "staff_ct_bypop": 0.0001,
   "cases_14_day_avg": 939,
   "cases_14_day_avg_bypop": 24,
   "ct_per_case": 0
 },
 {
   "state": "Mississippi",
   "stabr": "MS",
   "tot_pop": 2986530,
   "staff_ct": 300,
   "staff_ct_bypop": 0.0001,
   "cases_14_day_avg": 444,
   "cases_14_day_avg_bypop": 15,
   "ct_per_case": 1
 },
 {
   "state": "Michigan",
   "stabr": "MI",
   "tot_pop": 9995915,
   "staff_ct": 1000,
   "staff_ct_bypop": 0.0001,
   "cases_14_day_avg": 749,
   "cases_14_day_avg_bypop": 7,
   "ct_per_case": 1
 },
 {
   "state": "Maine",
   "stabr": "ME",
   "tot_pop": 1338404,
   "staff_ct": 110,
   "staff_ct_bypop": 0.00008,
   "cases_14_day_avg": 31,
   "cases_14_day_avg_bypop": 2,
   "ct_per_case": 4
 },
 {
   "state": "Alabama",
   "stabr": "AL",
   "tot_pop": 4887871,
   "staff_ct": 400,
   "staff_ct_bypop": 0.00008,
   "cases_14_day_avg": 869,
   "cases_14_day_avg_bypop": 18,
   "ct_per_case": 0
 },
 {
   "state": "New Hampshire",
   "stabr": "NH",
   "tot_pop": 1356458,
   "staff_ct": 110,
   "staff_ct_bypop": 0.00008,
   "cases_14_day_avg": 35,
   "cases_14_day_avg_bypop": 3,
   "ct_per_case": 3
 },
 {
   "state": "Vermont",
   "stabr": "VT",
   "tot_pop": 626299,
   "staff_ct": 44,
   "staff_ct_bypop": 0.00007,
   "cases_14_day_avg": 5,
   "cases_14_day_avg_bypop": 1,
   "ct_per_case": 9
 },
 {
   "state": "Utah",
   "stabr": "UT",
   "tot_pop": 3161105,
   "staff_ct": 163,
   "staff_ct_bypop": 0.00005,
   "cases_14_day_avg": 669,
   "cases_14_day_avg_bypop": 21,
   "ct_per_case": 0
 },
 {
   "state": "Kansas",
   "stabr": "KS",
   "tot_pop": 2911510,
   "staff_ct": 100,
   "staff_ct_bypop": 0.00003,
   "cases_14_day_avg": 630,
   "cases_14_day_avg_bypop": 22,
   "ct_per_case": 0
 },
 {
   "state": "Wisconsin",
   "stabr": "WI",
   "tot_pop": 5813568,
   "staff_ct": 175,
   "staff_ct_bypop": 0.00003,
   "cases_14_day_avg": 1488,
   "cases_14_day_avg_bypop": 26,
   "ct_per_case": 0
 },
 {
   "state": "Washington",
   "stabr": "WA",
   "tot_pop": 7535591,
   "staff_ct": 135,
   "staff_ct_bypop": 0.00002,
   "cases_14_day_avg": 370,
   "cases_14_day_avg_bypop": 5,
   "ct_per_case": 0
 },
 {
   "state": "Iowa",
   "stabr": "IA",
   "tot_pop": 3156145,
   "staff_ct": 50,
   "staff_ct_bypop": 0.00002,
   "cases_14_day_avg": 716,
   "cases_14_day_avg_bypop": 23,
   "ct_per_case": 0
 }
]
