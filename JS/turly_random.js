// Query
// Arrays
//all

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

function intialize_ships() {
  //set array
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

//resources
function intialize_resources() {
  //set array
  const resources = [
    "/Images/Resource Cards_01.jpg",
    "/Images/Resource Cards_02.jpg",
    "/Images/Resource Cards_03.jpg",
    "/Images/Resource Cards_04.jpg",
    "/Images/Resource Cards_05.jpg",
    "/Images/Resource Cards_06.jpg",
    "/Images/Resource Cards_07.jpg",
    "/Images/Resource Cards_08.jpg",
    "/Images/Resource Cards_09.jpg",
    "/Images/Resource Cards_10.jpg",
    "/Images/Resource Cards_11.jpg",
    "/Images/Resource Cards_12.jpg",
    "/Images/Resource Cards_13.jpg",
    "/Images/Resource Cards_14.jpg",
  ];

  //add to local
  localStorage.setItem("resource_array_base", JSON.stringify(resources));
}

function true_random_resources() {
  localStorage.setItem(
    "resource_array",
    JSON.stringify(
      shuffle(JSON.parse(localStorage.getItem("resource_array_base")))
    )
  );
}

function update_resources() {
  document.getElementById("resource_div").style.display = "grid";

  document.querySelector("#jupiter").src = JSON.parse(
    localStorage.getItem("resource_array")
  )[0];
  document.querySelector("#hygiea").src = JSON.parse(
    localStorage.getItem("resource_array")
  )[1];
  document.querySelector("#pallas").src = JSON.parse(
    localStorage.getItem("resource_array")
  )[2];
  document.querySelector("#ceres").src = JSON.parse(
    localStorage.getItem("resource_array")
  )[3];
  document.querySelector("#phobos").src = JSON.parse(
    localStorage.getItem("resource_array")
  )[4];
  document.querySelector("#mars").src = JSON.parse(
    localStorage.getItem("resource_array")
  )[5];
  document.querySelector("#mercury").src = JSON.parse(
    localStorage.getItem("resource_array")
  )[6];
  document.querySelector("#venus").src = JSON.parse(
    localStorage.getItem("resource_array")
  )[7];

  if ((resources_Array.length = 0)) {
    document.getElementById("resource_div").style.display = "none";
  }
}

// function expand(div_id, header_id) {
//   var body = document.getElementById(div_id);
//   var header = document.getElementById(header_id);

//   if (game_id.style.display == "none") {
//     body.style.display = "grid";
//     header.style.borderBottomLeftRadius = "0vw";
//     header.style.borderBottomRightRadius = "0vw";
//   } else {
//     body.style.display = "none";
//     header.style.borderRadius = "2.5vw";
//   }
// }

function expand_options() {
  console.log("worked");

  var button_secondary = document.getElementById("ship_randomize_options");
  var button_main = document.getElementById("ship_randomize_header");

  if (button_secondary.style.display == "none") {
    button_secondary.style.display = "grid";
    button_main.style.borderBottomLeftRadius = "0vw";
    button_main.style.borderBottomRightRadius = "0vw";
  } else {
    button_secondary.style.display = "none";
    button_main.style.borderRadius = "2.5vw";
  }
}
