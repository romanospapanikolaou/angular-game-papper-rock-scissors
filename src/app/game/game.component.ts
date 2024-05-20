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

  play(choice: string): void {
    this.playerChoice = choice;
    this.computerChoice = this.choices[Math.floor(Math.random() * 3)];
    this.result = this.determineWinner(this.playerChoice, this.computerChoice);
  }

  determineWinner(player: string, computer: string): string {
    if (player === computer) {
      return "It's a tie!";
    }
    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      return 'You win!';
    }
    return 'You lose!';
  }
}
