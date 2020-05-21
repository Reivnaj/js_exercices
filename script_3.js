// 2.2.2 Pyramide de Mario

function pyramide(floor) {
  space = " "
  diese = ""
  while (floor > 0) {

    diese += "#"

    console.log(`${space.repeat(floor)}${diese}`)
    floor -= 1
  }
}

let floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

pyramide(floor)
