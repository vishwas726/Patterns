let n=6;

for(let i=0;i<=n;i++){
   
    let line="";

    for(let j=n;j>=i;j--){
       
        line+=" ";
         

    }
   
    for(let j=0;j<=i;j++){
       line+=" *"

    }


    console.log(line)
 

}


console.log()
for(let i=0;i<=n;i++){
   
    let line="";

    for(let j=n;j>=i;j--){
       
        line+=" ";
         

    }
   
    for(let j=0;j<=(i*2);j++){
       line+="*"

    }


    console.log(line)
 

}

// Output

//         *
//        * *
//       * * *
//      * * * *
//     * * * * *
//    * * * * * *
//   * * * * * * *

//        *
//       ***
//      *****
//     *******
//    *********
//   ***********
//  *************
