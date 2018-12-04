var recipes = {}

function updateObjectWithKeyAndValue(recipes, foodItem, value) {
  return Object.assign({}, recipes, { [foodItem]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(recipes, foodItem, value) {
   recipes[foodItem] = value
   return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newRecipe = Object.assign({}, recipes)
  delete newRecipe[key]
  return newRecipe
}

<<<<<<< HEAD
function destructivelyDeleteFromObjectByKey(recipes, key) {
delete recipes[key]
return recipes
}
=======
function destructivelyDeleteFromObjectByKey(object, key)
delete recipes[key]
return recipes
>>>>>>> 57cc7bb360ae0e0033695c86c5b0fde21e5e5035
