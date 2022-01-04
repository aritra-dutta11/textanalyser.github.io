let charCount=document.getElementById("char"),
    wordcount=document.getElementById("word"),
    sentence=document.getElementById("sentnc"),
    space1=document.getElementById("space"),
    punctuation=document.getElementById("punc");

const textArea=document.querySelector(".text textarea")
      processBtn=document.getElementById("process-btn");
let Values=[charCount,wordcount,sentence,space,punctuation];
function init(){
    Values.forEach(value => value.innerHTML = 0);
}
init();
processBtn.addEventListener('click', () =>   {
    let text=textArea.value
        space1.innerHTML=text.split(" ").length-1;
        charCount.innerHTML= text.length;
        text=textArea.value
        wordcount.innerHTML= findWord(text);
        sentence.innerHTML= findSentnc(text);
        punctuation.innerHTML = findpunc(text);
});
/*function findWord(text1){
    let temptext=text1.replace(/[.,!%&*;'"-]/g,"");
    temptext=temptext.replace(/[\r]/g,"")
    let tempList=[];
    tempList.forEach(word => tempList.push(word.split(" ")));
    let wordList=extractarray(tempList);
    return wordList.filter(char => char != '' ).length;
}
function extractarray(arr){
    return arr.reduce((wordList,word)=>{
        return wordList.concat(Array.isArray(word)? extract(word):word)
    },[]);
}*/
function findWord(text){
    var a='';
    var c=0;
    var s="";
    for(var i=0;i<text.length-1;i++){
        a=text.charAt(i);
        if((a=='.')||(a==',')||(a==';')||(a=='"')||(a=='-')||(a=='&')||(a=='?')||(a==' ')){
            if(text.charAt(i+1)!=' '){
                c++;
            }
            s="";
        }
        else{
            s=s+a;
        }
    }
    if((text.charAt(i)=='.')||(text.charAt(i)==',')||(a==';')||(text.charAt(i)=='"')||(text.charAt(i)=='-')||(text.charAt(i)=='&')||(text.charAt(i)=='?')||(a==' ')){
        c++;
    }
    return c;
}
function findSentnc(text){
    const regex=/[\w|\)][.?!](\s|$)/g;
    let senCount= text.match(regex);
    return senCount ? senCount.length : 0;
}
function findpunc(text1){
    let a='';
    let c=0;
    let s="";
    for(var i=0;i<text1.length;i++){
        a=text1.charAt(i);
        if((a=='.')||(a==',')||(a==';')||(a=='"')||(a=='-')||(a=='&')||(a=='?')){
            c++;
            s="";
        }
        else{
            s=s+a;
        }
    }
    return c;
}