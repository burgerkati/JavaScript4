let animals = ['Bear', 'Wolf', 'Fox', 'Raven'];

function addMoreAnimals() {
  let newLength = document.getElementById('input').value;
// method
  animals.unshift(newLength);
  alert(animals + ' a été ajouté au tableau');
}
/*
animals.forEach(function(item, index, array) {
  alert(array)
})
*/
/*
let newLength = animals.unshift('Kangaroo')
*/
