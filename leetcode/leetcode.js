// question 1
let expect = function(val) {
    
    function toBe(val2) {
        if (val2 === val){
            return true;
        }
        else {
            throw new Error ("Not Equal");
        }
    }
    

    function notToBe(val2) {
        if (val2 !== val){
            return true;
        }
        else {
            throw new Error ("Equal");
        }
    }

    return{
        toBe,
        notToBe,
    }

}

// question 2

let createCounter = function(init) {
    
    let count = init

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    function reset() {
        return (count = init);
    }

    return {increment, decrement, reset};
};

// question 3

let map = function(arr, fn) {
    const newArr = [];
  for (let i = 0; i < arr.length; i++) {
   newArr[i] = fn(arr[i], i);
  }
  return newArr;
};