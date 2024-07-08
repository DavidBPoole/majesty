/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/

const queens = []
// Updated..

const hailTheQueen = (nameString) => {
  return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
console.log(athena)

const charisse = hailTheQueen("Charisse Ford") // Argument value is "Charisse Ford"
console.log(charisse)

const jenna = hailTheQueen("Jenna Solis") // Argument value is "Jenna Solis"
console.log(jenna)

const gail = hailTheQueen("Gail Matos") // Argument value is "Gail Matos"
console.log(gail)

const ramona = hailTheQueen("Bug Queen") // If no argument is passed it will return undefined.
console.log(ramona)

const monica = hailTheQueen("Monica Dinglehopper")
console.log(monica)
// Example displaying that if the function is misnamed it will throw an undefined error

const createQueen = (queenId, queenName) => {
  const queenObject = {
      id: queenId,
      name: queenName
  }

  queens.push(queenObject)
}

createQueen(1, "Example Queen 1")
createQueen(1, "Example Queen 2")

// DEBUGGER SETUP COMPLETE
