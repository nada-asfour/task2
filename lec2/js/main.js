var counter=0
function incData(){
    counter++;
    document.getElementById("demo").innerHTML=counter
}
function decData(){
    counter--;
    document.getElementById("demo").innerHTML=counter
}
function x(){
    var myValue = document.getElementById("dollar").value;
    var result = document.getElementById("pass");

    if(myValue==""){
    result.innerHTML=" Please enter a number";
    return false;
    }
    else if (myValue<0){
        result.innerHTML="Please enter a positive number";
        return false;
    }
    else if (myValue==0){
        result.innerHTML="Please enter a number rather than zero";
        return false;
    }
    else if (myValue>0){
        result.innerHTML=myValue*50 +" Egyptian pound";
        return false;
    }
    else{
        result.innerHTML="Please enter a number not a text";
        return false;
    }
}