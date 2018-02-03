var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("### While-loop ###")
var countWhile = 0
while (countWhile < ingredients.length) {
  console.log(ingredients[countWhile])
  countWhile++
}

// Write a for loop that prints out the contents of ingredients:
console.log('\n### For-loop ###')
for (var countFor = 0; countFor < ingredients.length; countFor++) {
  console.log(ingredients[countFor])
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('\n### Backwards-loop ###')
var countBackwards = ingredients.length - 1
while (countBackwards >= 0) {
  console.log(ingredients[countBackwards])
  countBackwards--
}