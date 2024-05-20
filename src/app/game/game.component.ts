import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent {
  choices = ['Rock', 'Paper', 'Scissors'];
  playerChoice: string = '';
  computerChoice: string = '';
  result: string = '';

  winCount: number = 0;
  lossCount: number = 0;
  tieCount: number = 0;

  play(choice: string): void {
    this.playerChoice = choice;
    this.computerChoice = this.choices[Math.floor(Math.random() * 3)];
    this.result = this.determineWinner(this.playerChoice, this.computerChoice);
  }

  determineWinner(player: string, computer: string): string {
    if (player === computer) {
      this.tieCount++;
      return "It's a tie!";
    }
    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      this.winCount++;
      return 'You win!';
    }
    this.lossCount++;
    return 'You lose!';
  }
}
