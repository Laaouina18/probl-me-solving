const array = [1];
const n = 0;
var t = [];
if(n!=0){
    if(array.length>n){
while(array.length>0){
var t2=array.splice(0,n);
t.push(t2);
}}else{
    console.log("donner moi un nobmre différent de 0")
}}else{
    t.push(...array)
}
console.log(t);
