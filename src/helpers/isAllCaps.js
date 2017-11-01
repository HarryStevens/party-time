/**
* A utility function that is not exported with the module.
* @param {string} x A string 
* @returns {boolean} Whether all the letters in the string entered are uppercase.
* @private
*/
export default function isAllCaps(x) {
  return x === x.toUpperCase();
}