// task-Uppercase the first character
// function ucFirst(str){
//     return str[0].toUpperCase()+str.slice(1)
// }
// alert( ucFirst("john") );

//Task-Check for spam
function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra')|| lowerStr.includes('xxx')
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") ); 

