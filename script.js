function disBox(val)
{
    document.getElementById("result").value+=val
}

function clr()
{
  
   result.value = ""
}

function evaluateExpresstion()
         {
             
             let x = result.value
             let y = eval(x)
           
            result.value = y
         }

        function backspace(){
            let x = result.value.slice(0,-1)
            result.value= x
        }