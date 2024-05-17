/*
    Define a function with a single parameter. When the function
    is invoked, an argument is required.
*/
const hailTheQueen = (nameString) => {
  return `Hail Her Majesty, ${nameString}.`  // This function returns a string
}

const athena = hailTheQueen("Athena Perez") // Argument value is "Athena Perez"
console.log(athena)
