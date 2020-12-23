module.exports = function generate(isEven) {

  let num = 0;


    if (isEven) {
      num = 0;
    } else {
      num = -1;
    }

    let iterable = {
      next: function(swap){
      num +=  (swap ? 1 : 2);

      return {value: num};
    }
  }
    return iterable;
  }
