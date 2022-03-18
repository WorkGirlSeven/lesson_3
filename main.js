Array.prototype.myFilter = function (callback, thisArg) {
  let context = this;
  const result = []
  
  if (arguments.length > 1) {
    context = thisArg;
  }
  
  if (typeof callback !== 'function') {
    throw new Error(`${callback} is not a function`);
  }
  
  for (let i = 0; i < this.length; i++) {
    
    if (this[i] !== undefined) {
      const current = callback.call(context, this[i], i, this);
      
      if (current) {
        result.push(this[i])
      }
    }
  }
  
  return result;
};


Array.prototype.myReduce = function (callback, initialValue) {
  let result;
  let i = 0;
  
  if (typeof callback !== 'function') {
    throw new Error(`${callback} is not a function`);
  }
  
  if (this.length === 0) {
    throw new Error('Reduce of empty array with no initial value')
  }
  
  if (arguments.length >= 2) {
    result = initialValue;
  } else {
    result = this[i];
    i++;
  }
  
  for (i; i < this.length; i++) {
    
    if (this[i] !== undefined) {
      result = callback(result, this[i], i, this)
    }
  }
  
  return result;
}

