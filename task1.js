//////////////// FILTER IMPLEMENTATION /////////////////////



let nums = [7,8,9,10,11]
function myfilter(callback, arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i], i, arr)) {
      result.push(arr[i])
    }
  }
  return result
}
myfilter(function(num, index, arr) {
  
  return num > 8
}, nums)




//////////////// FIND IMPLEMENTATION /////////////////////



const persons = [
  {
    name: 'Davit',
    surname: 'Margaryan',
    gender: 'male',
    age: 36,
  },
  {
    name: 'Meruzhan',
    surname: 'Margaryan',
    gender: 'male',
    age: 19,
  },
  {
    name: 'Anush',
    surname: 'Hakobyan',
    gender: 'female',
    age: 25,
  },
]
function myFind(callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      return i
    }
  } 
  
}
myFind(function(word, index, array) {
  return word.name === "Anush"
}, persons);



//////////////// FINDINDEX IMPLEMENTATION /////////////////////



const persons1 = [
  {
    name: 'Davit',
    surname: 'Margaryan',
    gender: 'male',
    age: 36,
  },
  {
    name: 'Meruzhan',
    surname: 'Margaryan',
    gender: 'male',
    age: 19,
  },
  {
    name: 'Anush',
    surname: 'Hakobyan',
    gender: 'female',
    age: 25,
  },
]
function myFindIndex(callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      return arr[i]
    }
  } 
  
}
myFindIndex(function(word, index, array) {
  return word.name === "Davit"
}, persons1);



//////////////// FOREACH IMPLEMENTATION /////////////////////



const nums1 = ["a","b","c","d","e"]
function foreach(callback, arr) {
  for(let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr)
  }
}
foreach(function (el, index, arr) {
 console.log(`Element: ${el}, Index ${index}, Array ${arr}`)
}, nums1);



//////////////// MAP IMPLEMENTATION /////////////////////



let nums2 = [7,8,9,10,11]
function myMap(callback, arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr))
  }
  return result
}
myMap(function(num, index, arr) {
  return num * 2
}, nums2)



//////////////// SOME IMPLEMENTATION /////////////////////



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


//////////////// FILTER IMPLEMENTATION /////////////////////



