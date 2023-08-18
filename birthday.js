function TimeRemaining(){



const currentDate=new Date();
const BirthDay=new Date(2024,6,25,12,30,30);


let remainingTimeMilli=BirthDay-currentDate;
let remainingTimeSeconds=Math.floor((BirthDay-currentDate)/1000);
let remainingTimeMinutes=Math.floor((BirthDay-currentDate)/(1000*60));
let remainingTimeHours=Math.floor((BirthDay-currentDate)/(1000*60*60));
let remainingTimeDays=Math.floor((BirthDay-currentDate)/(1000*60*60*24));
let remainingTimeMonth=getRemainingMonths(BirthDay,currentDate);

console.log(remainingTimeMonth);

let timeLeft=document.querySelector('.TimeLeft');
timeLeft.innerText=`months left:${remainingTimeMonth}//remaining days left:${remainingTimeDays}//remaining hours left:${remainingTimeHours}//remaining minutes left:${remainingTimeMinutes}//remaining seconds left:${remainingTimeSeconds}`;




function getRemainingMonths(BirthDay,currentDate){

    let yearInterval=BirthDay.getFullYear()-currentDate.getFullYear();
    
    return yearInterval*12+BirthDay.getMonth()-currentDate.getMonth();


}

}


setInterval(TimeRemaining,1000);