//var utilisateur = {nom: {prenom: "thomas", famille: "laize"}, age: 25, sexe : "M"};
//console.log(utilisateur.nom.prenom);

// function Personne(nom, age, sexe) {
//   this.nom = nom;
//   this.age = age;
//   this.sexe = sexe;
// }

// function Voiture (fab, an, prop) {
//   this.fabricant = fab;
//   this.année = an;
//   this.propriétaire = prop;

//   this.generermessage = function(){
//     alert(this.propriétaire.nom + ' possède une ' + this.fabricant + " de " + this.année);
//   };
// }

//var utilisateur1 = new Personne("paul", 25, "M");
//var voiture = new Voiture ("peugeot", 2005, utilisateur1);

//utilisateur1.nom = "jean";

//console.log(voiture);
//voiture.generermessage();

//TABLEAU

//var pseudo = "thomas"
//var tableau = ["php" , "c++", "c#", "ruby", 5, pseudo];
// tableau.pop(); // supprimer le dernier élement (le pseudo en l'occurence)
// tableau.shift(); // supprime le premier élement du tabeau (php en l'occurence)
// tableau.push('HTML') // push rajoute un contenus
// console.log(tableau);
// console.log(tableau[0]);
// tableau[0] = "tony montana"
// console.log(tableau[0]);



// var tableau = [];

// while(true) {
//   var text = prompt('entrez un langage de programation');
//   if (text != ''){
//     tableau.push(text);
//   }
//   else{
//     break;
//   }
// }
// console.log(tableau);



//  $("h1").click(function(){
//    (tableau).pop();
//  })

// var tableau = ['un' , 'deux', 'trois', 'quatre'];

// var texte = prompt('entrez blabla');
// alert(tableau.indexOf(texte));

// var tableau = ['un' , 'deux', 'trois', 'quatre'];
// console.log(tableau);

// tableau.splice(1,2);
// console.log(tableau)

//  var tableau = [];

//  while(true) {
//    var text = prompt('entrez un langage de programation');
//    if (text != ''){
//      tableau.push(text);
//    }
//    else{
//      break;
//    }
//  }

//  console.log(text);

//  for(var i = 0; i < tableau.length; i++){
//   console.log('Index =>  '+i+' | valeur => ' +tableau[i]);
//  }


// var tableau=new Array();
// tableau[0]= {key1:"valeur1", key2:"valeur2"};
// tableau[1]= 'deux';
// tableau[2]= 'trois';

// //var longueur=tab.length;

// console.log(tableau);

var tableauoftodo = [];
var id = 0;

function raffraichir(){
  let taskcheck = 0;
  let taskcomplete = 0;
  tableauoftodo.forEach(item => taskcomplete++);
  tableauoftodo.forEach(item =>{
    if (item.check === true){
      taskcheck++;
    }
  })
  console.log(taskcheck);
  var taille = $('.status').text();
  $('.status').text(taskcheck + '/' + taskcomplete + ' Tâches faites');
  $("#test").text(taille);
}

$(".add-todo").on("keypress", 'input', function(e){
  if(e.which == 13){
    var title = $(this).val();
    var balise = `     <li id="todo-`+ id +`" class="todo-container">
    <div class="title">
      <div class="title-show">` + title + `</div>
      <input class="title-edit" value=""></input>
    </div>
    <div class="action-right">
    <div class="check"><i class="fas fa-check"></i></div>
      <div class="delete"><i class="fas fa-trash"></i></div>
    </div>
  </li>
 `
      $('.todolist').append(balise);
    
      $(".todo").addClass('todo-container');
      $(this).val('');

      var todo = {clef:id, titre:title, check:false};
      tableauoftodo.push(todo);
      raffraichir();
      $(`#todo-${id} .title-show`).on("click",function(e){
        $(`#todo-${todo.clef}.todo-container`).toggleClass("edition");
        $(`#todo-${todo.clef} .title-edit`).focus();
      });

      $(`#todo-${id} .check`).on("click",function(e){
        $(`#todo-${todo.clef}.todo-container`).toggleClass("done");
        if (todo.check === true){
          todo.check = false
        }
        else {
          todo.check = true
        }
        raffraichir();

        // todo.check = !todo.check;
      });

      $(`#todo-${id} .delete`).on("click",function(e){
        $(`#todo-${todo.clef}`).remove();
      
        function remove() {
          
          
          const index = tableauoftodo.findIndex( (item) => item.clef === todo.clef);
          if (index !== -1){
            tableauoftodo.splice(index, 1);
          }
        }
        remove();
        raffraichir();

        //tableauoftodo.splice(todo.clef, 1);
      });
      const element = document.querySelector(`#todo-${todo.clef}.todo-container`);
      const reset = document.querySelector(`#todo-${todo.clef} .title-edit`);

      document.addEventListener('click', (event) => {
        if (!element.contains(event.target)) {
          if (element.classList.contains('edition')) {
            element.classList.toggle('edition');
            reset.value = '';
          }
        }
      });
     id++;
     
      $(`#todo-${todo.clef} .title`).on("keypress", 'input', function(e){
       if (e.which == 13){
         var title2 = $(this).val();
         var balise2 = title2;        
         $(`#todo-${todo.clef} .title-show`).html(balise2);
         element.classList.toggle('edition')
       }
    
     })
      
  }
});



// if(e.which == 13){
//   var title = $(this).val();
//   var balise = `     <li id="todo-`+ id +`" class="todo-container">
//   <div class="title">
//     <div class="title-show">` + title + `</div>
//     <input class="title-edit" value=""></input>
//   </div>
//   <div class="action-right">
//   <div class="check"><i class="fas fa-check"></i></div>
//     <div class="delete"><i class="fas fa-trash"></i></div>
//   </div>
// </li>
// `
//     $('.todolist').append(balise);






var unObjet = {nom:"toto", key2:"michel"}; // créer un objet avec des valeurs
console.log(typeof(unObjet)); // affiche le type de unObjet
unObjet.nom; // pour acceder au nom donc "toto"
console.log(unObjet.nom); // donc on affiche ce qui a dans un objet.nom
unObjet.nom = "rust" // va modifier la valeur de nom
console.log(unObjet.nom);

