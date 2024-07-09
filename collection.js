var collection=document.getElementById("collection")
var search=document.getElementById("search")
var productall=collection.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var entervalue=event.target.value.toUpperCase()

    for(count=0;count<productall.length;count=count+1){
        var pro=productall[count].querySelector("p").textContent
        if(pro.toUpperCase().indexOf(entervalue) <0){
            productall[count].style.display="none"
        }
        else{
            productall[count].style.display="block"
        }
    }
})
var sidenav=document.querySelector(".side-navbar")

function shownav(){
    sidenav.style.left="0"
}
function closenav(){
    sidenav.style.left="-60%"
}