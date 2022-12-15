$(function () {
   let num=$(".panel-number");
   let btn=$(".button");

    for(let i=0;i<num.length;i++){
        num[i].append(i+1);
    }
    
    btn.on("click",function(){
        alert("Let`s go!");
        let numberBox=[];
        let pcNumberBox=[];
        let minValue = 1;//表示要抓取的數字範圍下限
        let maxValue = 90;//表示要抓取的數字範圍上限
        let needCounts = 6;//需要幾個數值
            num.on("click",function(){    
                    if(numberBox.includes($(this).text())){
                        alert("不能重複選號!");
                    }else{
                     $(this).css("background-image","radial-gradient(circle at 1% 1%,rgb(255,255,220),rgb(255,255,6),rgb(150,150,3)");
                    numberBox.push($(this).text());
                    }
                    if(numberBox.length===6){
                        alert("已經選夠了!");
                        num.off("click");
                    }
                });
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
     });  
});
            
 
