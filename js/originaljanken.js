


var kaiju=5
var yusha=5


document.getElementById("more-toggle").onclick = function() {

     document.getElementById('btn_audioKS').play();
}





// if(kaiju!==0 || yusha!==0)
// {

// console.log(random,"ランダムな数字の箱")
document.getElementById("at_btn").onclick = function() {
    var random = Math.floor(Math.random()*3);
    console.log(random,"random値")
    $("h4").html("勇者は攻撃を繰り出した！").css("color","red")
    document.getElementById('btn_audioAT').play();
    if(random===0){
        console.log("攻撃")
            $("h3").html("魔王は攻撃を繰り出した！").css("color","red")
            if(kaiju===5){
                    console.log("5")
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","green")
                    $("#kaiju_hp_3").css("background-color","green")
                    $("#kaiju_hp_4").css("background-color","green")
                    $("#kaiju_hp_5").css("background-color","green")
                    kaiju= kaiju-1;
                    console.log(kaiju,"怪獣のHP" )
            }
            else if(kaiju===4){
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","white")
                    $("#kaiju_hp_3").css("background-color","green")
                    $("#kaiju_hp_4").css("background-color","green")
                    $("#kaiju_hp_5").css("background-color","green")
                    kaiju= kaiju-1;
                    console.log(kaiju,"怪獣のHP" )
            }
            else if(kaiju===3){
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","white")
                    $("#kaiju_hp_3").css("background-color","white")
                    $("#kaiju_hp_4").css("background-color","red")
                    $("#kaiju_hp_5").css("background-color","red")
                    kaiju= kaiju-1;
                    console.log(kaiju,"怪獣のHP" )
            }
            else if(kaiju===2){
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","white")
                    $("#kaiju_hp_3").css("background-color","white")
                    $("#kaiju_hp_4").css("background-color","white")
                    $("#kaiju_hp_5").css("background-color","red")
                    kaiju= kaiju-1;
                    console.log(kaiju,"怪獣のHP" )
            }
            else if(kaiju===1){
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","white")
                    $("#kaiju_hp_3").css("background-color","white")
                    $("#kaiju_hp_4").css("background-color","white")
                    $("#kaiju_hp_5").css("background-color","white")
                    window.alert("You Win!!!もう一度遊ぶ？");
                    location.reload()
            }
            
            if(yusha===5){
                console.log("5")
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","green")
                $("#Yusha_hp_3").css("background-color","green")
                $("#Yusha_hp_4").css("background-color","green")
                $("#Yusha_hp_5").css("background-color","green")
                yusha= yusha-1;
                console.log(yusha,"勇者のHP" )
            }
            else if(yusha===4){
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","white")
                $("#Yusha_hp_3").css("background-color","green")
                $("#Yusha_hp_4").css("background-color","green")
                $("#Yusha_hp_5").css("background-color","green")
                yusha= yusha-1;
                console.log(yusha,"勇者のHP" )
            }
            else if(yusha===3){
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","white")
                $("#Yusha_hp_3").css("background-color","white")
                $("#Yusha_hp_4").css("background-color","red")
                $("#Yusha_hp_5").css("background-color","red")
                yusha= yusha-1;
                console.log(yusha,"勇者のHP" )
            }
            else if(yusha===2){
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","white")
                $("#Yusha_hp_3").css("background-color","white")
                $("#Yusha_hp_4").css("background-color","white")
                $("#Yusha_hp_5").css("background-color","red")
                yusha= yusha-1;
                console.log(yusha,"勇者のHP" )
            }
            else if(yusha===1){
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","white")
                $("#Yusha_hp_3").css("background-color","white")
                $("#Yusha_hp_4").css("background-color","white")
                $("#Yusha_hp_5").css("background-color","white")

                window.alert("You lose!!!もう一度遊ぶ？");
                location.reload()
            }

    }else if(random==1){

        console.log("防御")
        $("h3").html("魔王は防御した！").css("color","gray")
        if(kaiju===5){
                console.log("5")
                $("#kaiju_hp_1").css("background-color","green")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===4){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
               
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===3){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
             
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===2){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","white")
                $("#kaiju_hp_4").css("background-color","red")
                $("#kaiju_hp_5").css("background-color","red")
           
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===1){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","white")
                $("#kaiju_hp_4").css("background-color","white")
                $("#kaiju_hp_5").css("background-color","red")
                // window.alert("You Win!!!");
        }
        
        if(yusha===5){
            console.log("5")
            $("#Yusha_hp_1").css("background-color","green")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
  
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===4){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")

            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===3){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")

            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===2){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","white")
            $("#Yusha_hp_4").css("background-color","red")
            $("#Yusha_hp_5").css("background-color","red")
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===1){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","white")
            $("#Yusha_hp_4").css("background-color","white")
            $("#Yusha_hp_5").css("background-color","red")
            // window.alert("You lose!!!");
        }
 
    }else if(random==2){

        console.log("回復")
        $("h3").html("魔王は回復した！").css("color","white")
        if(kaiju===5){
                console.log("5")
                $("#kaiju_hp_1").css("background-color","green")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===4){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
       
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===3){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
       
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===2){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","white")
                $("#kaiju_hp_4").css("background-color","red")
                $("#kaiju_hp_5").css("background-color","red")
         
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===1){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","white")
                $("#kaiju_hp_4").css("background-color","white")
                $("#kaiju_hp_5").css("background-color","red")
           
                // window.alert("You Win!!!");
        }
        
        if(yusha===5){
            console.log("5")
            $("#Yusha_hp_1").css("background-color","green")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
  
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===4){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
   
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===3){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
      
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===2){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","white")
            $("#Yusha_hp_4").css("background-color","red")
            $("#Yusha_hp_5").css("background-color","red")
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===1){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","white")
            $("#Yusha_hp_4").css("background-color","white")
            $("#Yusha_hp_5").css("background-color","red")
            // window.alert("You lose!!!");
        }

    }
        // ここに#buttonをクリックしたら発生させる処理を記述する
  };

 
  // console.log(random,"ランダムな数字の箱")
