jeu = new Array();
jeu = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]];
joueur1 = 1;
joueur2 = 0;
j1_win = 0;
j2_win = 0;
nul = 0;
coup = 0;
t1 = 140;
t2 = 100;
humain = 0;
ordinateur = 1;
occupe = 0;
condi = 1;
jouer = 1;
t4 = 0;
for (a = 0; a < 7; a++) {
  for (b = 0; b < 6; b++) {
    nomdudiv = a.toString() + b.toString();
    document.write("<div id='v" + nomdudiv + "' style='position:absolute;height:70px;width:70px;left:" + t2 + "px;top:" + t1 + "px;' onClick='clic(" + nomdudiv + ")'><img src='puissanceimages/pasdepion.gif' height='70' width='70'></div>");
    document.write("<div id='j" + nomdudiv + "' style='position:absolute;height:70px;width:70px;left:" + t2 + "px;top:" + t1 + "px;visibility:hidden'><img src='puissanceimages/pion_jaune.gif' height='70' width='70'></div>");
    document.write("<div id='r" + nomdudiv + "' style='position:absolute;height:70px;width:70px;left:" + t2 + "px;top:" + t1 + "px;visibility:hidden'><img src='puissanceimages/pion_rouge.gif' height='70' width='70'></div>");
    t1 = t1 + 70;
  }
  t1 = 140;
  t2 = t2 + 70;
}
document.write("<div id='player1'    style='position:absolute;height:100px;width:200px;left:100px;top:55px'><form name='form1'><span class='titre3'>TOI (joueur1)</span>&nbsp;&nbsp;<input type='text' name='resultj1' size='4' value='0'></form></div>");
document.write("<div id='player2'    style='position:absolute;height:100px;width:200px;left:360px;top:55px'><form name='form2'><span class='titre3'>TOUPTY (ou joueur2)</span>&nbsp;&nbsp;<input type='text' name='resultj2' size='4' value='0'></form></div>");
document.write("<div id='adversaire' style='position:absolute;height:100px;width:400px;left:130px;top:570px'><form name='form3'><input type='radio' name='ba' onclick='choix()' ><span class='titre3'>Jouer &agrave; deux&nbsp;&nbsp;</span><input type='radio' name='ba' onclick='choix()' checked><span class='titre3'>Jouer contre TOUPTY</span></form><input type='reset' value='Recommencer' name='restart'  onclick='demarrer()'></div>");

function choix() {
  if (humain) {
    humain = 0;
    ordinateur = 1;
    mode = 0;
  } else {
    humain = 1;
    ordinateur = 0;
    mode = 1;
  }

  document.form1.resultj1.value = 0;
  document.form2.resultj2.value = 0;
  joueur1 = 1;
  joueur2 = 0;
  window.status = "A vous joueur 1";
  demarrer();
}

function clic(nom) {
  if (condi) {
    coup++;
  }
  if (joueur1 && !occupe && condi) {
    n1 = Math.floor(nom / 10);
    for (a = 0; a < 6; a++) {
      if (jeu[n1][a]) {
        break;
      }
    }
    b = 0;
    reponse = 1;
    compl = "j";
    jeu[n1][a - 1] = 1;
    animation();
  } else {
    if (!occupe && condi) {
      n1 = Math.floor(nom / 10);
      for (a = 0; a < 6; a++) {
        if (jeu[n1][a]) {
          break;
        }
      }
      b = 0;
      compl = "r";
      jeu[n1][a - 1] = 2;
      animation();
    }
  }
  if (ordinateur) {
    if (!occupe && joueur2) {
      condi = 1;
      jouer = 1;
      if (coup == 0) {
        n1 = 3;
        a = 6;
        jouer = 0;
      }
      if (coup == 1 && jouer) {
        for (a = 0; a < 7; a++) {
          if (jeu[a][5] == 1) {
            break;
          }
        }
        if (!a || a == 6) {
          n1 = 3;
        } else {
          t1 = Math.round(Math.random());
          if (!t1) {
            n1 = a - 1;
          }
          if (t1) {
            n1 = a + 1;
          }
        }
        a = 6;
        jouer = 0;
      }
      verticale_ordi("total==6");
      horizontale_ordi("total==6");
      diago_ordi("f=0", "f<4", "f++", "total==6", 0);
      diago_ordi("f=0", "f<4", "f++", "total==6", 5);
      diago_ordi("f=6", "f>2", "f--", "total==6", 0);
      diago_ordi("f=6", "f>2", "f--", "total==6", 5);
      verticale_ordi("total==3");
      horizontale_ordi("total==3");
      diago_ordi("f=0", "f<4", "f++", "total==3", 0);
      diago_ordi("f=0", "f<4", "f++", "total==3", 5);
      diago_ordi("f=6", "f>2", "f--", "total==3", 0);
      diago_ordi("f=6", "f>2", "f--", "total==3", 5);


      if (jouer) {
        t4 = 0;
        while (condi) {
          t4++;
          n1 = Math.round(Math.random() * 6);
          for (a = 0; a < 6; a++) {
            if (jeu[n1][a]) {
              break;
            }
          }

          if (a == 1 || (a <= 6 && t4 >= 100 && a > 0)) {
            break;
          }
          if (a <= 6 && t4 < 100 && a > 1) {
            t1 = a;
            jeu[n1][a - 1] = 2;
            jeu[n1][a - 2] = 1;
            joueur1 = 1;
            joueur2 = 0;

            gagner();

            a = t1;
            jeu[n1][a - 2] = 0;
            joueur2 = 1;
            joueur1 = 0;

            if (j1_win) {
              jeu[n1][a - 1] = 0;
              j1_win = 0;
            } else {
              j1_win = 0;
              break;
            }
          }
        }
        t4 = 0;
      }
      b = 0;
      compl = "r";
      jeu[n1][a - 1] = 2;
      coup++;
      animation();
    } else {
      if (!joueur2) {
        if (reponse) {
          condi = 0;
          setTimeout("clic(0)", 50);
        } else {
          condi = 1;
        }
      }
    }
  }
}

