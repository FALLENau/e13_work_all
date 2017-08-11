var Enumeration = function() {}

Enumeration.prototype = {

  find: function(array, callback){
    for (var obj of array) {
      if (callback(obj)) {
        return obj
      }
    }
  },

  map: function(array, callback) {
    var newArray = []
    for (var obj of array) {
      newArray.push(callback(obj))
    }
    return newArray
  },

  filter: function(array, callback) {
    var filteredArray = []
    for (var obj of array) {
      if (callback(obj)) {
        filteredArray.push(obj)
      }
    }
    return filteredArray
  },

  some: function(array, callback) {
    var result = false
    for (var obj of array) {
      if (callback(obj)) {
        result = true
      }
    }
    return result
  },

  every: function(array, callback) {
    var resultArray = []
    for (var obj of array) {
      if (callback(obj)) {
        resultArray.push(obj)
      }
    }
    if (resultArray.length  === array.length) {
      return true
    } else {
      return false
    }

  },

  reduce: function(array, callback) {
    var total = 0
    for (var obj of array) {
      total = callback(total, obj)
    }
    return total
  },

  reduce: function(array, callback) {
    var runningTotal = 0
    for (var element of array) {
      runningTotal = callback(runningTotal, element)
    }
    return runningTotal
  }

}


module.exports = Enumeration;
