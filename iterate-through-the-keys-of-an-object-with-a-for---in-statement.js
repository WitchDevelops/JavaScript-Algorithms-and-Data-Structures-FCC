const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
// this function counts how many users are online
function countOnline(usersObj) {
let count = 0;
for (let personOnline in usersObj) {
  //console.log(usersObj[personOnline]);
  let status = usersObj[personOnline];
  // console.log(status);
  if (status['online']) {
    count++;
   } 
}
return count;
}

console.log(countOnline(users));