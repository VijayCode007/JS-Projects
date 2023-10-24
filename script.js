// since status is a keyword , we set the var name to isStatus

var isStatus = document.querySelector("h3");
var sendRequest = document.querySelector("#add");
var flag=0;

sendRequest.addEventListener("click",function(){

    if(flag==0){
        isStatus.innerHTML="Friends <span>5 Mutuals<span>";
        isStatus.style.color="green";
        sendRequest.innerHTML="Remove Friend";
        flag=1;
    }
    else{
        isStatus.innerHTML="Stranger <span>5 Mutuals<span>";
        isStatus.style.color="gray";
        sendRequest.innerHTML="Add Friend";
        flag=0;
    }
    
})
