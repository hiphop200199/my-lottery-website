$(function () {
   let dissapointedSound=new Audio("./sadwhisle-91469.mp3");
   let cheerSound=new Audio("./short-crowd-cheer-6713.mp3"); 
   let container=$(".lottery-container"); 
   let numbers=$(".lottery-panel-number");
   let buttonSelf=$(".lottery-button-self");
   let buttonResult=$(".lottery-button-result");
   let buttonPc=$(".lottery-button-pc");
   let modal=$(".lottery-modal");
   let modalTitle=$(".lottery-modal-title");
   let buttonClose=$(".lottery-modal-close");
    for(let i=0;i<numbers.length;i++){
        numbers[i].append(i+1);
    }
    let numberBox=[];
    
    buttonSelf.on("click",function(){
        modalTitle.text("耶!開始吧!!"); 
        modal.show(400);
        container.css("filter","grayscale(80%) blur(5px)");
        numbers.on("click",function(){    
                    if(numberBox.includes($(this).text())){
                        modalTitle.text("不能重複選號!");
                        modal.show(400);
                        container.css("filter","grayscale(80%) blur(5px)");
                    }else{
                     $(this).css("background-image","radial-gradient(circle at 1% 1%,rgb(255,255,220),rgb(255,255,6),rgb(150,150,3)");
                    numberBox.push(Number.parseInt($(this).text()));
                    }
                    if(numberBox.length===6){
                        modalTitle.text("已經選夠了!");
                        modal.show(400);
                        container.css("filter","grayscale(80%) blur(5px)");
                        numbers.off("click");  
                        $.each(numbers,function(){
                            numbers.css("background-image","radial-gradient(circle at 1% 1%,rgb(255, 254, 243),rgb(255, 253,202),rgb(255, 255, 6)");
                        });
                    }
        }); 
     });
     buttonClose.on("click",function(){
        modal.hide(400);
        container.css("filter","blur(0) grayscale(0)");
    }); 
     buttonResult.on("click",function(){
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
                modalTitle.text("真可惜，祝您下次中獎!"); 
                modal.show(400);
               
                dissapointedSound.play();
                
                container.css("filter","grayscale(80%) blur(5px)");
            break;
            case 1:
                modalTitle.text(`您中了以下號碼:${[...theLuckyNumberBox] }您中了6獎，恭喜!`); 
                modal.show(400);
                
                cheerSound.play();
                
                container.css("filter","grayscale(80%) blur(5px)");
                
            break;
            case 2:
                modalTitle.text(`您中了以下號碼:${[...theLuckyNumberBox]}您中了5獎，恭喜!`); 
                modal.show(400);
                
                cheerSound.play();
               
                container.css("filter","grayscale(80%) blur(5px)");
               
            break;
            case 3:
                modalTitle.text(`您中了以下號碼:${[...theLuckyNumberBox]}您中了4獎，恭喜!`); 
                modal.show(400);
               
                cheerSound.play();
                
                container.css("filter","grayscale(80%) blur(5px)");
            break;
            case 4:
                modalTitle.text(`您中了以下號碼:${[...theLuckyNumberBox]}您中了3獎，恭喜!`); 
                modal.show(400);
               
                cheerSound.play();
               
                container.css("filter","grayscale(80%) blur(5px)");
                
            break;
            case 5:
                modalTitle.text(`您中了以下號碼:${[...theLuckyNumberBox]}您中了2獎，恭喜!`); 
                modal.show(400);
               
                cheerSound.play();
               
                container.css("filter","grayscale(80%) blur(5px)");
               
            break;
            case 6:
                modalTitle.text(`您中了以下號碼:${[...theLuckyNumberBox]}您中了1獎，恭喜!`); 
                modal.show(400);
                
                cheerSound.play();
               
                container.css("filter","grayscale(80%) blur(5px)");
               
            break;

        }
        numberBox=[];
     });

    buttonPc.on("click",function(){
        modal.show(400);
        container.css("filter","grayscale(80%) blur(5px)");
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
                modalTitle.text("真可惜，祝您下次中獎!"); 
                modal.show(400);
               
                dissapointedSound.play();
               
                container.css("filter","grayscale(80%) blur(5px)");
            break;
            case 1:
                modalTitle.text(`您中了以下號碼:${[...theLuckyNumberBox] }您中了6獎，恭喜!`); 
                modal.show(400);
                
                cheerSound.play();
               
                container.css("filter","grayscale(80%) blur(5px)");
                
            break;
            case 2:
                modalTitle.text(`您中了以下號碼:${[...theLuckyNumberBox]}您中了5獎，恭喜!`); 
                modal.show(400);
               
                cheerSound.play();
               
                container.css("filter","grayscale(80%) blur(5px)");
               
            break;
            case 3:
                modalTitle.text(`您中了以下號碼:${[...theLuckyNumberBox]}您中了4獎，恭喜!`); 
                modal.show(400);
               
                cheerSound.play();
               
                container.css("filter","grayscale(80%) blur(5px)");
            break;
            case 4:
                modalTitle.text(`您中了以下號碼:${[...theLuckyNumberBox]}您中了3獎，恭喜!`); 
                modal.show(400);
               
                cheerSound.play();
               
                container.css("filter","grayscale(80%) blur(5px)");
                
            break;
            case 5:
                modalTitle.text(`您中了以下號碼:${[...theLuckyNumberBox]}您中了2獎，恭喜!`); 
                modal.show(400);
                cheerSound.play();
                container.css("filter","grayscale(80%) blur(5px)");
               
            break;
            case 6:
                modalTitle.text(`您中了以下號碼:${[...theLuckyNumberBox]}您中了1獎，恭喜!`); 
                modal.show(400);
                cheerSound.play();
                container.css("filter","grayscale(80%) blur(5px)");
               
            break;

        }
    }) ;
});
            
 
