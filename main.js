document.write("9.Swap the case of each character of a string"+"<br>");
function test9(str){
    let x=[];
    var u="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var l="abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<=str.length;i++){
        if(u.indexOf(str[i])!==-1)
        {
            x.push(str[i].toLowerCase());
        }
        else if(l.indexOf(str[i])!==-1){
            x.push(str[i].toUpperCase());
        }
        else{
            x.push(str[i]);
        }
    }
    return x.join("");
}
document.write(test9("The Quick Brown Fox")+"<br><br>");