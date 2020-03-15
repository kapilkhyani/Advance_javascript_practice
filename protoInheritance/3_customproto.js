 const custom = () => {
   Date.prototype.lastYear = function () {
     return this.getFullYear() -1;
   }
   console.log(new Date().lastYear())
   console.log(new Date('2017-10-5').lastYear())
}

const newMap = () => {
  Array.prototype.map = function() {
    let arr = [];
    for (let i=0; i< this.length;i++){
      arr.push(this[i] + ' --kapil');
    }    
    return arr;
  }
  console.log([1,2,3,4].map());
}

module.exports = {
  custom,
  newMap
}