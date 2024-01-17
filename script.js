let  circularProgress1 = document.querySelector(".circular-progress1"),
progressValue1 =document.querySelector(".progress-value1");
let progressStartValue1 =0,
progressEndValue1 =85,
speed1 =100;

let progress1 =setInterval(() => {
    progressStartValue1++;

    progressValue1.textContent =`${progressStartValue1}%`
    circularProgress1.style.background =`conic-gradient(rgb(251,228,129) ${progressStartValue1*3.6}deg,rgb(165, 164, 164) 0deg)`
    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }
    

},speed1);


let circularProgress2 = document.querySelector(".circular-progress2"),
progressValue2=document.querySelector(".progress-value2");
let progressStartValue2 =0,
progressEndValue2 =80,
speed2 =100;

let progress2 =setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent =`${progressStartValue2}%`
    circularProgress2.style.background =`conic-gradient(rgb(251,228,129) ${progressStartValue2*3.6}deg,rgb(165, 164, 164) 0deg)`
    if(progressStartValue2 == progressEndValue2){
        clearInterval(progress2);
    }
    

},speed2);
let  circularProgress3 = document.querySelector(".circular-progress3"),
progressValue3 =document.querySelector(".progress-value3");
let progressStartValue3 =0,
progressEndValue3 =70,
speed3 =100;

let progress3 =setInterval(() => {
    progressStartValue3++;

    progressValue3.textContent =`${progressStartValue3}%`
    circularProgress3.style.background =`conic-gradient(rgb(251,228,129) ${progressStartValue3*3.6}deg,rgb(165, 164, 164) 0deg)`
    if(progressStartValue3 == progressEndValue3){
        clearInterval(progress3);
    }
    

},speed3);
let  circularProgress4 = document.querySelector(".circular-progress4"),
progressValue4 =document.querySelector(".progress-value4");
let progressStartValue4 =0,
progressEndValue4 =55,
speed4 =100;

let progress4 =setInterval(() => {
    progressStartValue4++;

    progressValue4.textContent =`${progressStartValue4}%`
    circularProgress4.style.background =`conic-gradient(rgb(251,228,129) ${progressStartValue4*3.6}deg,rgb(165, 164, 164) 0deg)`
    if(progressStartValue4 == progressEndValue4){
        clearInterval(progress4);
    }
    

},speed4);