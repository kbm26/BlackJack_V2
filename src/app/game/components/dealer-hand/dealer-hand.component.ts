import { Component } from '@angular/core';
import { GameService } from '../../game.service';
import { CardComponent } from "../card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dealer-hand',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './dealer-hand.component.html',
  styleUrl: './dealer-hand.component.css'
})
export class DealerHandComponent {
  constructor(public gameService: GameService) {}
}
