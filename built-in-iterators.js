module.exports = function filterForNumbers(iterable) {
  let result = [];
  let regex = /[0-9]/g;
  
  for(let i of iterable){
    if(regex.test(i)){
      result.push(i);
    }
  }
  return result;
}
