import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VisualizerComponent } from './components/visualizer/visualizer.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgIconsModule } from '@ng-icons/core';
import {
  matAddCircleRound,
  matSettingsBackupRestoreRound,
  matRemoveCircleRound,
} from '@ng-icons/material-icons/round';

@NgModule({
  declarations: [
    AppComponent,
    VisualizerComponent,
    CalculatorComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgIconsModule.withIcons({
      matAddCircleRound,
      matSettingsBackupRestoreRound,
      matRemoveCircleRound,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
