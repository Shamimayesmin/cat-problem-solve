// 2019
const Two_nineteen = {
    Coordination: 64,
    Predictory_skill: 76,
    Communication: 60,
    Adaptibility: 82,
    Independence: 67,
    Attention: 70,
    Climbing: 90,
    Balance: 88,
    Senses: 86,
    Flexibility: 75,
    Problem_Solving: 67,
    stealth: 59,
  };
  
  // 2024 
  const Two_Twenty_Four = {
    Coordination: 71,
    Predictory_skill: 70,
    Communication: 75,
    Adaptibility: 63,
    Independence: 78,
    Attention: 84,
    Climbing: 95,
    Balance: 96,
    Senses: 90,
    Flexibility: 83,
    Problem_Solving: 78,
    stealth: 72,
  };
  
  // Array for sorted values of 2019 
  const Nineteen_Sorted = [];
  
  // Array for sorted values of 2024
  const Two_Four_Sorted = [];
  
  function To_Add(Val, Sorted_Array) {
    for (let language in Val) {
      Sorted_Array.push([language, Val[language]]);
    };
  };
  
  // Function To Sort 
  function Sort_Object(val) {
    val.sort(function (a, b) {
      return b[1] - a[1];
    });
  };
  
  To_Add(Two_nineteen, Nineteen_Sorted);
  
  // Sorting
  Sort_Object(Nineteen_Sorted);
  
  To_Add(Two_Twenty_Four, Two_Four_Sorted);
  
  // Sorting
  Sort_Object(Two_Four_Sorted);
  
  console.log("for 2019",Nineteen_Sorted);
  console.log("for 2024", Two_Four_Sorted);
  
  const Top_Three_Two_Nineteen = [Nineteen_Sorted.slice(0, 3)];
  const Top_Three_Two_Four = [Two_Four_Sorted.slice(0, 3)];
//   console.log(Top_Three_Two_Nineteen);
//   console.log(Top_Three_Two_Four);