function animation() {
  occupe = 1;
  n2 = compl + n1.toString() + b.toString();
  n3 = compl + n1.toString() + (b - 1).toString();

  if (!b) {
    visibilitecalque(n2, "visible");
  } else {
    visibilitecalque(n3, "hidden");
    visibilitecalque(n2, "visible");
  }
  if (a - 1 > b) {
    b++;
    setTimeout("animation()", 100);
  } else {
    if (joueur1) {
      gagner();
      joueur1 = 0;
      joueur2 = 1;
      window.status = "A vous joueur 2";
    } else {
      gagner();
      joueur1 = 1;
      joueur2 = 0;
      window.status = "A vous joueur 1";
    }
    if ((j1_win || j2_win || nul) && !reponse) {
      demarrer();
      joueur1 = 1;
      joueur2 = 0;
      window.status = "A vous joueur 1";
    }
    if ((j1_win || j2_win || nul) && reponse) {
      demarrer();
    }
    occupe = 0;
  }
}

function gagner() {
  if (joueur1) {
    total = 1;
    for (a = 0; a < 3; a++) {
      for (b = a; b < 4 + a; b++) {
        total = jeu[n1][b] * total;
      }
      if (total == 1) {
        j1_win = 1;
        break;
      }
      total = 1;
    }

    total = 1;
    for (a = 0; a < 6; a++) {
      for (b = 0; b < 4; b++) {
        for (c = b; c < 4 + b; c++) {
          total = jeu[c][a] * total;
        }
        if (total == 1) {
          j1_win = 1;
          break;
        }
        total = 1;
      }
    }
    diagonale("a=0", "a<4", "a++", 0, 1);
    diagonale("a=0", "a<4", "a++", 5, 1);
    diagonale("a=6", "a>2", "a--", 0, 1);
    diagonale("a=6", "a>2", "a--", 5, 1);
  } else {
    total = 1;
    for (a = 0; a < 3; a++) {
      for (b = a; b < 4 + a; b++) {
        total = jeu[n1][b] * total;
      }
      if (total == 16) {
        j2_win = 1;
        break;
      }
      total = 1;
    }
    total = 1;
    for (a = 0; a < 6; a++) {
      for (b = 0; b < 4; b++) {
        for (c = b; c < 4 + b; c++) {
          total = jeu[c][a] * total;
        }
        if (total == 16) {
          j2_win = 1;
          break;
        }
        total = 1;
      }
    }
    diagonale("a=0", "a<4", "a++", 0, 2);
    diagonale("a=0", "a<4", "a++", 5, 2);
    diagonale("a=6", "a>2", "a--", 0, 2);
    diagonale("a=6", "a>2", "a--", 5, 2);
  }
  if (!t4) {
    if (!j1_win && !j2_win && coup == 42) {
      nul = 1;
    }
    if (j1_win) {
      endgame();
    }
    if (j2_win) {
      endgame();
    }
    if (nul) {
      endgame();
    }
  }
}

function diagonale(c1, c2, c3, val1, pl) {
  total = 1;
  for (eval(c1); eval(c2); eval(c3)) {
    b = a;
    c = val1;

    for (d = 0; d < 3; d++) {
      if (c3.indexOf('-') != -1) {
        b = a - d;
      } else {
        b = a + d;
      }
      if (!val1) {
        c = d;
      } else {
        c = val1 - d;
      }

      for (e = 0; e < 4; e++) {
        if (b < 0 || b > 6) {
          total = 0;
          break;
        }

        total = jeu[b][c] * total;

        if (c3.indexOf('-') != -1) {
          b--;
        } else {
          b++;
        }
        if (!val1) {
          c++;
        } else {
          c--;
        }
      }

      if (pl == 1) {
        if (total == 1) {
          j1_win = 1;
        }
      } else {
        if (total == 16) {
          j2_win = 1;
        }
      }
      total = 1;
    }
  }
}

