// // craetion 
// let now = new Date();
// console.log(now);

// let date = new Date(2011, 0, 1, 2, 3, 4, 567);
// console.log( date ); // 1.01.2011, 02:03:04.567

// // task-Create a date
// let d1 = new Date(2012,1,20,3,12);
// alert(d1);
// //new Date(datastring)
// let d2 = new Date("2012-02-20T03:12");
// alert( d2 );

// Show a weekday
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); 
  alert( getWeekDay(date) ); 

//   task-european weekday
function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
  }