document.addEventListener("DOMContentLoaded",function(){
   let dissapointedSound=new Audio("./sadwhisle.mp3");
   let cheerSound=new Audio("./crowd-cheer.mp3"); 
   let container=document.querySelector(".tech-container"); 
   let buttonPc=document.querySelector("#buttonPc");
   let modal=document.querySelector("dialog");
   let modalTitle=document.querySelector("#modal-title");
   let buttonClose=document.querySelector("#modal-close");
    

     buttonClose.addEventListener("click",function(){
        modal.close();
        container.style.filter="blur(0) grayscale(0)";
    }); 
    

    buttonPc.addEventListener("click",function(){
        modal.showModal();
        container.style.filter="grayscale(80%) blur(5px)";
        let choicesNumberBox=[];
        let checkNumberBox=[];
        let minValue = 1;
        let maxValue = 49;
        let needCounts = 6;
        let theSameNumbers=0;
        let theLuckyNumberBox=[];
        for (let i = 0; i < needCounts; i++) {
            let number =  Math.floor(Math.random() * maxValue) + minValue;
            let check = choicesNumberBox.includes(number);
            if(check === false) {
                choicesNumberBox.push(number);
            } else {
                while(check === true){
                    number = Math.floor(Math.random() * maxValue) + minValue;
                    check = choicesNumberBox.includes(number);
                    if(check === false){
                        choicesNumberBox.push(number);
                    }
                }
            }
        } 
        for (let i = 0; i < needCounts; i++) {
            let number =  Math.floor(Math.random() * maxValue) + minValue;
            let check = checkNumberBox.includes(number);
            if(check === false) {
                checkNumberBox.push(number);
            } else {
                while(check === true){
                    number = Math.floor(Math.random() * maxValue) + minValue;
                    check = checkNumberBox.includes(number);
                    if(check === false){
                        checkNumberBox.push(number);
                    }
                }
            }
        }
        for(let i=0;i<needCounts;i++){
            if(checkNumberBox.includes(choicesNumberBox[i])){
                theSameNumbers++;
                theLuckyNumberBox.push(choicesNumberBox[i]);
            }
        }
        switch (theSameNumbers){
            case 0:
                modalTitle.innerText="真可惜，祝您下次中獎!"; 
                modal.show();
               
                dissapointedSound.play();
               
                container.style.filter="grayscale(80%) blur(5px)";
            break;
            case 1:
                modalTitle.innerText=`您中了以下號碼:${[...theLuckyNumberBox] }您中了6獎，恭喜!`; 
                modal.show();
                
                cheerSound.play();
               
                container.style.filter="grayscale(80%) blur(5px)";
                
            break;
            case 2:
                modalTitle.innerText=`您中了以下號碼:${[...theLuckyNumberBox]}您中了5獎，恭喜!`; 
                modal.show();
               
                cheerSound.play();
               
                container.style.filter="grayscale(80%) blur(5px)";
               
            break;
            case 3:
                modalTitle.innerText=`您中了以下號碼:${[...theLuckyNumberBox]}您中了4獎，恭喜!`; 
                modal.show();
               
                cheerSound.play();
               
                container.style.filter="grayscale(80%) blur(5px)";
            break;
            case 4:
                modalTitle.innerText=`您中了以下號碼:${[...theLuckyNumberBox]}您中了3獎，恭喜!`; 
                modal.show();
               
                cheerSound.play();
               
                container.style.filter="grayscale(80%) blur(5px)";
                
            break;
            case 5:
                modalTitle.innerText=`您中了以下號碼:${[...theLuckyNumberBox]}您中了2獎，恭喜!`; 
                modal.show();
                cheerSound.play();
                container.style.filter="grayscale(80%) blur(5px)";
               
            break;
            case 6:
                modalTitle.innerText=`您中了以下號碼:${[...theLuckyNumberBox]}您中了1獎，恭喜!`; 
                modal.show();
                cheerSound.play();
                container.style.filter="grayscale(80%) blur(5px)";
               
            break;

        }
    }) ;
});
            
 
