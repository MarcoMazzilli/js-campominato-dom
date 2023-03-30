//==================================
//            GLOBALI 
//==================================

const btnStart    = document.getElementById("startButton");
const mainWrapper = document.querySelector(".main-wrapper");
const levelsBlock = [100 , 81 , 49];
const numberBombs =5; //dato da cambiare
let   arrayBomb   = [];
let   finishGame  = false
//==================================
//            EVENTI 
//==================================

btnStart.addEventListener("click", function(){

  reset()

  const level = document.querySelector("select").value
  
  const playGround = generateContainer()   //Creo il playground
  // console.log(level);

  for (let i = 0 ; i < levelsBlock[level] ; i++) {   //Ciclo per generare i box
  
    const singleBox = generateBox();
    singleBox.zzIdBox = i + 1;
  
    singleBox.addEventListener("click", function(){ //qui devo aggiungere la fine del gioco 
      this.classList.toggle("active")
      console.log(this)

      if (arrayBomb.includes(this.zzIdBox)) { ///////////////
        console.warn("hai toccato una bomba")
        endGame()
      }

    })

    playGround.appendChild(singleBox)
  }

  bombList = generateBomb(levelsBlock[level]);
  console.log("Array delle bombe",arrayBomb)
})




// ====================================
//              FUNZIONI 
//=====================================

// PLAYGROUND GENERATOR
function generateContainer() { 
  const container       = document.createElement("div")
  container.className   = "container"

  document.querySelector(".main-wrapper").appendChild(container)
  return container;
}

// SINGLE BOX GENERATOR
function generateBox() {
  const level = document.querySelector("select").value
  const newBox = document.createElement("div");

  if       (level == 0) {
    newBox.className = "box easy"
  }else if (level == 1) {  
    newBox.className = "box medium"
  }else {
    newBox.className = "box hard"
  }

  return newBox;
}

// RESET
function reset (){ 
  mainWrapper.innerHTML = "";
  arrayBomb = [];
  
}

// RANDOM NUMBER GENERATOR + RANGE
function estrattoreRandom (min , max) { 

  const randomNumber = Math.floor(Math.random()*(max - min + 1) + min)
  return randomNumber
}

// BOMBS GENERATOR
function generateBomb(nMax) { 
  console.log(nMax);

 do {
  let newBomb = estrattoreRandom(1 , nMax)

  if ((!(arrayBomb.includes(newBomb)))) {
    arrayBomb.push(newBomb)
  }
 }while (arrayBomb.length < numberBombs)

 return arrayBomb
}

