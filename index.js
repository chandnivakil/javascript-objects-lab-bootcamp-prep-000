var recipes = {}

function updateObjectWithKeyAndValue(recipes, foodItem, value) {
  return Object.assign({}, recipes, { [foodItem]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(recipes, foodItem, value) {
   recipes[foodItem] = value
   return recipes
}

function deleteFromObjectByKey(recipes, key, value) {   
   var newObj = Object.assign({}, recipes, { [key]: value })   
   delete newObj.key 
   return newObj
}

 function destructivelyDeleteObjectByKey(recipes, key, value) {
  recipes[foodItem] = value
   delete recipes.foodItem
 }