const marks=[90,92,94,99,100,44]

const arr = new Array(10).fill('').map((i,index)=>({
name:'Name '+index,
marks: marks[index%6],
id:index
}));


let result;

let func=(num)=>{
result={   //result created as array of object
    ...result  ,  //spread operator(to store previous elements)
 [num.marks]:arr.filter((val)=>{ //create key dynamically
   return num.marks==val.marks;
   })
 }
}

arr.forEach((element) => {
  func(element);
});
console.log(result);




/*
output:

{
  100: [{
  id: 4,
  marks: 100,
  name: "Name 4"
}],
  44: [{
  id: 5,
  marks: 44,
  name: "Name 5"
}],
  90: [{
  id: 0,
  marks: 90,
  name: "Name 0"
}, {
  id: 6,
  marks: 90,
  name: "Name 6"
}],
  92: [{
  id: 1,
  marks: 92,
  name: "Name 1"
}, {
  id: 7,
  marks: 92,
  name: "Name 7"
}],
  94: [{
  id: 2,
  marks: 94,
  name: "Name 2"
}, {
  id: 8,
  marks: 94,
  name: "Name 8"
}],
  99: [{
  id: 3,
  marks: 99,
  name: "Name 3"
}, {
  id: 9,
  marks: 99,
  name: "Name 9"
}]
}
*/