function showOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(key + ": " + obj[key]);
    }
  }
}

function checkProperty(str, obj) {
  return obj.hasOwnProperty(str);
}

function createEmptyObject() {
  return Object.create(null);
}

