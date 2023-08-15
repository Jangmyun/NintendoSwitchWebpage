var kbImgs = document.querySelectorAll(".kb div");
var i = 1;

console.log(kbImgs);

Array.prototype.forEach.call(kbImgs, function(kbImg){
    setTimeout(function(){ kbImg.classList.add("visible")} , 300*i);
    if(i >= 7 ){
        i += 2;
    } else {
        i++;
    }
    
})