var recipes = {}

function updateObjectWithKeyAndValue(recipes, foodItem, value) {
  return Object.assign({}, recipes, { [foodItem]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(recipes, foodItem, value)

1) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) - DONE      


updates `object` with the given `key` and `value` (it is destructive) and returns theentire updated object: