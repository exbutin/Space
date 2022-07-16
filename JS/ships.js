// Query
"use strict";
// Arrays
//all
const tip = [
  "/Images/Ship Cards DARK_01.jpg",
  "/Images/Ship Cards DARK_02.jpg",
  "/Images/Ship Cards DARK_03.jpg",
  "/Images/Ship Cards DARK_04.jpg",
];

const adapter = [
  "/Images/Ship Cards DARK_17.jpg",
  "/Images/Ship Cards DARK_18.jpg",
  "/Images/Ship Cards DARK_19.jpg",
  "/Images/Ship Cards DARK_20.jpg",
];

const engine = [
  "/Images/Ship Cards DARK_05.jpg",
  "/Images/Ship Cards DARK_06.jpg",
  "/Images/Ship Cards DARK_07.jpg",
  "/Images/Ship Cards DARK_08.jpg",
];

const mid = [
  "/Images/Ship Cards DARK_09.jpg",
  "/Images/Ship Cards DARK_10.jpg",
  "/Images/Ship Cards DARK_11.jpg",
  "/Images/Ship Cards DARK_12.jpg",
  "/Images/Ship Cards DARK_13.jpg",
  "/Images/Ship Cards DARK_14.jpg",
  "/Images/Ship Cards DARK_15.jpg",
  "/Images/Ship Cards DARK_16.jpg",
];

//large
const large_tip = [
  "/Images/Ship Cards DARK_03.jpg",
  "/Images/Ship Cards DARK_04.jpg",
];

const large_engine = [
  "/Images/Ship Cards DARK_05.jpg",
  "/Images/Ship Cards DARK_06.jpg",
];

const large_mid = [
  "/Images/Ship Cards DARK_13.jpg",
  "/Images/Ship Cards DARK_14.jpg",
  "/Images/Ship Cards DARK_15.jpg",
  "/Images/Ship Cards DARK_16.jpg",
];

//small
const small_tip = [
  "/Images/Ship Cards DARK_01.jpg",
  "/Images/Ship Cards DARK_02.jpg",
];

const small_engine = [
  "/Images/Ship Cards DARK_07.jpg",
  "/Images/Ship Cards DARK_08.jpg",
];

const small_mid = [
  "/Images/Ship Cards DARK_09.jpg",
  "/Images/Ship Cards DARK_10.jpg",
  "/Images/Ship Cards DARK_11.jpg",
  "/Images/Ship Cards DARK_12.jpg",
];

//Functions
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function true_random() {
  shuffle(tip);
  shuffle(adapter);
  shuffle(mid);
  shuffle(engine);

  //tips
  let tip_1 = tip[0];
  let tip_2 = tip[1];
  document.querySelector("#tip_1").src = tip_1;
  document.querySelector("#tip_2").src = tip_2;

  // document.querySelector("#tip_1").src = tip[0];
  // document.querySelector("#tip_2").src = tip[1];

  //adapter
  document.querySelector("#adapter_1").src = adapter[0];
  document.querySelector("#adapter_2").src = adapter[1];

  //mid
  document.querySelector("#mid_1").src = mid[0];
  document.querySelector("#mid_2").src = mid[1];
  document.querySelector("#mid_3").src = mid[2];
  document.querySelector("#mid_4").src = mid[3];

  //engine
  document.querySelector("#engine_1").src = engine[0];
  document.querySelector("#engine_2").src = engine[1];
}

function distributed_random() {
  shuffle(large_tip);
  shuffle(large_adapter);
  shuffle(large_mid);
  shuffle(large_engine);

  shuffle(small_tip);
  shuffle(small_adapter);
  shuffle(small_mid);
  shuffle(small_engine);

  //tips
  document.querySelector("#tip_1").src = large_tip[0];
  document.querySelector("#tip_2").src = small_tip[0];

  //adapter
  document.querySelector("#adapter_1").src = large_adapter[0];
  document.querySelector("#adapter_2").src = small_adapter[0];

  //mid
  document.querySelector("#mid_1").src = large_mid[0];
  document.querySelector("#mid_2").src = small_mid[0];
  document.querySelector("#mid_3").src = large_mid[1];
  document.querySelector("#mid_4").src = small_mid[1];

  //engine
  document.querySelector("#engine_1").src = large_engine[0];
  document.querySelector("#engine_2").src = small_engine[0];
}
