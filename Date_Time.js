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
// function getWeekDay(date) {
//     let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
//     return days[date.getDay()];
//   }
  
//   let date = new Date(2014, 0, 3); 
//   alert( getWeekDay(date) ); 

// //   task-european weekday
// function getLocalDay(date) {

//     let day = date.getDay();
  
//     if (day == 0) { // weekday 0 (sunday) is 7 in european
//       day = 7;
//     }
  
//     return day;
//   }

//   Which day of month was many days ago?
// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); 
// alert( getDateAgo(date, 2) ); 
// alert( getDateAgo(date, 365) );

// //How many seconds have passed today?
// function getSecondsToday() {
//     let now = new Date();
  
//     // create an object using the current day/month/year
//     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
//     let diff = now - today; // ms difference
//     return Math.round(diff / 1000); // make seconds
//   }
  
//   alert( getSecondsToday() );

// //   How many seconds till tomorrow?
// function getSecondsToTomorrow() {
//     let now = new Date();
//     let hour = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
//     let totalSecondsInADay = 86400;
  
//     return totalSecondsInADay - totalSecondsToday;
//   }

  // alternative method
  function getSecondsToTomorrow(){
    let now = new Date();
    let todayTime = now.getHours()*3600+now.getMinutes()*60+now.getSeconds();
    let totalTimeDay = 24*3600;
    return totalTimeDay - todayTime;

  }
  console.log(getSecondsToTomorrow());

  // Task-Format the relative date
  function formatDate(date) {
    const secondsAgo = Math.floor((Date.now() - date) / 1000);
  
    if (secondsAgo < 1) {
      return "right now";
    }
  
    if (secondsAgo < 60) {
      return `${secondsAgo} sec. ago`;
    }
  
    if (secondsAgo < 3600) {
      const minutesAgo = Math.floor(secondsAgo / 60);
      return `${minutesAgo} min. ago`;
    }
  
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    };
  
    return date.toLocaleDateString('en-US', options).replace(',', ' ');
  }
  
  // Examples
  console.log(formatDate(new Date(new Date() - 1))); // "right now"
  console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"
  console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"
  console.log(formatDate(new Date(new Date() - 86400 * 1000))); // e.g., "12/31/22 20:00"
  