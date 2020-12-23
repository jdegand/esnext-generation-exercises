module.exports = function *generate(isEven) {
    // `yield` either odd or even numbers based on `isEven`

    let num = isEven ? 0 : -1;

      while(true) {
          yield num +=2
      }

    }
