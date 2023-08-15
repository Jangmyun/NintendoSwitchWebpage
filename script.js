var kbImgs = document.querySelectorAll(".kb div");
var i = 1;

console.log(kbImgs);


// 페이지 로딩 완료시 순차적으로 별의 커비 이미지가 보이도록 함
Array.prototype.forEach.call(kbImgs, function(kbImg){
    setTimeout(function(){ kbImg.classList.add("visible")} , 300*i);
    if(i >= 7 ){        //7번째 사진 (별의커비 로고)부터 다른 사진이 뜨는 속도의 2배 느리게 보이도록 함
        i += 2;
    } else {
        i++;
    }
})