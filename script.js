// var new Date());

function dispTime() {
  

var hr=new Date().getHours();
var mn=new Date().getMinutes();
var sec=new Date().getSeconds();
var day=new Date().getDay();
var year=new Date().getUTCFullYear();
var mon=new Date().getUTCMonth();
console.log(mon);
var dat=new Date().getDate();
// console.log(dat);

var am_pm="AM";

var monName=['jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','oct','Nov','Dec']
var dayName=['Sun','Mon','Tue','Wed','Thur','Fri','Sat']

if (hr>11) {
  hr=hr-12;
  am_pm='PM'
}

if (hr==0) {
  hr=12
}


hr=(hr<10) ? "0"+hr:hr;
mn=(mn<10) ? "0"+mn:mn;
sec=(sec<10) ? "0"+sec:sec;
dat=(dat<10) ? "0"+dat:dat;



// var month=cge[mon]
// console.log(month);








document.getElementById('hour').innerHTML=hr;
document.getElementById('minute').innerHTML=mn;
document.getElementById('second').innerHTML=sec;
document.getElementById('date').innerHTML=dat;
document.getElementById('month').innerHTML=monName[mon];
document.getElementById('year').innerHTML=year;
document.getElementById('day').innerHTML=dayName[day];
document.getElementById('am_pm').innerHTML=am_pm;

setInterval(() => {
  dispTime()
}, 1000);

}
dispTime()