document.getElementById("df_btn").onclick = function() {
    var random = Math.floor(Math.random()*3);
    console.log(random,"random値")
    $("h4").html("勇者は防御した！").css("color","gray")
    document.getElementById('btn_audioPR').play();
    if(random===0){
        console.log("攻撃")
            $("h3").html("魔王は攻撃を繰り出した！").css("color","red")
            if(kaiju===5){
                    console.log("5")
                    $("#kaiju_hp_1").css("background-color","green")
                    $("#kaiju_hp_2").css("background-color","green")
                    $("#kaiju_hp_3").css("background-color","green")
                    $("#kaiju_hp_4").css("background-color","green")
                    $("#kaiju_hp_5").css("background-color","green")
            
                    console.log(kaiju,"怪獣のHP" )
            }
            else if(kaiju===4){
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","green")
                    $("#kaiju_hp_3").css("background-color","green")
                    $("#kaiju_hp_4").css("background-color","green")
                    $("#kaiju_hp_5").css("background-color","green")
                  
                    console.log(kaiju,"怪獣のHP" )
            }
            else if(kaiju===3){
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","white")
                    $("#kaiju_hp_3").css("background-color","green")
                    $("#kaiju_hp_4").css("background-color","green")
                    $("#kaiju_hp_5").css("background-color","green")
                 
                    console.log(kaiju,"怪獣のHP" )
            }
            else if(kaiju===2){
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","white")
                    $("#kaiju_hp_3").css("background-color","white")
                    $("#kaiju_hp_4").css("background-color","red")
                    $("#kaiju_hp_5").css("background-color","red")
                 
                    console.log(kaiju,"怪獣のHP" )
            }
            else if(kaiju===1){
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","white")
                    $("#kaiju_hp_3").css("background-color","white")
                    $("#kaiju_hp_4").css("background-color","white")
                    $("#kaiju_hp_5").css("background-color","red")
                  
            }
            
            if(yusha===5){
                console.log("5")
                $("#Yusha_hp_1").css("background-color","green")
                $("#Yusha_hp_2").css("background-color","green")
                $("#Yusha_hp_3").css("background-color","green")
                $("#Yusha_hp_4").css("background-color","green")
                $("#Yusha_hp_5").css("background-color","green")
        
                console.log(yusha,"勇者のHP" )
            }
            else if(yusha===4){
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","green")
                $("#Yusha_hp_3").css("background-color","green")
                $("#Yusha_hp_4").css("background-color","green")
                $("#Yusha_hp_5").css("background-color","green")
         
                console.log(yusha,"勇者のHP" )
            }
            else if(yusha===3){
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","white")
                $("#Yusha_hp_3").css("background-color","green")
                $("#Yusha_hp_4").css("background-color","green")
                $("#Yusha_hp_5").css("background-color","green")
            
                console.log(yusha,"勇者のHP" )
            }
            else if(yusha===2){
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","white")
                $("#Yusha_hp_3").css("background-color","white")
                $("#Yusha_hp_4").css("background-color","red")
                $("#Yusha_hp_5").css("background-color","red")
       
                console.log(yusha,"勇者のHP" )
            }
            else if(yusha===1){
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","white")
                $("#Yusha_hp_3").css("background-color","white")
                $("#Yusha_hp_4").css("background-color","white")
                $("#Yusha_hp_5").css("background-color","red")
                // window.alert("You lose!!!");
            }

    }else if(random==1){

        console.log("防御")
        $("h3").html("魔王は防御した！").css("color","gray")
        if(kaiju===5){
                console.log("5")
                $("#kaiju_hp_1").css("background-color","green")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===4){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
               
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===3){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
             
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===2){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","white")
                $("#kaiju_hp_4").css("background-color","red")
                $("#kaiju_hp_5").css("background-color","red")
           
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===1){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","white")
                $("#kaiju_hp_4").css("background-color","white")
                $("#kaiju_hp_5").css("background-color","red")
                // window.alert("You Win!!!");
        }
        
        if(yusha===5){
            console.log("5")
            $("#Yusha_hp_1").css("background-color","green")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
           
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===4){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
        
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===3){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
           
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===2){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","white")
            $("#Yusha_hp_4").css("background-color","red")
            $("#Yusha_hp_5").css("background-color","red")
         
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===1){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","white")
            $("#Yusha_hp_4").css("background-color","white")
            $("#Yusha_hp_5").css("background-color","red")
            // window.alert("You lose!!!");
        }
 
    }else if(random==2){

        console.log("回復")
        $("h3").html("魔王は回復した！").css("color","white")
        if(kaiju===5){
                console.log("5")
                $("#kaiju_hp_1").css("background-color","green")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")

                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===4){
                $("#kaiju_hp_1").css("background-color","green")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
                kaiju=kaiju+1;
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===3){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
                kaiju=kaiju+1;
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===2){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
                kaiju=kaiju+1;
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===1){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","white")
                $("#kaiju_hp_4").css("background-color","red")
                $("#kaiju_hp_5").css("background-color","red")
                kaiju=kaiju+1;
                // window.alert("You Win!!!");
        }
        
        if(yusha===5){
            console.log("5")
            $("#Yusha_hp_1").css("background-color","green")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
       
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===4){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
      
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===3){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
    
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===2){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","white")
            $("#Yusha_hp_4").css("background-color","red")
            $("#Yusha_hp_5").css("background-color","red")
     
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===1){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","white")
            $("#Yusha_hp_4").css("background-color","white")
            $("#Yusha_hp_5").css("background-color","red")
            // window.alert("You lose!!!");
        }

    }
        // ここに#buttonをクリックしたら発生させる処理を記述する
  };


    // console.log(random,"ランダムな数字の箱")
