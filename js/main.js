
// let trashs = document.querySelectorAll('.trash');
let trash = document.querySelector('.trash');
// let containerToast = document.querySelector('.container-toast');
let containerToast = document.getElementById('container-toast');


// trashs.forEach(trash => document.addEventListener('click',openModal()))

// function openModal(){
//   console.log('lol');
// }
 trash.addEventListener('click', function() {
  containerToast.style.display = "block";
 })

let dbRef = firebase.database().ref();

// lancement de la function read 
const data = read("PA", "2020", "08");

//lancement de la function  update 
const data1 = update("PA", "2020", "08", "19", "3", {
  name: "cleoaaa",
  presence: false,
});

