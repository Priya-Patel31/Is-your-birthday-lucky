var birth_date = document.querySelector(".birth-day");
var lucky_no = document.querySelector(".lucky-no");
var form = document.querySelector(".form");
var output = document.querySelector("#output-box");
var btn = document.querySelector(".notice-btn");
var box = document.querySelector(".notice");

btn.addEventListener("click",() =>{
    box.style.display ="none";

});



form.addEventListener("submit" , event => {
       event.preventDefault();
       var dob = birth_date.value;
       var lucky = lucky_no.value;

       var SumOfDigits = birthdaySum(dob,lucky);
       if(SumOfDigits&&dob){
         Compare(SumOfDigits,lucky);
       }else{
           output.innerText ="Please enter both the fields";
       }
});

    function birthdaySum(dob ,lucky)
    {
        var sum = 0 ;
        var number = dob.replaceAll("-","");
      
           for(let i = 0 ; i <number.length; i++)
            {
               sum = sum + Number(number.charAt(i));
            }
           return sum;
    }
    function Compare(sum ,lucky)
    {

        var mod = parseInt(sum % lucky);
    
        if( mod === 0 )
        {
            output.innerText = "Your birthday is lucky😍😍";
        }
        else
        {
            output.innerText = "Your birthday is not lucky😓😓"
        }
    }


