import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private gameMode: BehaviorSubject<string> = new BehaviorSubject<string>('normal');
  public gameModeSignal = this.gameMode.asObservable();

  private points: BehaviorSubject<string> = new BehaviorSubject<string>('0');
  public pointsSignal = this.points.asObservable();

  private isPLaying: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public playingSignal = this.isPLaying.asObservable();

  private playerChoice: BehaviorSubject<string> = new BehaviorSubject<string>('hold');
  public playerChoiceSignal = this.playerChoice.asObservable();

  private houseChoice: BehaviorSubject<string> = new BehaviorSubject<string>('hold');
  public houseChoiceSignal = this.houseChoice.asObservable();

  private winner: BehaviorSubject<string> = new BehaviorSubject<string>('hold');
  public winnerSignal = this.winner.asObservable();

  private gameEnd: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public gameEndSignal = this.gameEnd.asObservable();

  private gameNormal: string[] = ['rock', 'paper', 'scissors'];
  private gameBonus: string[] = ['rock', 'paper', 'scissors', 'lizard', 'spock'];



  constructor() { }

  public getRockPaperScissorsGamePoints() {
    const points = localStorage.getItem('rockPaperScissorsGamePoints');

    if (points) {
      this.points.next(points);
    } else {
      this.setRockPaperScissorsGamePoints('0');
    }
  }

  private setRockPaperScissorsGamePoints(points: string) {
    this.points.next(points);
    localStorage.setItem('rockPaperScissorsGamePoints', points);
  }

  public getLizardSpockPoints() {
    const points = localStorage.getItem('lizardSpockGamePoints');

    if (points) {
      this.points.next(points);
    } else {
      this.setLizardSpockPoints('0');
    }
  }

  private setLizardSpockPoints(points: string) {
    this.points.next(points);
    localStorage.setItem('lizardSpockGamePoints', points.toString());
  }

  public setGameMode(mode: string) {
    this.gameMode.next(mode);
  }

  public playGameRockPaperScissors(playerOption: string) {
    this.playerChoice.next(playerOption);
    this.isPLaying.next(true);

    setTimeout(() => {

      if (this.gameMode.value == 'normal') {
        this.houseChoice.next(this.chooseHouseOption(this.gameNormal));
        this.winner.next(this.checkWinnerGameRockPaperScissors());
      } else {
        this.houseChoice.next(this.chooseHouseOption(this.gameBonus));
        this.winner.next(this.checkWinnerGameRockPaperScissorsLizardSpock());
      }

      switch (this.winner.value) {
        case 'player':
          this.addPoint();
          break;
        case 'house':
          break;
        case 'draw':
          break;
      }


      this.gameEnd.next(true);
    }, 1000);
  }

  private chooseHouseOption(gameOptions: string[]) {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)];
  }

  private checkWinnerGameRockPaperScissors(): string {
    const houseChoice = this.houseChoice.value;
    const playerOption = this.playerChoice.value;

    if (playerOption == houseChoice) {
      return 'draw';
    }

    if (playerOption == 'rock' && houseChoice == 'scissors') {
      return 'player';
    } else if (playerOption == 'rock' && houseChoice == 'paper') {
      return 'house';
    }

    if (playerOption == 'paper' && houseChoice == 'rock') {
      return 'player';
    } else if (playerOption == 'paper' && houseChoice == 'scissors') {
      return 'house';
    }

    if (playerOption == 'scissors' && houseChoice == 'paper') {
      return 'player';
    } else if (playerOption == 'scissors' && houseChoice == 'rock') {
      return 'house';
    }

    return 'draw';
  }
  private checkWinnerGameRockPaperScissorsLizardSpock(): string {
    const houseChoice = this.houseChoice.value;
    const playerOption = this.playerChoice.value;

    if (playerOption == houseChoice) {
      return 'draw';
    }

    if (playerOption == 'rock' && (houseChoice == 'scissors' || houseChoice == 'lizard')) {
      return 'player';
    } else if (playerOption == 'rock' && (houseChoice == 'paper' || houseChoice == 'spock')) {
      return 'house';
    }

    if (playerOption == 'paper' && (houseChoice == 'rock' || houseChoice == 'spock')) {
      return 'player';
    } else if (playerOption == 'paper' && (houseChoice == 'scissors' || houseChoice == 'lizard')) {
      return 'house';
    }

    if (playerOption == 'scissors' && (houseChoice == 'paper' || houseChoice == 'lizard')) {
      return 'player';
    } else if (playerOption == 'scissors' && (houseChoice == 'rock' || houseChoice == 'spock')) {
      return 'house';
    }

    if (playerOption == 'lizard' && (houseChoice == 'spock' || houseChoice == 'paper')) {
      return 'player';
    } else if (playerOption == 'lizard' && (houseChoice == 'rock' || houseChoice == 'scissors')) {
      return 'house';
    }

    if (playerOption == 'spock' && (houseChoice == 'rock' || houseChoice == 'scissors')) {
      return 'player';
    } else if (playerOption == 'spock' && (houseChoice == 'paper' || houseChoice == 'lizard')) {
      return 'house';
    }

    return 'draw';
  }

  private addPoint() {
    let points: number = parseInt(this.points.value);
    points++;
    if (this.gameMode.value == 'normal') {
      this.setRockPaperScissorsGamePoints(points.toString());
    } else {
      this.setLizardSpockPoints(points.toString());
    }
  }


  public restartGame() {
    this.isPLaying.next(false);
    this.houseChoice.next('hold');
    this.winner.next('hold');
    this.gameEnd.next(false);
  }
}
