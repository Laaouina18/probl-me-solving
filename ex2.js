const str1="nouhailaaee";
const str2="nouhialaa";

var t=[];
var t2=[];
if(str1.length>str2.length){
    console.log("true");
    for(let i=0;i<str1.length;i++){
        if(str2.includes(str1[i])===false ){
        console.log("il faut inserer %s dans str2",str1[i]);}
    else if( str2[i]!=str1[i]){
         console.log("il faut inserer %s dans str2",str1[i]);
    }}
}else if(str2.length>str1.length){
    console.log("true");
    for(let i=0;i<str2.length;i++){
      if( str1.includes(str2[i])===false){
        console.log("il faut inserter %s dans str1",str2[i]);}
    }
 
}else {
for(let i=0;i<str1.length;i++){
     if (str1[i]!=str2[i]){
         t.push(str2[i]);
         t2.push(str1[i]);
     }
}
console.log(t);
console.log(t2);
if(t.length==0){ console.log("false")
    
}else{
for(let i=0;i<t.length;i++){
    
    for(let j=0;j<t2.length;j++){
        if (t[i]!=t[j]){
        console.log("il faut que %s soit dans la place de %s",t[i], t[j] );
    }}
}}}