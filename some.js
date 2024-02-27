const words = ["dog", "wolf", "by", "family", "eaten"];
function mySome(callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      return true
    }
  } 
  return false;
}
mySome(function(word, index, array) {
  return word.length > 5
}, words);