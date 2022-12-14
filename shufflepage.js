function shufflePage() {
  push();
  translate(0, 20);
  if (clickCheck < 2) {
    push();
    translate(0, -20)
    for (n=1;n<12;n++) {
    rot[n] = rotOut[n];
    pos[n] = posC[n];
    cards[n].move(rot[n], pos[n], 0, 0);
    }
    pop();
  }
  if (clickCheck == 2) {
    cardSelected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    selected = [false, false, false, false, false, false, false, false, false, false, false];
    cardNumber = 0;
    push()
    translate(0, -20)
    if (i0 < 29) {
      i0++;
    }
    if (j0 < 58) {
      j0+=2
    }
    for (n=1;n<12;n++) {
      rot[n] = rotOut[n];
      pos[n] = posC[n];
      cards[n].move(rot[n], pos[n], i0, j0);
    }
    pop()
    if (i0 >= 29 && j0 >= 58) {
      clickCheck = 3;
    }
  }
  if (clickCheck >= 3 && clickNext == 0) {
    push();
    translate(0, -20);
    for (n=1;n<12;n++) {
      rot[n] = rotIn[n];
      pos[n] = posIn[n];
      cards[n].move(rot[n], pos[n], ir, j);
      cards[n].over(pos[n], j);
    }
    if (ir < 29) {
      ir++
    } 
    if (j == 20) {
      tarotSFX1.play();
    }
    if (j < 80) {
      j+=2
    }
    pop()
    for(n2=1;n2<12;n2++) {
      if (selected[n2] == true) {
        cards[n2].click();
      } 
    }
    i0 = 0;
    j0 = 0;
    i2 = 0;
    j2 = 0;
    if (j > 70) {
      if (modeMulti) {
        for(let i=1; i<=cardNumber; i++) {
          inp[i].show();
        }
        for(let i=cardNumber+1; i<=7; i++) {
          inp[i].inp.hide();
        }
      image(multiInputUI, -1, -20, width+3, height+4);
  } if (modeTwo) {
    inp[7].show();
    inp[8].show();
    image(twoInputUI, -1, -20, width+1, height+4);
  }
  } else {
    for(let i=1; i<=6; i++) {
      inp[i].inp.hide();
    }
  }
  for(let i=1;i<12;i++) {
    if (selected[i]) {
      cardNumber = selected.filter(element => true === element).length;
    }
  }
  } 
  if (clickNext > 0) {
    for(let i=1; i<=8; i++) {
      inp[i].inp.hide();
    }
    ir = 0;
    j = 0;
    push();
    translate(0, -10);
    if (i2 < 30) {
      i2++;
    } 
    if (j2 < 120) {
      j2+=2
    }
    for (n=1;n<12;n++) {
    rot[n] = rotOut[n];
    pos[n] = posOut[n];
    cards[n].move(rot[n], pos[n], i2, j2);
    }
    pop();
  }
  pop();
  if (clickCheck >= 1) {
    if (mouseCheck) {
      buttonH.over();
    }
    buttonH.display();
  }
  if (clickCheck > 1 && clickNext == 0) {
    if (mouseCheck) {
    buttonNextS.over();
    buttonResetS.over();
    }
    buttonNextS.display();
    buttonResetS.display();
  }
  // image(card, 200, 200, 105*a, 185*a);
  if (clickNext == 1) {
    resultRandom();
  }
  if (clickNext > 0) {
    if (modeOne == true) {
      push();
      if (rT < 69) {
      rT++;
      }
      translate(0,(posPage[rT]-330)*wX)
      resultPageOne();
      pop();
      clickNext = 2;
    } else if (modeTwo) {
      push();
      if (rT < 69) {
      rT++;
      }
      translate(0,(posPage[rT]-330)*wX);
      resultPageTwo();
      pop();
      clickNext = 2;
      } else if (modeMulti) {
        push();
        if (rT < 69) {
        rT++;
        }
        translate(0,(posPage[rT]-330)*wX);
        resultMulti();
        pop();
        clickNext = 2;
      } else {
        push();
        if (rT < 69) {
        rT++;
        }
        translate(0,(posPage[rT]-330)*wX);
        resultPageManual();
        pop();
        clickNext = 2;
      }
  }
}

function shuffleSelect() {
    if (modeOne) {
      if (cardNumber < 1) {
        for(i=1;i<12;i++) {
        if (cards[i].ig == cards[i].igA) {
          selected[i] = true;
        } 
        }
      }
      for(i=1;i<12;i++) {
        if (cards[i].ig == cards[i].igS && mouseX > cards[i].x*wX && mouseX < (cards[i].x+cards[i].width/2)*wX && mouseY > cards[i].y*wX && mouseY < (cards[i].y+cards[i].height)*wX) {
          selected[i] = false;
          cardNumber = 0;
        }
        }
    } 
    if (modeTwo) {
      if (cardNumber < 2) {
        for(i=1;i<12;i++) {
        if (cards[i].ig == cards[i].igA) {
          selected[i] = true;
        }
        }
      }
      for(i=1;i<12;i++) {
        if (cards[i].ig == cards[i].igS && mouseX > cards[i].x*wX && mouseX < (cards[i].x+cards[i].width/2)*wX && mouseY > cards[i].y*wX && mouseY < (cards[i].y+cards[i].height)*wX) {
          selected[i] = false;
        }
        }
    } 
    if (modeMulti) {
      if (cardNumber < 6) {
        for(i=1;i<12;i++) {
        if (cards[i].ig == cards[i].igA) {
          selected[i] = true;
        }
        }
      }
      for(i=1;i<12;i++) {
        if (cards[i].ig == cards[i].igS && mouseX > cards[i].x*wX && mouseX < (cards[i].x+cards[i].width/2)*wX && mouseY > cards[i].y*wX && mouseY < (cards[i].y+cards[i].height)*wX) {
          selected[i] = false;
        }
        }   
    } 
    if (modeManual) {
      if (cardNumber < 3) {
        for(i=1;i<12;i++) {
        if (cards[i].ig == cards[i].igA) {
          selected[i] = true;
        }
        }
      }
      for(i=1;i<12;i++) {
        if (cards[i].ig == cards[i].igS && mouseX > cards[i].x*wX && mouseX < (cards[i].x+cards[i].width/2)*wX && mouseY > cards[i].y*wX && mouseY < (cards[i].y+cards[i].height)*wX) {
          selected[i] = false;
        }
        }
    }
}