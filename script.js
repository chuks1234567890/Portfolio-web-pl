// render boxex
const container=document.querySelector(".container")
const palattes=document.querySelectorAll(".color-palette .patettes")
palattes[0].addEventListener("click",()=>{
    document.body.classList.add("light")
})
palattes[1].addEventListener("click",()=>{
    document.body.classList.remove("light")
})
for (let i=1;i<136;i++){
    container.innerHTML+=`<div class="wrapper">${[i]}</div>`
}
document.querySelectorAll(".wrapper").forEach(item=>item.innerHTML="")
const cursor=document.querySelector(".cursor")
const loader=document.querySelector(".loader-board")
document.addEventListener("mousemove",e=> cursor.style.transform=`translate(${e.clientX ? e.clientX :50}px ,${e.clientY ? e.clientY :50}px)`)
const tab=document.querySelector(".dashboard-tab")
const dashboard=document.querySelector(".dashboard")
tab.addEventListener("click",(e)=>{
    dashboard.classList.toggle("view")
})
setTimeout(()=>{
    loader.classList.add("hidden")
},4000)
const hireme=document.querySelector(".hire-me")
hireme.addEventListener("click",(e)=>{
    document.querySelector(".hire-me-section").classList.add("clip")
    document.querySelector(".hire-me-section").addEventListener("click",(e)=>{
        e.target.classList.remove("clip")
    })
})
const value=[1,3,5,7,2,2,3,5,3,0]
const result=value.map(item =>item===3 ? item+"x" :item)
let ity
let children
let items
const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5);
}; 
let x,y
let sh
let emptyIndex
let ss
function getIndex(params) {
    emptyIndex=params
}
const arry=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
const inter=setInterval(()=>{
    ss=shuffle(arry)
    items=document.querySelectorAll(".game ul li")
    items.forEach((item,index)=>{
        item.innerHTML=ss[index]
        if (item.innerText==16){
            item.classList.add("empty")
            item.innerText=""
            getIndex(index)
        } else{
            item.classList.remove("empty")
             
        }
    })
    children=document.querySelector("ul").children
},100)

let TXP=`translateX(75px)`,
    TXN=`translateX(-75px)`,
    TYP=`translateY(75px)`
    TYN=`translateY(-75px)`
function isInTheSameHorizontalLineWithEMpty(index){
    if (emptyIndex<=3 && index<=3 && emptyIndex>=0 && index >=0){
        return true
    }else if(emptyIndex<=7 && index<=7 && emptyIndex>=4 && index>=4){
        return true
    }else if(emptyIndex<=11 && index<=11  && emptyIndex>=8 && index>=8){
        return true
    }else if(emptyIndex<=15 && index<=15  && emptyIndex>=12 && index>=12){
        return true
    }else{
        return false
    }
}
function isTheNextELementToEmpty(index) {
    if (index===emptyIndex+1 && isInTheSameHorizontalLineWithEMpty(index)){
        return true
    }else {
        return false
    }
}
function isThePreviousELementToEmpty(index) {
    if (index===emptyIndex-1 && isInTheSameHorizontalLineWithEMpty(index)){
        return true
    }else {
        return false
    }
}
function pushItemFowardInTheArray(index) {
    const store=children[index +1]
    children[index +1]=children[index]
}
setTimeout(()=>{
    clearInterval(inter)
    items.forEach((item,index)=>{
        item.addEventListener("click",()=>{
           if (isInTheSameHorizontalLineWithEMpty(index) && isTheNextELementToEmpty(index)){
                
           } else if(isInTheSameHorizontalLineWithEMpty(index) && isThePreviousELementToEmpty(index)){
                pushItemFowardInTheArray(index)
           } else{
                console.log("false")
           }
          
        })
        
    })
},4000)