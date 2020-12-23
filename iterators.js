module.exports = function makeCounter(someObj, maxNum=10) {
  let num = 0;
  let done = false;

  someObj.next = function() {

    if (num < maxNum) {
      num += 1;
    } else {
      done = true;
    }

    return {
      value: num,
      done: done
    }

  }
}
