//================ GLOBALI ==================

const btnStart    = document.getElementById("startButton");
const mainWrapper = document.querySelector(".main-wrapper");
const levelsBlock = [100 , 81 , 49];


//al click scaturisco questo evento
/*
Cosa fa il click?
1. prima fa un reset di tutto quello che trova nel "main" con una funzione
2. Genera la nuova griglia con una FUNZIONE
*/



btnStart.addEventListener("click", function(){

  const level = document.querySelector("select").value
  
  const playGround = generateContainer()   //Creo il playground
  // console.log(level);

  for (let i = 0 ; i < levelsBlock[level] ; i++) {   //Ciclo per generare i box
  
    const singleBox = generateBox();
    singleBox.zzIdBox = i + 1
  
    singleBox.addEventListener("click", function(){
      this.classList.toggle("active")
      console.log(this.zzIdBox)
    })

    playGround.appendChild(singleBox)
  }
})



// ====================================
//              FUNZIONI 
//=====================================

function generateContainer() { //Genero il playground
  const container       = document.createElement("div")
  container.className   = "container"

  document.querySelector(".main-wrapper").appendChild(container)
  return container;
}

function generateBox() { //Genero le singole celle
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

function reset (){ //Resetto il main

  mainWrapper = "";

}
