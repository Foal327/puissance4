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
function victoireVerticale(col,j){
  if((
    ligne1[col]==j&&ligne2[col]==j&&ligne3[col]==j&&ligne4[col]==j)||(ligne2[col]==j&&ligne3[col]==j&&ligne4[col]==j&&ligne5[col]==j)||(ligne3[col]==j&&ligne4[col]==j&&ligne5[col]==j&&ligne6[col]==j)){
   return true;
  }
};
function victoireHorizontale(ligne,j){
  if((ligne[0]==j&&ligne[1]==j&&ligne[2]==j&&ligne[3]==j)||(ligne[1]==j&&ligne[2]==j&&ligne[3]==j&&ligne[4]==j)||(ligne[2]==j&&ligne[3]==j&&ligne[4]==j&&ligne[5]==j)||(ligne[3]==j&&ligne[4]==j&&ligne[5]==j&&ligne[6]==j)){
    return true ;
  }
};
function victoireJoueur(j){
  if (
  victoireVerticale(0,j)==true||
  victoireVerticale(1,j)==true||
  victoireVerticale(2,j)==true||
  victoireVerticale(3,j)==true||
  victoireVerticale(4,j)==true||
  victoireVerticale(5,j)==true||
  victoireVerticale(6,j)==true||
  victoireHorizontale(ligne1,j)==true||
  victoireHorizontale(ligne2,j)==true||
  victoireHorizontale(ligne3,j)==true||
  victoireHorizontale(ligne4,j)==true||
  victoireHorizontale(ligne5,j)==true||
  victoireHorizontale(ligne6,j)==true
  ){
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
