module.exports = function toReadable (number) {
   const arr0to9 = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
   const arr10to19 = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
   const arrEndTy = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

   let numStr = number.toString();

   if(numStr.length === 3){
      let secondPart = +numStr.substring(numStr.length - 2);
      return arr0to9[+numStr[0]] + ' hundred' + (secondPart>0?' '+toReadable(secondPart):'');
   }else if(number <= 99 && number > 19){
      let secondPart = +numStr.substring(numStr.length - 1);
      return arrEndTy[+numStr[0]-2] + (secondPart>0?' '+toReadable(secondPart):'');
   }else if(number >= 10 && number <= 19){
      return arr10to19[number%10];
   }else if(number >= 0 && number <= 9){
      return arr0to9[number];
   }
}

