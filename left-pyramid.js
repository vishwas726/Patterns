n=10

for(let i=0;i<n;i++){
  let line="";

  for(let j=0;j<i;j++){
      
    line+="*";

  }

  console.log(line);

}

for(let i=0;i<=n;i++){
  
  line="";

  for(let j=1;j<=i;j++){
   line+=j;
  }

  console.log(line)
  
}


// Output


// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********

// 1
// 12
// 123
// 1234
// 12345
// 123456
// 1234567
// 12345678
// 123456789
// 12345678910

