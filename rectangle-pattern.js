let n=4;


for(let i=0;i<=n;i++){
    let line="";
    for(let j=0;j<=n;j++){
        line+="*"
    }
    console.log(line)
}

console.log()

let cols=10;
let rows=5;

for(let i=0;i<=rows;i++){
 let line="";

 for(let j=0;j<cols;j++){
    line+="*"
 }
 console.log(line)


}

console.log()


for(let i=0;i<=rows;i++){
 let line="";

 for(let j=0;j<=cols;j++){
    if(i==0 || j==0 || j==cols ||  i==rows) {
        line+="*"}else{
            line+=" "
        }
 }
 console.log(line)


}


// Output

// *****
// *****
// *****
// *****
// *****

// **********
// **********
// **********
// **********
// **********
// **********

// ***********
// *         *
// *         *
// *         *
// *         *
// ***********
