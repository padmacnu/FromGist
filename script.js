let cleanTheRoom = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve('Cleaned the Room, ');
    }, 10000);
    //resolve('Cleaned the Room, ');
  });
};

let removedTheGarbage = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + 'removed the garbage, ');
  });
};

let getIcecream = function(message) {
  return new Promise(function(resolve, reject) {
    resolve(message + 'got icecream.');
  });
};

cleanTheRoom()
  .then(removedTheGarbage)
  .then(getIcecream)
  .then(function(message) {
    console.log('This is the message\n' + message);
  });
