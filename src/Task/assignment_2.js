// for 2019
const range_2019 = {
	Agility_Coordination: 64,
	Hunting_Skills: 76,
	Communication: 60,
	Adaptability: 82,
	Independence: 67,
	Affection_Socialization: 70,
	Climbing: 90,
	Balance: 88,
	Senses: 86,
	Flexibility: 75,
	Problem_solving: 67,
	Stealth: 59,
};

const range_2024 = {
    Agility_Coordination: 71,
	Hunting_Skills: 70,
	Communication: 75,
	Adaptability: 63,
	Independence: 78,
	Affection_Socialization: 84,
	Climbing: 95,
	Balance: 96,
	Senses: 90,
	Flexibility: 83,
	Problem_solving: 78,
	Stealth: 72,
};

// array of sorted top and bottom value in 2019
const today_2019_sorted=[];
const bottom3_2019_sort=[]


// array of sorted top and bottom value in 2024
const future_2024_sorted= [];
const bottom3_2024_sorted= [];

function To_Add(value,sorted_array){
    for(let skills in value ){
       sorted_array.push([skills,value[skills]]) 
    }
}


// function for sort top 3
function Sort_Object(value){
    value.sort(function(a,b){
       return b[1] - a[1]
    }) 
}

// function for sort bottom 3
function Sort_Bottom(value){
    value.sort(function(a,b){
        return a[1] - b[1]
    })
}



To_Add(range_2019, today_2019_sorted)
To_Add(range_2019, bottom3_2019_sort)
Sort_Object(today_2019_sorted)
Sort_Bottom(bottom3_2019_sort)


// for 2024
To_Add(range_2024,future_2024_sorted)
To_Add(range_2024,bottom3_2024_sorted)
Sort_Object(future_2024_sorted)
Sort_Bottom(bottom3_2024_sorted)

console.log("for -2019 top", today_2019_sorted);
console.log("for -2019 bottom", bottom3_2019_sort);
console.log("for -2024 top", future_2024_sorted);
console.log("for -2024 bottom", bottom3_2024_sorted);

const top3_2019 = [today_2019_sorted.slice(0,3)]
const botton3_2019 = [bottom3_2019_sort.slice(0,3)]
const top3_2024 = [future_2024_sorted.slice(0,3)]
const bottom3_2024 = [bottom3_2024_sorted.slice(0,3)]

console.log("top",top3_2019);
console.log("bottom",botton3_2019);

console.log("top",top3_2024);
console.log( 'bottom',bottom3_2024);


const all_skills = [
	{name:"Agility and Coordination", score2019: 64, score2024: 71},
	{name:"Hunting and Predatory Skills",score2019: 76, score2024: 70},
	{name:"Communication",score2019: 60, score2024: 75},
	{name:"Adaptability",score2019: 82, score2024: 63},
	{name:"Independence",score2019: 67, score2024: 78},
    { name: 'Affection and Socialization', score2019: 70, score2024: 84 },
	{name:"Climbing",score2019: 90, score2024: 95},
	{name:"Balance",score2019: 88, score2024: 96},
	{name:"Senses",score2019: 86, score2024: 90},
	{name:"Flexibility",score2019: 75, score2024: 83},
	{name:"Problem-solving",score2019: 67, score2024: 78},
	{name:"Stealth",score2019: 59, score2024: 72},
];

const sortedCapabilities = all_skills.sort((a, b) => (b.score2024 - b.score2019) - (a.score2024 - a.score2019));

//  top-3 accelerating
console.log('Top-3 accelerating capabilities:');
for (let i = 0; i < 3; i++) {
    console.log((sortedCapabilities[i].name),(sortedCapabilities[i].score2024 - sortedCapabilities[i].score2019));
};




