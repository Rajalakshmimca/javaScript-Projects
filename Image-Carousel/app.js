let slidePosition=0;
const sliders=document.querySelectorAll(".slider-items");
const totalSlider=sliders.length;
console.log(totalSlider);
const btnPrev=document.querySelector("#btn-prev");
const btnNext=document.querySelector("#btn-next");
console.log(btnPrev);   

btnPrev.addEventListener('click', function(){
    PrevSlide();
});
btnNext.addEventListener("click", function(){
    NextSlide();
})
function UpdatePosition(){
    sliders.forEach(slide=>{
        slide.classList.remove("active");
        slide.classList.add("hidden");
    });
    sliders[slidePosition].classList.add("active");
    console.log(sliders[slidePosition]);
}
function PrevSlide(){
    if(slidePosition==0){
        slidePosition=totalSlider-1;
    }else{
        slidePosition--;
    }
    UpdatePosition();

}
function NextSlide() {
    if (slidePosition == totalSlider-1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    UpdatePosition();
}