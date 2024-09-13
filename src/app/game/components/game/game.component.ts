import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GameService } from '../../game.service';
import { DealerHandComponent } from "../dealer-hand/dealer-hand.component";
import { PlayerHandComponent } from "../player-hand/player-hand.component";

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, DealerHandComponent, PlayerHandComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  result: string = '';

  constructor(public gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.resetGame();
  }

  hit(): void {
    this.gameService.dealToPlayer();
    if (this.gameService.isPlayerBusted()) {
      this.result = 'You busted! Dealer wins.';
    }
  }

  stand(): void {
    this.gameService.dealerPlay();
    if(this.gameService.isGameOver()) {
      this.result = this.gameService.endingMessage();
    }
  }

  playAgain(): void {
    this.result = '';
    this.gameService.resetGame();
  }
}
