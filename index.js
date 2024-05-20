const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const textEl = document.getElementById("text")
let answer = Math.floor(Math.random()*50)+1;
let value;
let attempt=0;
let running = true;

    submitBtn.addEventListener("click",()=>{
        value = Number(answerInput.value);
        console.log(value<answer)
        attempt++;
        if(running){
        if(value<1 || value>50 || isNaN(value)){
            textEl.textContent="Enter valid number"
        }else{
            if(value>answer){
                textEl.textContent=`Try lowering!`
        }else if(value<answer){
                textEl.textContent=`Try increasing!`
            }else{
                running=false
                textEl.textContent=`Woah! You got it right, it took you ${attempt} attempts.`
            }
        }
    }
    })

