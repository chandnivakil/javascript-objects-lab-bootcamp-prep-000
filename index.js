var recipes = {}

function updateObjectWithKeyAndValue(recipes, foodItem, value) {
  return Object.assign({}, recipes, { [foodItem]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(recipes, foodItem, value) {
   recipes[foodItem] = value
   return recipes
}

function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign({}), obj)
  delete newRecipe
}


  1) Objects deleteFromObjectByKey(object, key) - DONE
  deletes `key` from a clone of object 
  and returns the new object (it is non-destructive):