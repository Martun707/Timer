let playButton=document.querySelector('.play')
let pauseButton=document.querySelector('.pause')
let resetButton=document.querySelector('.reset')
let second=document.querySelector('.sec')
let tu=document.querySelector('.tu')
let twooo=document.querySelector('.twooo')
let twoXX=document.querySelector('.twoXX')
let OneXX=document.querySelector('.OneXX')
let outer_circle=document.querySelector('.outer-circle')
let i=0
let x=null


function pause() {
    clearInterval(x)
    
    playButton.style.display='block'
    pauseButton.style.display='none'
    tu.style.display='none'
    twooo.style.display='none'
    twoXX.style.display='none'
    OneXX.style.display='none'
    outer_circle.classList.remove('animation-bg')
}


function play(){   
    pauseButton.style.display='block'
    playButton.style.display='none'
    resetButton.style.display='block'
    tu.style.display='block'
    twoXX.style.display='block'
    second.innerHTML=i
    outer_circle.classList.add('animation-bg')
    if(x){
        clearInterval(x)
        
    }
    x=setInterval(function(){      
        second.innerHTML=i+1        
        i++

    },1000)
}
function reset(){
    pause()
    i = 0 
    second.innerHTML=i
    resetButton.style.display='none'

}

function One(){ 
    tu.style.display='none'
    twooo.style.display='block'  

        if(x){
        clearInterval(x)
        
    }
    x=setInterval(function(){  
              
        second.innerHTML=++i+1  
       
        i++
    },1000)

    twoXX.addEventListener('click',function(){
        twoXX.style.display='none'
        OneXX.style.display='block'


            if(x){
        clearInterval(x)        
    }
    x=setInterval(function(){      
        second.innerHTML=++i+1        
        i++

    },350)
    })
    OneXX.addEventListener('click',function(){
        One()
        twoXX.style.display='block'
        OneXX.style.display='none'
    })
    
}

function two(){
    play()
    twoXX.addEventListener('click',function(){
        twoXX.style.display='none'
        OneXX.style.display='block'
            if(x){
        clearInterval(x)        
    }
    x=setInterval(function(){      
        second.innerHTML=i+1        
        i++

    },350)
    })
    OneXX.addEventListener('click',function(){
        two()
        twoXX.style.display='block'
        OneXX.style.display='none'
        tu.style.display='block'
        twooo.style.display='none'
    })
}

twooo.addEventListener('click',function(){
    twoXX.style.display='block'
    OneXX.style.display='none'
    tu.style.display='block'
    twooo.style.display='none'
})

tu.addEventListener('click',function(){
    tu.style.display='none'
    twooo.style.display='block'
    twoXX.style.display='block'
    OneXX.style.display='none'
})

function twoX(){
    twoXX.style.display='none'
    OneXX.style.display='block'
    if(x){
        clearInterval(x)
        
    }
    x=setInterval(function(){      
        second.innerHTML=i+1        
        i++

    },100)
}

function OneX(){
    twoXX.style.display='block'
    OneXX.style.display='none'
    if(x){
        clearInterval(x)        
    }
    x=setInterval(function(){      
        second.innerHTML=i+1        
        i++

    },1000)
}






