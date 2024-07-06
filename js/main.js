const bar = document.querySelector(".bar");
const ulList = document.querySelector("ul");
const close = document.querySelector(".close")
const tabs = document.querySelectorAll(".content");
const arrowLeft =document.querySelector(".left")
const arrowRight =document.querySelector(".right")
const imgs = document.querySelectorAll(".img-hero")
let contentData = ["onetab","twotab","threetab"]
let index = 0
bar.addEventListener("click",()=>{
    ulList.classList.add("active")
})
close.addEventListener("click",()=>{
    ulList.classList.remove("active")
})
arrowRight.addEventListener("click",function(){
    
    removeClass()
    disactiveBtnRight()
    index++
    contentdisplay()
    console.log(index)
    arrowLeft.disabled = false;
    

})
arrowLeft.addEventListener("click",function(){
    
    removeClass()
    index--
    disactiveBtnLeft()
    contentdisplay()
    arrowRight.disabled = false
})
const disactiveBtnRight = function(){
    arrowRight.addEventListener("click",function(){
        if(index >= contentData.length-1){
            this.disabled = true
        }
    })
}
const disactiveBtnLeft = function(){
    arrowLeft.addEventListener("click",function(){
        if(index === 0){
            this.disabled = true
        }
    })
}
const removeClass = function(){
    tabs.forEach((tab)=>{
        tab.classList.remove("active");
    })
    imgs.forEach((img)=>{
        img.classList.remove("active")
    })
}
const contentdisplay = function(){
        document.querySelector(`.${contentData[index]}`).classList.add("active");
        document.querySelector(`.img-${index + 1}`).classList.add("active")
  

}

