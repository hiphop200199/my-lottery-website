document.addEventListener("DOMContentLoaded",function(){
   let dissapointedSound=new Audio("./sadwhisle.mp3");
   let cheerSound=new Audio("./crowd-cheer.mp3"); 
   let container=document.querySelector(".lottery-container"); 
   let numbers=document.querySelectorAll(".lottery-panel-number");
   let buttonSelf=document.querySelector(".lottery-button-self");
   let buttonResult=document.querySelector(".lottery-button-result");
   let buttonPc=document.querySelector(".lottery-button-pc");
   let modal=document.querySelector(".lottery-modal");
   let modalTitle=document.querySelector(".lottery-modal-title");
   let buttonClose=document.querySelector(".lottery-modal-close");
    for(let i=0;i<numbers.length;i++){
        let textNode=document.createTextNode(`${i+1}`);
        numbers[i].appendChild(textNode);
    }
    let numberBox=[];
    
    buttonSelf.addEventListener("click",function(){
        function chooseNumber(){
            if(numberBox.includes(this.innerText)){
                modalTitle.innerText="不能重複選號!";
                modal.show();
                container.style.filter="grayscale(80%) blur(5px)";
            }else{
             this.style.backgroundImage="radial-gradient(circle at 1% 1%,rgb(255,255,220),rgb(255,255,6),rgb(150,150,3)";
            numberBox.push(Number.parseInt(this.innerText));
            }
            if(numberBox.length===6){
                modalTitle.innerText="已經選夠了!";
                modal.show();
                container.style.filter="grayscale(80%) blur(5px)";  
            }
        }
        modalTitle.innerText="耶!開始吧!!"; 
        modal.show();
        container.style.filter="grayscale(80%) blur(5px)";
        for(let i=0;i<numbers.length;i++){
            numbers[i].addEventListener("click",chooseNumber);
        }
        if(numberBox.length===6){
            for(let i=0;i<numbers.length;i++){
                numbers[i].removeEventListener("click",chooseNumber);
            }
        }
           
            
               
            
           
          
    });
   
     
     buttonClose.addEventListener("click",function(){
        modal.close();
        container.style.filter="blur(0) grayscale(0)";
    }); 
     buttonResult.addEventListener("click",function(){
        let pcNumberBox=[];
        let minValue = 1;//表示要抓取的數字範圍下限
        let maxValue = 49;//表示要抓取的數字範圍上限
        let needCounts = 6;//需要幾個數值
        let theSameNumbers=0;//幾個中獎的數字
        let theLuckyNumberBox=[];//中獎的號碼
        for (let i = 0; i < needCounts; i++) {
            let number =  Math.floor(Math.random() * maxValue) + minValue;
            let check = pcNumberBox.includes(number);//檢查暫存箱裡是否已經有一樣的數值
            if(check === false) {
                pcNumberBox.push(number);//如果數值沒有重複，就放入數值
            } else {
    //如果數值有重複，持續產生新的數值，直到數值沒有重複為止，才放入數值
                while(check === true){
                    number = Math.floor(Math.random() * maxValue) + minValue;
                    check = pcNumberBox.includes(number);
                    if(check === false){
                        pcNumberBox.push(number);
                    }
                }
            }
            
        }
        
        for(let i=0;i<needCounts;i++){
            if(pcNumberBox.includes(numberBox[i])){
                theSameNumbers++;
                theLuckyNumberBox.push(numberBox[i]);
            }
        };
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
        numberBox=[];
        numbers.forEach(function(item){
            item.style.backgroundImage="radial-gradient(circle at 1% 1%,rgb(255, 254, 243),rgb(255, 253,202),rgb(255, 255, 6)";
        });
     });

    buttonPc.addEventListener("click",function(){
        modal.show();
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
            
 
