module.exports = function zeros(expression) {
  // your solution

  let result = 0;
  let oneF = expression.split('*').filter(el => (el.slice(-2) !== '!!')).map(el => parseInt(el,10));
  let twoF = expression.split('*').filter(el => (el.slice(-2) === '!!')).map(el => parseInt(el,10));

  function oneFactZeros(x) {
    result = result + (Math.floor(x/5) + Math.floor(x/25));
  } 

  function twoFactZeros(x) {
    if (x%2 === 0) {
      result = result + Math.floor(x/10) + Math.floor(x/50);
    } else {
      result = result + Math.floor(x/10);
      if (x%10 >= 5) result++;
      if (x >= 25) result++;
      if (x >= 75) result++;
    }
  }

  oneF.forEach(x => oneFactZeros(x));

  if  (twoF.some(el => el%2 === 0)) {
    twoF.forEach(x => twoFactZeros(x));
  }
  console.log(result);
  return result;

}
