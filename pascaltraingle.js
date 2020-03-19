
function createPascalTriangle (numRows) {
  var pascalTriangle = [];
  
  for (var i = 0; i < numRows; i++) { 
    pascalTriangle[i] = new Array(i+1);
    
    for (var j = 0; j < i+1; j++) {            
      if (j === 0 || j === i) {
        pascalTriangle[i][j] = 1;
      } else {
        pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
      }
    }
  }
  
  return pascalTriangle;
}

    var fs = require("fs");
    //the folowing line read input from input.txt file
    fs.readFile('input.txt','utf8',function(err,numRows){
        out = createPascalTriangle (numRows)
      //  the folowing line write  output in same file input.txt
       fs.writeFile('input.txt',out);
        for (var i = 0;i<numRows;i++){
         console.log(out[i]);
         
         
        };
        
   });