document.getElementById("cr_btn").onclick = function() {
    var random = Math.floor(Math.random()*3);
    console.log(random,"random値")
    $("h4").html("勇者は回復した！").css("color","white")
    document.getElementById('btn_audioCR').play();
    if(random===0){
        console.log("攻撃")
            $("h3").html("魔王は攻撃を繰り出した！").css("color","red")
            if(kaiju===5){
                    console.log("5")
                    $("#kaiju_hp_1").css("background-color","green")
                    $("#kaiju_hp_2").css("background-color","green")
                    $("#kaiju_hp_3").css("background-color","green")
                    $("#kaiju_hp_4").css("background-color","green")
                    $("#kaiju_hp_5").css("background-color","green")
            
                    console.log(kaiju,"怪獣のHP" )
            }
            else if(kaiju===4){
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","green")
                    $("#kaiju_hp_3").css("background-color","green")
                    $("#kaiju_hp_4").css("background-color","green")
                    $("#kaiju_hp_5").css("background-color","green")
                  
                    console.log(kaiju,"怪獣のHP" )
            }
            else if(kaiju===3){
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","white")
                    $("#kaiju_hp_3").css("background-color","green")
                    $("#kaiju_hp_4").css("background-color","green")
                    $("#kaiju_hp_5").css("background-color","green")
                 
                    console.log(kaiju,"怪獣のHP" )
            }
            else if(kaiju===2){
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","white")
                    $("#kaiju_hp_3").css("background-color","white")
                    $("#kaiju_hp_4").css("background-color","red")
                    $("#kaiju_hp_5").css("background-color","red")
                 
                    console.log(kaiju,"怪獣のHP" )
            }
            else if(kaiju===1){
                    $("#kaiju_hp_1").css("background-color","white")
                    $("#kaiju_hp_2").css("background-color","white")
                    $("#kaiju_hp_3").css("background-color","white")
                    $("#kaiju_hp_4").css("background-color","white")
                    $("#kaiju_hp_5").css("background-color","red")
                  
            }
            
            if(yusha===5){
                console.log("5")
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","green")
                $("#Yusha_hp_3").css("background-color","green")
                $("#Yusha_hp_4").css("background-color","green")
                $("#Yusha_hp_5").css("background-color","green")
                
                console.log(yusha,"勇者のHP" )
            }
            else if(yusha===4){
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","green")
                $("#Yusha_hp_3").css("background-color","green")
                $("#Yusha_hp_4").css("background-color","green")
                $("#Yusha_hp_5").css("background-color","green")
        
                console.log(yusha,"勇者のHP" )
            }
            else if(yusha===3){
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","white")
                $("#Yusha_hp_3").css("background-color","green")
                $("#Yusha_hp_4").css("background-color","green")
                $("#Yusha_hp_5").css("background-color","green")
        
                console.log(yusha,"勇者のHP" )
            }
            else if(yusha===2){
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","white")
                $("#Yusha_hp_3").css("background-color","white")
                $("#Yusha_hp_4").css("background-color","red")
                $("#Yusha_hp_5").css("background-color","red")
          
                console.log(yusha,"勇者のHP" )
            }
            else if(yusha===1){
                $("#Yusha_hp_1").css("background-color","white")
                $("#Yusha_hp_2").css("background-color","white")
                $("#Yusha_hp_3").css("background-color","white")
                $("#Yusha_hp_4").css("background-color","white")
                $("#Yusha_hp_5").css("background-color","red")

            }

    }else if(random==1){

        console.log("防御")
        $("h3").html("魔王は防御した！").css("color","gray")
        if(kaiju===5){
                console.log("5")
                $("#kaiju_hp_1").css("background-color","green")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===4){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
               
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===3){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
             
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===2){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","white")
                $("#kaiju_hp_4").css("background-color","red")
                $("#kaiju_hp_5").css("background-color","red")
           
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===1){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","white")
                $("#kaiju_hp_4").css("background-color","white")
                $("#kaiju_hp_5").css("background-color","red")
                // window.alert("You Win!!!");
        }
        
        if(yusha===5){
            console.log("5")
            $("#Yusha_hp_1").css("background-color","green")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
           
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===4){
            $("#Yusha_hp_1").css("background-color","green")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
            yusha=yusha+1;
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===3){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
            yusha=yusha+1;
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===2){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
            yusha=yusha+1;
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===1){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","white")
            $("#Yusha_hp_4").css("background-color","red")
            $("#Yusha_hp_5").css("background-color","red")
            yusha=yusha+1;
            // window.alert("You lose!!!");
        }
 
    }else if(random==2){

        console.log("回復")
        $("h3").html("魔王は回復した！").css("color","white")
        if(kaiju===5){
                console.log("5")
                $("#kaiju_hp_1").css("background-color","green")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
                
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===4){
                $("#kaiju_hp_1").css("background-color","green")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
                kaiju=kaiju+1;
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===3){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","green")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
                kaiju=kaiju+1;
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===2){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","green")
                $("#kaiju_hp_4").css("background-color","green")
                $("#kaiju_hp_5").css("background-color","green")
                kaiju=kaiju+1;
                console.log(kaiju,"怪獣のHP" )
        }
        else if(kaiju===1){
                $("#kaiju_hp_1").css("background-color","white")
                $("#kaiju_hp_2").css("background-color","white")
                $("#kaiju_hp_3").css("background-color","white")
                $("#kaiju_hp_4").css("background-color","red")
                $("#kaiju_hp_5").css("background-color","red")
                kaiju=kaiju+1;
                // window.alert("You Win!!!");
        }
        
        if(yusha===5){
            console.log("5")
            $("#Yusha_hp_1").css("background-color","green")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
       
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===4){
            $("#Yusha_hp_1").css("background-color","green")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
            yusha=yusha+1;
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===3){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","green")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
            yusha=yusha+1;
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===2){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","green")
            $("#Yusha_hp_4").css("background-color","green")
            $("#Yusha_hp_5").css("background-color","green")
            yusha=yusha+1;
            console.log(yusha,"勇者のHP" )
        }
        else if(yusha===1){
            $("#Yusha_hp_1").css("background-color","white")
            $("#Yusha_hp_2").css("background-color","white")
            $("#Yusha_hp_3").css("background-color","white")
            $("#Yusha_hp_4").css("background-color","red")
            $("#Yusha_hp_5").css("background-color","red")
            yusha=yusha+1;
            // window.alert("You lose!!!");
        }

    }
        // ここに#buttonをクリックしたら発生させる処理を記述する
  };