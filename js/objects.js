 
// frist declaring method 
 let obj1={};

 //secound declaring object method
  let obj2= new Object;

  obj1={
    fristName:"waled",
    lastName:"zaki",
    isActive:true,
    startDate:new Date("1 ,januory ,2023")
  };

  console.log(obj1);

// accessing properties in obj1

console.log(`the frist name is: ${obj1.fristName} and is active ${obj1.isActive}`);

// deleting the propreties

delete obj1.fristName;
console.log(obj1);

