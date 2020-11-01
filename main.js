// let dateToday = new Date();

let dbRef = firebase.database().ref();

//``;
function read(type, annee, mois, jour = "", idRdv = "") {
  const uri = `App/${type}/${annee}/${mois}/${jour}/${idRdv}`;

  return dbRef.child(uri).once("value");
}
const data = read("PA", "2020", "08");

function update(type, annee, mois, jour, idRdv, rdv) {
  const uri = `App/${type}/${annee}/${mois}/${jour}/${idRdv}`;

  read(type, annee, mois, jour, idRdv)
  .then((snap) => {
  const rdvOld = snap.val();
  const newVal = {...rdvOld, ...rdv};

    dbRef.child(uri).set(newVal)
    .then(() => console.log("success"))
      .catch((error) => console.log("failed ", error));
  });
}
const data1 = update("PA", "2020", "08", "19", "3", {
  name: "cleoaaa",
  presence: false,
});

// newdbRef.on("child_adde", (snap) => {
//   console.log(snap.val());
// });

var now = new Date();
now.setMinutes(now.getMinutes() + 30); // timestamp
now = new Date(now); // Date object
//console.log(now);

// // ici j'acced ou je prend users comme reference
// let dbRef = firebase.database().ref().child("users");
// const dbRefList = dbRef.child("tables");
// let idLi;
// // je prends un id bien precis comme reference
// //let dbref1 = firebase.database().ref("users/-MKqRyNbwRugiqrxabHq");

// // affiche toute les Key(id) et valeur du noeud
// //dbref.on('value', snap => console.log(snap.val()))

// let preUsers = document.getElementById("preUsers");
// const uLlist = document.getElementById("ullist");
// const list = document.getElementById("list");

// //const preUsersRef = firebase.database().ref().child('users');

// //preUsersRef.on('value', snap => {

// // preUsers.innerHTML = JSON.stringify(snap.val(), null, 1);
// //})

// // nouvelle reference
// //dbRefList.on('child_added', snap => {

// //console.log(snap.val());

// //list.innerHTML+=snap.val();
// //});

// // ${}

// //let objetItem = {
// //  name: name,
// //  tel: tel
// //}

// valider = document.getElementById("valider");

// valider.addEventListener("click", function (e) {
//   e.preventDefault();

//   let name = document.getElementById("name").value;
//   let tel = document.getElementById("tel").value;
//   console.log(name, tel);

//   // utilisation du shorthand
//   let objetItem = {name,tel};

//   addToFirebase(objetItem);

// });

// ////////////////////////////////////// Add to fireBase ////////////////////////////////////
// function addToFirebase(objet) {
//   let usersRef = dbRefList.push({
//     name: objet.name,
//     tel: objet.tel,
//   });
// }

// ///////////////////////////////////////// add to Dom ///////////////////////////////////

// dbRefList.on("child_added", (snap) => {
//   //console.log('dbrelist',snap.val());
//   idLi = snap.key;
// console.log(snap.val().name);
//    newRef = dbRefList.child(snap.key);

//   newRef.on("child_added", (snap) => {
//   //console.log('new',snap.val());

//     addToDom(idLi, snap);
//    });
// });

// function addToDom(id, objet) {
//   // console.log("ajouter " + objet.val());
//   const li = document.createElement("li");
//   li.id = idLi;
//   li.setAttribute("contenteditable", "true");
//   li.addEventListener('input', function(){

//   firebase.database().ref('users/tables/'+id).child().push().set({
//     name:'lol',
//     tel:'ahahah'
//   });
//   })
//   li.innerText = objet.val();

//   const i = document.createElement("i");
//   i.setAttribute("class", "fas fa-trash");
//   i.setAttribute("id", "trash");
//   li.appendChild(i);

//   i.addEventListener("click", function (e) {
//     let removeli = i.parentNode;
//     removeli = removeli.id;
//     removeItem(removeli);
//   });
//   uLlist.appendChild(li);
// }
// function removeItem(id) {
//   const liToRemove = document.getElementById(id);
//   liToRemove.remove();
// }

// //////////////////////////////////////////  update to  Firebase  /////////////////////////////////

// dbRefList.on("child_changed", (snap) => {
//   idLi = snap.key;

//   newRef = dbRefList.child(snap.key);
//   newRef.on("child_added", (snap) => {
//     console.log(snap.key);

//     update(idLi, snap);
//   });
// });

// function update(id, snap) {
//   const liChanged = document.getElementById(id);
//   liChanged.innerText = snap.val();
//   console.log(liChanged);
// }

// //////////////////////////////////////////////   delete to Firebase  ///////////////////////////////

// dbRefList.on("child_removed", (snap) => {});