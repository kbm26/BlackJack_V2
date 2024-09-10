import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppInitializationModule } from './app-initialization.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { ViewsModule } from './views/views.module';
import { GameModule } from './game/game.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { SettingModule } from './setting/setting.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppInitializationModule,
    CoreModule,
    LayoutModule,
    SharedModule,
    ViewsModule,
    GameModule,
    LeaderboardModule,
    ScoreboardModule,
    SettingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
