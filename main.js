
let dateToday = new Date();
let date = new Date(dateToday);
let dateJour = date.getDay();
let dateFomat = `${date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}`;

let newdate = new Date(dateToday);
//console.log('newdate avant :', newdate);

let whatDay = dateJour === 4 ? (0) : (4-dateJour );
console.log('whatDay', whatDay);


newdate.setDate(dateToday.getDate()+whatDay);
console.log('newdate  apres :', newdate);

//whatDay = dateJour < 4 ? (4-dateJour) : dateJour > 4  ? (4-dateJour ) : 0;

dateFomat = `${newdate.getDate()+"/"+(newdate.getMonth()+1)+"/"+newdate.getFullYear()}`;
// esxemplet on est mardi 
//    0       1   2       3       4       5       6
//dimanche lundi mardi mercredi jeudi vendredi samedi 

// 4-2 = 2 
//date du jour +2 




var now = new Date();
now.setMinutes(now.getMinutes() + 30); // timestamp
now = new Date(now); // Date object
console.log(now);








//console.log('dateFomat', dateFomat);
// let lol ;
let itemTotal = document.querySelectorAll('.container-permanence-content > .content-tables');
btnPlus = document.getElementById('plus');

let item = `  
<div class="container-permanence-content">
<div contenteditable="true" class="container-dates content-tables">Jeudi ${dateFomat}</div>
<div class="container-hours content-tables">13h30 - 14h15</div>
<div contenteditable="true" class="container-names content-tables"></div>
<div contenteditable="true" class="container-phones content-tables"></div>
<div contenteditable="true" class="container-presences content-tables"></div>
<div contenteditable="true" class="container-asts content-tables"></div>
<div contenteditable="true" class="container-traitements content-tables"></div>
</div>
`;
// let i = 0;


btnPlus.addEventListener('click', function(){
    document.getElementById('container-body').innerHTML += item;

  //  if(dateJour === 4){
        
   // }//else{
      // newdate.setDate(date.getDay()+1);
        
       // console.log(newdate.setDate(date.getDay()+1));
        
     //while (lol !== 4) {

       // lol = newdate.setDate(date.getDay()+1);
      //  console.log('newdate', newdate);
                
                  
                 
       // }
        // while (i < 20000) {
        //          i++;
        //           console.log('i', i);
        //          lol = newdate.setDate(date.getDay()+1);
        //           console.log('newdate', newdate);
        //         setTimeout(function(){
        //             i=20000;
        //             console.log(i+'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')},1);
        //             return null;
                  
                 
        // }
    //}
}); 

// while (i < 5) {
//     i++;
//      console.log('i', i);
     
// }

//buildTable(myData);



// while (date.getDay() !== 4) {
    
// }

// function goThursday (dateToday){
//     console.log('dateToday', dateToday);
//     let newdate = new Date(dateToday);
//     console.log('newdate', newdate);
//     newdate.setDate(newdate.getDay()+1);
//     return newdate;
// }

// console.log(goThursday(dateToday));

// var myData = JSON.parse(data);

// console.log('myData', myData);


// let titre = document.querySelector('.container-title');

// titre.textContent = myData[0].name;

// myData[0].name = 'John';
// titre.textContent = myData[0].name;
// console.log(typeof myData);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// console.log(words);
// const result = words.filter(mot => mot.length >6 );
// console.log(result);

// function suffisamentGrand()
// function buildTable(data) {
//     var table = document.getElementById('container-body');
//     console.log('table', table);

    
//     for (let i = 0; i < data.length; i++) {
//         let row =`<div class="container-permanence-content">
//         <div contenteditable="true" class="container-dates content-tables">Jeudi ${dateFomat}</div>
//         <div class="container-hours content-tables">13h30 - 14h15</div>
//         <div contenteditable="true" class="container-names content-tables"> ${data[i].name}</div>
//         <div contenteditable="true" class="container-phones content-tables"></div>
//         <div contenteditable="true" class="container-presences content-tables"></div>
//         <div contenteditable="true" class="container-asts content-tables"></div>
//         <div contenteditable="true" class="container-traitements content-tables"></div>
//         </div>`;
//         table.innerHTML+= row;
        
//     }
// }
// buildTable(myData);
