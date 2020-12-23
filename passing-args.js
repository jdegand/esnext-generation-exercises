module.exports = function *multiplier(multiple = 1) {
      // `yield` all integers multiplied by the value passed in via `.next()`

      let num = 0;

      while(true){
        num += 1;
        multiple = yield num * multiple;
        if(!multiple){  //exclude this and you get NaN issues
          multiple = 1;
        }
      }
}
