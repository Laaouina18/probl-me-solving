var n = 12;
var arr = n.toString().split('');
for (i = 0; i < arr.length; i++) arr[i] = +arr[i] | 0;
var r=0;
var reverse=arr.reverse();
for(let i=0;i<reverse.length;i++){
    
     r=r*10+reverse[i];
}
console.log(r);