var sliders = document.querySelectorAll('.slider')
console.log(sliders)
var index = 1
setInterval((e)=>{
    if (index == 0){
        sliders[sliders.length - 1].style.display = 'none'
    }
    else{
        sliders[index - 1].style.display = 'none'
    }
    sliders[index].style.display = 'block'
    index++
    if (index == (sliders.length)){
        index = 0
    }
}, 3000)