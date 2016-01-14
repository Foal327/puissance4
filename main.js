/**
* Puissance 4 en JavaScript
* copyright 2016, équipe "ERROR 404 skill not found" Hétic-P2020-H1-G3
*/


//**********************************DÉCLARATION DES VARIABLES*************************************


var ligne0 = [1,2,3,4,5,6,7];
var ligne1 = [0,0,0,0,0,0,0];
var ligne2 = [0,0,0,0,0,0,0];
var ligne3 = [0,0,0,0,0,0,0];
var ligne4 = [0,0,0,0,0,0,0];
var ligne5 = [0,0,0,0,0,0,0];
var ligne6 = [0,0,0,0,0,0,0];

var selection = 0;
var i=0 ; // renvoyé à 1 ou 2 en cas de victoire/fin de partie


//***********************************DÉCLARATION DES FONCTIONS************************************


function victoireJoueur(j){
  if (
      (
        (
          ligne1[0]==j&&ligne2[0]==j&&ligne3[0]==j&&ligne4[0]==j
        )||(
          ligne2[0]==j&&ligne3[0]==j&&ligne4[0]==j&&ligne5[0]==j
        )||(
          ligne3[0]==j&&ligne4[0]==j&&ligne5[0]==j&&ligne6[0]==j
        )
      )||(
        (
          ligne1[1]==j&&ligne2[1]==j&&ligne3[1]==j&&ligne4[1]==j
        )||(
          ligne2[1]==j&&ligne3[1]==j&&ligne4[1]==j&&ligne5[1]==j
        )||(
          ligne3[1]==j&&ligne4[1]==j&&ligne5[1]==j&&ligne6[1]==j
        )
      )||(
        (
          ligne1[2]==j&&ligne2[2]==j&&ligne3[2]==j&&ligne4[2]==j
        )||(
          ligne2[2]==j&&ligne3[2]==j&&ligne4[2]==j&&ligne5[2]==j
        )||(
          ligne3[2]==j&&ligne4[2]==j&&ligne5[2]==j&&ligne6[2]==j
        )
      )||(
        (
          ligne1[3]==j&&ligne2[3]==j&&ligne3[3]==j&&ligne4[3]==j
        )||(
          ligne2[3]==j&&ligne3[3]==j&&ligne4[3]==j&&ligne5[3]==j
        )||(
          ligne3[3]==j&&ligne4[3]==j&&ligne5[3]==j&&ligne6[3]==j
        )
      )||(
        (
          ligne1[4]==j&&ligne2[4]==j&&ligne3[4]==j&&ligne4[4]==j
        )||(
          ligne2[4]==j&&ligne3[4]==j&&ligne4[4]==j&&ligne5[4]==j
        )||(
          ligne3[4]==j&&ligne4[4]==j&&ligne5[4]==j&&ligne6[4]==j
        )
      )||(
        (
          ligne1[5]==j&&ligne2[5]==j&&ligne3[5]==j&&ligne4[5]==j
        )||(
          ligne2[5]==j&&ligne3[5]==j&&ligne4[5]==j&&ligne5[5]==j
        )||(
          ligne3[5]==j&&ligne4[5]==j&&ligne5[5]==j&&ligne6[5]==j
        )
      )||(
        (
          ligne1[5]==j&&ligne2[5]==j&&ligne3[5]==j&&ligne4[5]==j
        )||(
          ligne2[5]==j&&ligne3[5]==j&&ligne4[5]==j&&ligne5[5]==j
        )||(
          ligne3[5]==j&&ligne4[5]==j&&ligne5[5]==j&&ligne6[5]==j
        )
      )||(
        (
          ligne1[6]==j&&ligne2[6]==j&&ligne3[6]==j&&ligne4[6]==j
        )||(
          ligne2[6]==j&&ligne3[6]==j&&ligne4[6]==j&&ligne5[6]==j
        )||(
          ligne3[6]==j&&ligne4[6]==j&&ligne5[6]==j&&ligne6[6]==j
        )
      )
      //controle colonne par colonne si il y a 4 cases verticales à la valeur 1 => controle si 4 cases cotes à cotes sur chaque colonne.
      ||(
          ligne1[0]==j&&ligne1[1]==j&&ligne1[2]==j&&ligne1[3]==j
        )||(
          ligne1[1]==j&&ligne1[2]==j&&ligne1[3]==j&&ligne1[4]==j
        )||(
          ligne1[2]==j&&ligne1[3]==j&&ligne1[4]==j&&ligne1[5]==j
        )||(
          ligne1[3]==j&&ligne1[4]==j&&ligne1[5]==j&&ligne1[6]==j
        )
      ||(
        (
          ligne2[0]==j&&ligne2[1]==j&&ligne2[2]==j&&ligne2[3]==j
        )||(
          ligne2[1]==j&&ligne2[2]==j&&ligne2[3]==j&&ligne2[4]==j
        )||(
          ligne2[2]==j&&ligne2[3]==j&&ligne2[4]==j&&ligne2[5]==j
        )||(
          ligne2[3]==j&&ligne2[4]==j&&ligne2[5]==j&&ligne2[6]==j
        )
     )||(
        (
          ligne3[0]==j&&ligne3[1]==j&&ligne3[2]==j&&ligne3[3]==j
        )||(
          ligne3[1]==j&&ligne3[2]==j&&ligne3[3]==j&&ligne3[4]==j
        )||(
          ligne3[2]==j&&ligne3[3]==j&&ligne3[4]==j&&ligne3[5]==j
        )||(
          ligne3[3]==j&&ligne3[4]==j&&ligne3[5]==j&&ligne3[6]==j
        )
      )||(
        (
          ligne4[0]==j&&ligne4[1]==j&&ligne4[2]==j&&ligne4[3]==j
        )||(
          ligne4[1]==j&&ligne4[2]==j&&ligne4[3]==j&&ligne4[4]==j
        )||(
          ligne4[2]==j&&ligne4[3]==j&&ligne4[4]==j&&ligne4[5]==j
        )||(
          ligne4[3]==j&&ligne4[4]==j&&ligne4[5]==j&&ligne4[6]==j
        )
      )||(
        (
          ligne5[0]==j&&ligne5[1]==j&&ligne5[2]==1&&ligne5[3]==j
        )||(
          ligne5[1]==j&&ligne5[2]==j&&ligne4[3]==1&&ligne4[4]==j
        )||(
          ligne4[2]==j&&ligne4[3]==j&&ligne4[4]==1&&ligne4[5]==j
        )||(
          ligne4[3]==j&&ligne4[4]==j&&ligne4[5]==1&&ligne4[6]==j
        )
      )||(
        (
          ligne6[0]==j&&ligne6[1]==j&&ligne6[2]==j&&ligne6[3]==j
        )||(
          ligne6[1]==j&&ligne6[2]==j&&ligne6[3]==j&&ligne6[4]==j
        )||(
          ligne6[2]==j&&ligne6[3]==j&&ligne6[4]==j&&ligne6[5]==j
        )||(
          ligne6[3]==j&&ligne6[4]==j&&ligne6[5]==j&&ligne6[6]==j
        )
      )
    ) //controle LIGNE PAR LIGNE si il y a 4 cases HORIZONTALE à la valeur 1 => controle si 4 cases cotes à cotes sur chaque LIGNE.
  {
    document.write('joueur '+j+' gagne : fin de la partie</br></br>');
    i=j;
  };
};/* fin de partie en cas de victoire : controle si 4 valeurs + cote à cote */
function chute(colonne,j){
  if(selection==(colonne+1)){
    if(ligne6[colonne]<1){
      ligne6[colonne]=j;
    }
    else{
      if(ligne5[colonne]<1){
        ligne5[colonne]=j
      }
      else{
        if(ligne4[colonne]<1){
          ligne4[colonne]=j
        }
        else {
          if(ligne3[colonne]<1){
            ligne3[colonne]=j
          }
          else {
            if(ligne2[colonne]<1){
              ligne2[colonne]=j
            }
            else {
              if(ligne1[colonne]<1){
                ligne1[colonne]=j
              }
              else {
                window.alert('CETTE COLONNE PLEINE, SELCTIONNEZ UNE AUTRE COLONNE')
              }
            }
          }
        }
      }
    }
  }
 }
function chutePionJoueur(j){
  selection=parseInt(prompt("JOUEUR "+ j +" saisissez le numéro de la colonne où placer le pion"));
  do{
    chute(0,j);
    chute(1,j);
    chute(2,j);
    chute(3,j);
    chute(4,j);
    chute(5,j);
  }while (selection>7||selection<0);
};/* prevois la chute du pion et son inscription*/
function tour(j){
  chutePionJoueur(j);
  document.write(
    ligne0 + '</br></br>' +
    ligne1 + '</br>' +
    ligne2 + '</br>' +
    ligne3 + '</br>' +
    ligne4 + '</br>' +
    ligne5 + '</br>' +
    ligne6 + '</br></br>'
);
  victoireJoueur(j);
};/* utilise les fonctions victoireJoueur(j) et chuteDePion(j) : représente un tour de jeu*/


// **********************************ÉXÉCUTION DU PROGRAMME****************************************
while(i<1){
  tour(1);
  if (i<1){
    tour(2);
  }
};
document.write('FIN DU JEU');
