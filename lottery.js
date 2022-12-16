$(function () {
   let num=$(".panel-number");
   let btnself=$(".button-self");
   let btnres=$(".button-result");
   let btnpc=$(".button-pc");
    for(let i=0;i<num.length;i++){
        num[i].append(i+1);
    }
    let numberBox=[];
    btnself.on("click",function(){
        alert("Let`s go!");
        num.on("click",function(){    
                    if(numberBox.includes($(this).text())){
                        alert("不能重複選號!");
                    }else{
                     $(this).css("background-image","radial-gradient(circle at 1% 1%,rgb(255,255,220),rgb(255,255,6),rgb(150,150,3)");
                    numberBox.push(Number.parseInt($(this).text()));
                    }
                    if(numberBox.length===6){
                        alert("已經選夠了!");
                        num.off("click");  
                    }
        });
       
        
        
     });  
     btnres.on("click",function(){
        let pcNumberBox=[];
        let minValue = 1;//表示要抓取的數字範圍下限
        let maxValue = 49;//表示要抓取的數字範圍上限
        let needCounts = 6;//需要幾個數值
        let theSameNumbers=0;//幾個中獎的數字
        let theLuckyNumberBox=[];//中獎的號碼
        console.log([...numberBox])
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
        console.log([...pcNumberBox])
        for(let i=0;i<needCounts;i++){
            if(pcNumberBox.includes(numberBox[i])){
                theSameNumbers++;
                theLuckyNumberBox.push(numberBox[i]);
            }
        };
        console.log([...theLuckyNumberBox]);
        switch (theSameNumbers){
            case 0:
            alert("真可惜，祝您下次中獎");
            break;
            case 1:
            alert(`您中了以下號碼:${[...theLuckyNumberBox] }您中了6獎，恭喜!`);
            break;
            case 2:
                alert(`您中了以下號碼:${[...theLuckyNumberBox]}您中了5獎，恭喜!`);
            break;
            case 3:
                alert(`您中了以下號碼:${[...theLuckyNumberBox]}您中了4獎，恭喜!`);
            break;
            case 4:
                alert(`您中了以下號碼:${[...theLuckyNumberBox]}您中了3獎，恭喜!`);
            break;
            case 5:
                alert(`您中了以下號碼:${[...theLuckyNumberBox]}您中了2獎，恭喜!`);
            break;
            case 6:
                alert(`您中了以下號碼:${[...theLuckyNumberBox]}您中了1獎，恭喜!`);
            break;

        }
     });

    btnpc.on("click",function(){
        alert("let`s go!");
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
            alert("真可惜，祝您下次中獎");
            break;
            case 1:
            alert(`您中了以下號碼:${[...theLuckyNumberBox] }您中了6獎，恭喜!`);
            break;
            case 2:
                alert(`您中了以下號碼:${[...theLuckyNumberBox]}您中了5獎，恭喜!`);
            break;
            case 3:
                alert(`您中了以下號碼:${[...theLuckyNumberBox]}您中了4獎，恭喜!`);
            break;
            case 4:
                alert(`您中了以下號碼:${[...theLuckyNumberBox]}您中了3獎，恭喜!`);
            break;
            case 5:
                alert(`您中了以下號碼:${[...theLuckyNumberBox]}您中了2獎，恭喜!`);
            break;
            case 6:
                alert(`您中了以下號碼:${[...theLuckyNumberBox]}您中了1獎，恭喜!`);
            break;

        }
    }) ;
});
            
 
