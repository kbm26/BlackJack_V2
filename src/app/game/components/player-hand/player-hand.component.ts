import { Component } from '@angular/core';
import { GameService } from '../../game.service';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-hand',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './player-hand.component.html',
  styleUrl: './player-hand.component.css'
})
export class PlayerHandComponent {
  constructor(public gameService: GameService) {}
}
