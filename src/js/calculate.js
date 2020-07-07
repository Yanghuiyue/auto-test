/**
 * @method sum
 * @param {number} m
 * @param {number} n
 * @return {number} sum of n amd m
 * @example sum(1,2)
 */

const sum = (m,n) => {
  //异常处理
  if(n === undefined && m ===undefined) {
    return 0;
  }
  if(typeof m !="number" || typeof n !="number") {
    return new Error();
  }
  else return n+m;
}

/**
 * @method multi
 * @param {number} m 
 * @param {number} n 
 * @return {number} multi result of n and m
 * @example multi(1,2)
 */

const multi = (m,n) => m*n;

module.exports = {sum,multi};