function diago_ordi(c1, c2, c3, c4, val1) {
  if (jouer) {
    total = 0;
    for (eval(c1); eval(c2); eval(c3)) {
      b = f;
      c = val1;

      for (d = 0; d < 3; d++) {
        if (c3.indexOf('-') != -1) {
          b = f - d;
        } else {
          b = f + d;
        }
        if (!val1) {
          c = d;
        } else {
          c = val1 - d;
        }

        for (e = 0; e < 4; e++) {
          if (b < 0 || b > 6 || (jeu[b][c] == 1 && c4 == "total==6")) {
            total = 0;
            break;
          }
          if (b < 0 || b > 6 || (jeu[b][c] == 2 && c4 == "total==3")) {
            total = 0;
            break;
          }

          if (!jeu[b][c]) {
            t1 = b;
            t2 = c;
          }
          total = jeu[b][c] + total;

          if (c3.indexOf('-') != -1) {
            b--;
          } else {
            b++;
          }
          if (!val1) {
            c++;
          } else {
            c--;
          }
        }

        if (eval(c4)) {
          if (t2 < 5) {
            if (jeu[t1][t2 + 1]) {
              arret = 1;
              n1 = t1;
              a = t2 + 1;
              break;
            }
          } else {
            arret = 1;
            n1 = t1;
            a = t2 + 1;
            break;
          }

        }
        t1 = 0;
        t2 = 0;
        total = 0;
      }
      if (arret) {
        break;
      }
    }
    if (arret) {
      jouer = 0;
    }
  }
}

function verticale_ordi(c1) {
  if (jouer) {
    total = 0;
    arret = 0;
    for (b = 0; b < 7; b++) {
      for (c = 0; c < 3; c++) {
        for (d = c; d < 4 + c; d++) {
          if (jeu[b][d] == 1 && c1 == "total==6") {
            total = 0;
            break;
          }
          if (jeu[b][d] == 2 && c1 == "total==3") {
            total = 0;
            break;
          }
          total = jeu[b][d] + total;
        }
        if (eval(c1)) {
          if (!jeu[b][c]) {
            n1 = b;
            a = c + 1;
            arret = 1;
            break;
          }
        }
        total = 0;
      }
      if (arret) {
        break;
      }
    }
    if (arret) {
      jouer = 0;
    }
  }
}

function horizontale_ordi(c1) {
  if (jouer) {
    total = 0;
    arret = 0;
    for (b = 0; b < 6; b++) {
      for (c = 0; c < 4; c++) {
        for (d = c; d < 4 + c; d++) {
          if (jeu[d][b] == 1 && c1 == "total==6") {
            total = 0;
            break;
          }
          if (jeu[d][b] == 2 && c1 == "total==3") {
            total = 0;
            break;
          }
          total = jeu[d][b] + total;
        }
        if (eval(c1)) {
          for (d = c; d < 4 + c; d++) {
            if (!jeu[d][b]) {
              break;
            }
          }
          if (b < 5) {
            if (jeu[d][b + 1]) {
              arret = 1;
              n1 = d;
              a = b + 1;
              break;
            }
          } else {
            arret = 1;
            n1 = d;
            a = b + 1;
            break;
          }
        }
        total = 0;
      }
      if (arret) {
        break;
      }
    }
    if (arret) {
      jouer = 0;
    }
  }
}

function endgame() {
  if (j1_win) {
    if (ordinateur == 1) reponse = confirm("Bravo tu as gagn&eacute;.\nNouvelle partie ?");
    if (ordinateur == 0) reponse = confirm("Bravo joueur 1 vous avez gagn&eacute;.\nNouvelle partie ?");
    document.form1.resultj1.value++;
  }
  if (j2_win) {
    if (ordinateur == 1) reponse = confirm("TOUPTY a gagn&eacute;.\nNouvelle partie ?");
    if (ordinateur == 0) reponse = confirm("Bravo joueur 2 vous avez gagn&eacute;.\nNouvelle partie ?");
    document.form2.resultj2.value++;
  }
  if (nul) {
    reponse = confirm("Match nul.\nNouvelle partie ?");
  }
  if (!reponse) {
    document.form1.resultj1.value = 0;
    document.form2.resultj2.value = 0;
  }
}

function demarrer() {
  for (a = 0; a < 7; a++) {
    for (b = 0; b < 6; b++) {
      jeu[a][b] = 0;
      nomdudiv = a.toString() + b.toString();
      visibilitecalque("j" + nomdudiv, "hidden");
      visibilitecalque("r" + nomdudiv, "hidden");
    }
  }
  coup = 0;
  nul = 0;
  j1_win = 0;
  j2_win = 0;
}
window.status = "A vous joueur 1";
