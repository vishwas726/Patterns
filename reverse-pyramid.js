n=6

for(let i=0;i<=n;i++){
  let line=""
    for(let j=n;j>=i;j--){
       line+="*";

    }

    console.log(line);
}


for(let i=0;i<=n;i++){
   line=""
   let count=1;
   for(let j=n;j>=i;j--){
    line+=count;
    count++;
   }

   console.log(line)

}




// Output

// *******
// ******
// *****
// ****
// ***
// **
// *

// 1234567
// 123456
// 12345
// 1234
// 123
// 12
// 1