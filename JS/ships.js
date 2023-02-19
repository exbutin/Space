// Query
"use strict";
import { shuffle, expand } from "./main.js";
// Arrays
//all

function initialize_ships() {
  //set array
  const tip = [
    "/Images/Ship Cards_01.jpg",
    "/Images/Ship Cards_02.jpg",
    "/Images/Ship Cards_03.jpg",
    "/Images/Ship Cards_04.jpg",
  ];

  const adapter = [
    "/Images/Ship Cards_17.jpg",
    "/Images/Ship Cards_18.jpg",
    "/Images/Ship Cards_19.jpg",
    "/Images/Ship Cards_20.jpg",
  ];

  const engine = [
    "/Images/Ship Cards_05.jpg",
    "/Images/Ship Cards_06.jpg",
    "/Images/Ship Cards_07.jpg",
    "/Images/Ship Cards_08.jpg",
  ];

  const mid = [
    "/Images/Ship Cards_09.jpg",
    "/Images/Ship Cards_10.jpg",
    "/Images/Ship Cards_11.jpg",
    "/Images/Ship Cards_12.jpg",
    "/Images/Ship Cards_13.jpg",
    "/Images/Ship Cards_14.jpg",
    "/Images/Ship Cards_15.jpg",
    "/Images/Ship Cards_16.jpg",
  ];

  //large
  const large_tip = ["/Images/Ship Cards_03.jpg", "/Images/Ship Cards_04.jpg"];

  const large_engine = [
    "/Images/Ship Cards_05.jpg",
    "/Images/Ship Cards_06.jpg",
  ];

  const large_mid = [
    "/Images/Ship Cards_13.jpg",
    "/Images/Ship Cards_14.jpg",
    "/Images/Ship Cards_15.jpg",
    "/Images/Ship Cards_16.jpg",
  ];

  //small
  const small_tip = ["/Images/Ship Cards_01.jpg", "/Images/Ship Cards_02.jpg"];

  const small_engine = [
    "/Images/Ship Cards_07.jpg",
    "/Images/Ship Cards_08.jpg",
  ];

  const small_mid = [
    "/Images/Ship Cards_09.jpg",
    "/Images/Ship Cards_10.jpg",
    "/Images/Ship Cards_11.jpg",
    "/Images/Ship Cards_12.jpg",
  ];

  //add to local
  localStorage.setItem("tip_array_base", JSON.stringify(tip));
  localStorage.setItem("adapter_array_base", JSON.stringify(adapter));
  localStorage.setItem("mid_array_base", JSON.stringify(mid));
  localStorage.setItem("engine_array_base", JSON.stringify(engine));

  localStorage.setItem("large_tip_array", JSON.stringify(large_tip));
  localStorage.setItem("large_mid_array", JSON.stringify(large_mid));
  localStorage.setItem("large_engine_array", JSON.stringify(large_engine));

  localStorage.setItem("small_tip_array", JSON.stringify(small_tip));
  localStorage.setItem("small_mid_array", JSON.stringify(small_mid));
  localStorage.setItem("small_engine_array", JSON.stringify(small_engine));
}

function true_random_ships() {
  localStorage.setItem(
    "tip_array",
    JSON.stringify(shuffle(JSON.parse(localStorage.getItem("tip_array_base"))))
  );
  localStorage.setItem(
    "adapter_array",
    JSON.stringify(
      shuffle(JSON.parse(localStorage.getItem("adapter_array_base")))
    )
  );
  localStorage.setItem(
    "mid_array",
    JSON.stringify(shuffle(JSON.parse(localStorage.getItem("mid_array_base"))))
  );
  localStorage.setItem(
    "engine_array",
    JSON.stringify(
      shuffle(JSON.parse(localStorage.getItem("engine_array_base")))
    )
  );
}

function distributed_random_ships() {
  let adapter = shuffle(JSON.parse(localStorage.getItem("adapter_array_base")));
  let large_tip = shuffle(JSON.parse(localStorage.getItem("large_tip_array")));
  let large_mid = shuffle(JSON.parse(localStorage.getItem("large_mid_array")));
  let large_engine = shuffle(
    JSON.parse(localStorage.getItem("large_engine_array"))
  );
  let small_tip = shuffle(JSON.parse(localStorage.getItem("small_tip_array")));
  let small_mid = shuffle(JSON.parse(localStorage.getItem("small_mid_array")));
  let small_engine = shuffle(
    JSON.parse(localStorage.getItem("small_engine_array"))
  );

  let tip = [large_tip[0], small_tip[0]];
  let mid = [small_mid[0], large_mid[0], small_mid[1], large_mid[1]];
  let engine = [small_engine[0], large_engine[0]];

  localStorage.setItem("tip_array", JSON.stringify(tip));
  localStorage.setItem("adapter_array", JSON.stringify(adapter));
  localStorage.setItem("engine_array", JSON.stringify(engine));
  localStorage.setItem("mid_array", JSON.stringify(mid));
}

function update_ships() {
  document.getElementById("ship_div").style.display = "grid";

  //tips
  document.querySelector("#tip_1").src = JSON.parse(
    localStorage.getItem("tip_array")
  )[0];
  document.querySelector("#tip_2").src = JSON.parse(
    localStorage.getItem("tip_array")
  )[1];

  //adapter
  document.querySelector("#adapter_1").src = JSON.parse(
    localStorage.getItem("adapter_array")
  )[0];
  document.querySelector("#adapter_2").src = JSON.parse(
    localStorage.getItem("adapter_array")
  )[1];

  //mid
  document.querySelector("#mid_1").src = JSON.parse(
    localStorage.getItem("mid_array")
  )[0];
  document.querySelector("#mid_2").src = JSON.parse(
    localStorage.getItem("mid_array")
  )[1];
  document.querySelector("#mid_3").src = JSON.parse(
    localStorage.getItem("mid_array")
  )[2];
  document.querySelector("#mid_4").src = JSON.parse(
    localStorage.getItem("mid_array")
  )[3];

  //engine
  document.querySelector("#engine_1").src = JSON.parse(
    localStorage.getItem("engine_array")
  )[0];
  document.querySelector("#engine_2").src = JSON.parse(
    localStorage.getItem("engine_array")
  )[1];

  if ((JSON.parse(localStorage.getItem("engine_array")).length = 0)) {
    document.getElementById("ship_div").style.display = "none";
  }
}
