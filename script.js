
document.addEventListener("DOMContentLoaded", () => {
    var w=window.outerWidth
    {
    let transis = document.getElementsByClassName("heading")[0];
    transis.style.left = "10%";}
}
)
document.addEventListener("DOMContentLoaded", () => {
    var w=window.outerWidth
   {
    let subheadtransis = document.getElementsByClassName("subheading")[0];
    subheadtransis.style.left = "10%"}
})

document.addEventListener("DOMContentLoaded",()=>{
    let e=document.getElementById("hamcontainer")
    let f=document.getElementById("ham")
    let g=document.getElementById("home")
    f.addEventListener("click",()=>{
        var w=window.outerWidth
        if(w<580){
            if(e.style.display=="none" || e.style.display==""){
                e.style.display = "flex"
            }
            else if(e.style.display=="flex"){
                e.style.display = "none"
            }        
        }
    })
})