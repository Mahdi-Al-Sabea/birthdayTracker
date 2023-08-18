
let submit=document.querySelector('.submit');
let userDate=document.querySelector('.user-date');
let timeLeft=document.querySelector('.TimeLeft');
let currentDate;
let BirthDay;

submit.addEventListener('click',(e)=>{

    currentDate=new Date();
    BirthDay=new Date(userDate.value);

    if(userDate.value===''){
        timeLeft.style.display="none";
        alert('error you must enter a date first');
    }
    else if(BirthDay<currentDate){
        timeLeft.style.display="none";
        alert('error your date must be after the current day');
    }
    else{

    timeLeft.style.display="block";
    setInterval(TimeRemaining,1000);}

});



function TimeRemaining(){


    currentDate=new Date();

    let remainingTimeMilli=BirthDay-currentDate;//result is in milliseconds
    let remainingTimeSeconds=Math.floor((BirthDay-currentDate)/1000);
    let remainingTimeMinutes=Math.floor((BirthDay-currentDate)/(1000*60));
    let remainingTimeHours=Math.floor((BirthDay-currentDate)/(1000*60*60));
    let remainingTimeDays=Math.floor((BirthDay-currentDate)/(1000*60*60*24));
    let remainingTimeMonth=getRemainingMonths(BirthDay,currentDate);



    timeLeft.innerText=`months left:${remainingTimeMonth}//remaining days left:${remainingTimeDays}//remaining hours left:${remainingTimeHours}//remaining minutes left:${remainingTimeMinutes}//remaining seconds left:${remainingTimeSeconds}`;




    function getRemainingMonths(BirthDay,currentDate){//or we could use the upper method

        let yearInterval=BirthDay.getFullYear()-currentDate.getFullYear();
        
        return yearInterval*12+BirthDay.getMonth()-currentDate.getMonth();


    }

}


