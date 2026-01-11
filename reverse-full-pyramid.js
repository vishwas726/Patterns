

n=10;


// for(let i=0;i<=n;i++){
 
//     let line="";

//     for(let j=n;j>=i;j--){
         
//         line+=" ";

//     }
   
//     for(let j=0;j<=i*2;j++){
         
//         line+="*"

//     }


//     console.log(line)


// }

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

for(let i=1;i<=n;i++){
 
    let line="";

    for(let j=0;j<=i;j++){
         
        line+=" ";

    }
   
    for(let j=0;j<=n-i;j++){
         
        line+=" *"

    }


    console.log(line)


}



// for(let i=0;i<=n;i++){
 
//     let line="";

//     for(let j=n;j>=i;j--){
         
//         line+=" "

//     }

//     for(let j=0;j<=i*2;j++){
         
//         line+="*";

//     }

//     console.log(line)


// }


//Output

//             *
//            * *
//           * * *
//          * * * *
//         * * * * *
//        * * * * * *
//       * * * * * * *
//      * * * * * * * *
//     * * * * * * * * *
//    * * * * * * * * * *
//   * * * * * * * * * * *
//    * * * * * * * * * *
//     * * * * * * * * *
//      * * * * * * * *
//       * * * * * * *
//        * * * * * *
//         * * * * *
//          * * * *
//           * * *
//            * *
//             *