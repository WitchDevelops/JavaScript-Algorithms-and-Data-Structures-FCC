let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  if ("Alan" in userObj && "Jeff" in userObj && "Ryan" in userObj && "Sarah" in userObj) {
    //everyone is here
    //return true
    return true;
  } else {
    //if not, return false
    return false;
  }
}
console.log(isEveryoneHere(users));