import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './components/game/game.component';
import { CardComponent } from './components/card/card.component';
import { PlayerHandComponent } from './components/player-hand/player-hand.component';
import { DealerHandComponent } from './components/dealer-hand/dealer-hand.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GameComponent,
    CardComponent,
    PlayerHandComponent,
    DealerHandComponent
  ]
})
export class GameModule { }
