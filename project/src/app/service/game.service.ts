import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public getRockPaperScissorsGamePoints() {
    if (localStorage.getItem('rockPaperScissorsGamePoints') !== null) {
      return localStorage.getItem('rockPaperScissorsGamePoints');
    } else {
      this.setRockPaperScissorsGamePoints(0);
      return "0";
    }
  }

  private setRockPaperScissorsGamePoints(points: number) {
    localStorage.setItem('rockPaperScissorsGamePoints', points.toString());
  }

  public getLizardSpock() {
    if (localStorage.getItem('lizardSpockGamePoints')) {
      return localStorage.getItem('lizardSpockGamePoints');
    } else {
      this.setLizardSpock(0);
      return "0";
    }
  }

  private setLizardSpock(points: number) {
    localStorage.setItem('getLizardSpockGamePoints', points.toString());
  }
}
