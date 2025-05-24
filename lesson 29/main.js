var programmingLanguages = ['javascript','php','java'];

console.log(programmingLanguages[2]);

programmingLanguages.push('python');

programmingLanguages.pop();

programmingLanguages.unshift('c#');

programmingLanguages.shift();

console.log(programmingLanguages);

 var programmingLanguages1 = ['javascript','php','java','python','c#'];

 programmingLanguages1.splice(1,1, 'Ruby');

console.log(programmingLanguages1);

console.log(Math.floor(Math.random()*10));

var students = ['student1','student2'];

var [s1,s2] = students;

console.log(s1,s2);
console.log(s2);

var citys = ['prishtina1','podujeva2','peja3','prizreni4'];

var [c1,c2, ,c4] = citys;

console.log(c1);
console.log(c2);
console.log(c4);

var numbers = [1,2,3,4,5,6,7,8,9,10];

var[first,second, ...otherNumbers]=numbers;

console.log(first);
console.log(second);
console.log(otherNumbers.toString())



