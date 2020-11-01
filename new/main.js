
// var database = firebase.database();
// console.log(database);
  //  let dbRef = firebase.database().ref('/messages');
   let dbRef = firebase.database().ref();
   let dbRef1 = firebase.database().ref('users');
   let bodytable = document.getElementById('container-body');
   let valider = document.getElementById('valider');
let dateToday = new Date();
let date = new Date(dateToday);
let dateJour = date.getDay();
let dateFomat = `${date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}`;
let id = idRandom = getRandomInt(30000);

// let dateFomat2 = `${date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()}`;
//   console.log('dbRef', dbRef);
//  const usersRef = dbRef.child('users/data');
//  const usersRef = dbRef.child('object');
// console.log('usersRef', usersRef);
 //usersRef.push('blabla')

//  dbRef.on('child_added', function(snapshot){console.log(snapshot.key)});

//////////////////////////////////////////      Id randomm ////////////////////////

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

idRandom = getRandomInt(30000);
console.log(idRandom);


///////////////////// demande d'ecoute sur la base de donner et lancement de la fonction messageAdded  ///////////////////////////
dbRef1.on('child_added', messageAdded);


///////////////////////////////////////////// Parcourir les resultat d'un Id   /////////////////////////////////////////////////////


//  dbRef1.on("value", function(snapshot) {
  // results = snapshot.val();
  // console.log(results);

// for (const key in results) {
//   if (results.hasOwnProperty(key)) {
//     const element = results[key];
//     // console.log(element);
    
//   }
// }

//  })



  //  dbRef.on('child_added', messageAdded);

  
function messageAdded(snap) {
   console.log(snap.val());
  addItem({
    // id: snap.key,
    id: snap.val().id,
    daten: snap.val().daten,
    heure: snap.val().heure,
    names: snap.val().names,
    tel:  snap.val().telo,
    prescence: snap.val().prescence,
    assist: snap.val().assist,
    traiter: snap.val().traiter
  })
}


function addItem(data) {
  console.log(data);
  // let message = document.getElementById('message');
  
    let item = document.getElementById('template').cloneNode(true);
    // console.log('item', item);
    item.setAttribute('id', data.id);


    item.querySelector('.date').textContent = data.daten;
    item.querySelector('.heure').textContent = data.heure;
    item.querySelector('.names-user').textContent = data.names;
    item.querySelector('.tel').textContent = data.tel;
    item.querySelector('.prescence').textContent = data.prescence;
    item.querySelector('.assist').textContent = data.assist;
    item.querySelector('.traiter').textContent = data.traiter;
    // console.log('item', item);
  
    document.addEventListener('keydown', function(e){
      if (e.code === 'Enter') {
        
        // console.log(e.code);
      }
    });
    
    bodytable.appendChild(item);
    
  }
  function subItem(data) {
    // console.log(data.id);
    // console.log(data.daten);
    // console.log(data.heure);
    // console.log(data.names);
    // console.log(data.telo);
    // console.log(data.prescence);
    // console.log(data.assist);
    // console.log(data.traiter);
    // let message = document.getElementById('message');
    
      let item = document.getElementById('template').cloneNode(true);
      // console.log('item', item);
      item.setAttribute('id', data.id);
      item.querySelector('.date').textContent = data.daten;
      item.querySelector('.heure').textContent = data.heure;
      item.querySelector('.names-user').textContent = data.names;
      item.querySelector('.tel').textContent = data.telo;
      item.querySelector('.prescence').textContent = data.prescence;
      item.querySelector('.assist').textContent = data.assist;
      item.querySelector('.traiter').textContent = data.traiter;
      // console.log('item', item);

      bodytable.appendChild(item);
      
    }
  
///////////////////////// valider //////////////////////////////////////
valider.addEventListener('click', function(e){
  e.preventDefault();

  addToFirebase();

});


function addToFirebase(e) {
let datead = document.getElementById('date').value;
  // console.log('datead', datead);
let heuread = document.getElementById('heure').value;
// console.log('heuread', heuread);
let namesad = document.getElementById('names-user').value;
// console.log('namesad', namesad);
let telad = document.getElementById('tel').value;
// console.log('telad', telad);
let prescencead = document.getElementById('prescence').value;
// console.log('prescencead', prescencead);
let assistad = document.getElementById('assist').value;
// console.log('assistad', assistad);
let traiterad = document.getElementById('traiter').value;
// console.log('traiterad', traiterad);

dbRef1.push({
    id: idRandom,
    daten: datead,
    heure: heuread,
    names: namesad,
    telo: telad,
    prescence: prescencead,
    assist: assistad,
    traiter: traiterad,
  })
}




// let tel = document.querySelector('.tel').textContent;



  // function addToFirebase(e) {
  //   e.preventDefault();
  //   dbRef.push({
  //     message: message.value,
  //     message1: message.value,
  //   })
  //   message.value='';
  //   message1.value='';
  //   message.focus();
  //   message1.focus();
  // }



// function addToFirebase(e) {
//   e.preventDefault();
//   usersRef.push({
//     message: message.value,
//   })
//   message.value='';
//   message.focus();
// }
// function addToFirebase(e) {
//   e.preventDefault();
//   dbRef.push({
//     message: message.value,
//     message1: message.value,
//   })
//   message.value='';
//   message1.value='';
//   message.focus();
//   message1.focus();
// }



// let dateus = new Date();
// let dateusto = new Date(dateus);
// let horaire = '13h30';
// let phone =0140568545;
// let assist =8545;
// let nameUser = 'Bertrand Cammille';
// let prescence = 'O';
// let traiter = 'Y';
// let id2 = 2;
// let dateus2 = new Date();
// let dateusto2 = new Date(dateus);
// let horaire2 = '13h30';
// let phone2 =0140568545;
// let assist2 =8545;
// let nameUser2 = 'Bertrand Cammille';
// let prescence2 = 'O';
// let traiter2 = 'Y';

// writeUserData(id,dateFomat,horaire,nameUser,phone,prescence,assist,tel);
// writeUserData(id2,dateFomat2,horaire2,nameUser2,phone2,prescence2,assist2,tel);

function writeUserData(userId, dateus, heure, nameUser,tel,prescence,assist,traiter) {
  firebase.database().ref('users/' + userId).set({
    daten: dateFomat,
    heure: horaire,
    names: nameUser,
    tel: phone,
    prescence: prescence,
    assist: assist,
    traiter: traiter
  });
}








// usersRef.on('value', function(snapshot){console.log(snapshot)})
// usersRef.on('value', function(snapshot){console.log(snapshot.val())})
// usersRef.on('child_added', function(snapshot){console.log(snapshot.val())})
// usersRef.on('child_added', function(snapshot){console.log(snapshot.key())})




















//  const userListUI = document.getElementById("lol");
//  usersRef.on("child_added", snap => {
//      let user = snap.val();
//      let $li = document.createElement("li");
//      $li.innerHTML = user.name;
//      $li.setAttribute("child-key", snap.key);
//      $li.addEventListener("click", userClicked) userListUI.append($li);
//  });
//  function userClicked(e) {
//   var userID = e.target.getAttribute("child-key");
//   const userRef = dbRef.child('users/' + userID);
//   const userDetailUI = document.getElementById("userDetail");
//   userDetailUI.innerHTML = ""
//   userRef.on("child_added", snap => {
//       var $p = document.createElement("p");
//       $p.innerHTML = snap.key + " - " + snap.val() userDetailUI.append($p);
//   });
// }

