n=6

for(let i=0;i<=n;i++){
  line="";
  
  for(let j=n;j>=i;j--){
    line+=" "
  }
  for(let j=0;j<=i;j++){
     line+="*"
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