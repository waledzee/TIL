

 let stringval =
 {
 fristName :"waled",
 lastName :"zaki",
 job :"devloper",
 isactive:true,
 salary:5005,
 }

 console.log(stringval);
 console.log(typeof(stringval));


//  let jsonValue=JSON.stringify(stringval);


 let jsonValue=JSON.stringify(stringval,null,2);

 let employee=
 `{
    "fristname" : "waled",
    "lastName" : "zaki",
    "title" : "CTO"
 }
 `;
 let jsonValue2= JSON.parse(employee);
 console.log(jsonValue2);
 console.log(typeof(jsonValue2));

//  console.log(obj);

