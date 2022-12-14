$(function () {
   let num=$(".panel-number");
  let btnSelf=$(".button.btn-self");

    for(let i=0;i<num.length;i++){
        num[i].append(i+1);
    }
    
    btnSelf.on("click",function(){
        alert("Let`s go!");
        let numberBox=[];
            num.on("click",function(){    
                    if(numberBox.includes($(this).text())){
                        alert("不能重複選號!");
                    }else{
                     $(this).css("background-image","radial-gradient(circle at 1% 1%,rgb(255,255,220),rgb(255,255,6),rgb(150,150,3)");
                    numberBox.push($(this).text());
                    console.log(numberBox);
                    }
                    if(numberBox.length===6){
                        alert("已經選夠了!");
                        num.off("click");
                    }
                });
            });  
           
        });
            
 
