
let dateToday1 = new Date();
let date = new Date(dateToday1);
console.log(date);

let dateNow = `${date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}`;

console.log(dateNow);
btnPlus = document.getElementById('plus');

let item = `  
<div class="container-permanence-content">
<div class="container-dates content-tables">Jeudi ${dateNow}</div>
<div class="container-hours content-tables">13h30 - 14h15</div>
<div contenteditable="true" class="container-names content-tables"></div>
<div contenteditable="true" class="container-phones content-tables"></div>
<div contenteditable="true" class="container-presences content-tables"></div>
<div contenteditable="true" class="container-asts content-tables"></div>
<div contenteditable="true" class="container-traitements content-tables"></div>
</div>
`;


btnPlus.addEventListener('click', function(){
    if(date.getDay() !== 4){
        document.querySelector('.container-body').innerHTML += item;
    }else{
    
    }
    
});   

let itemTotal = document.querySelectorAll('.container-permanence-content > .content-tables');

console.log(itemTotal);
