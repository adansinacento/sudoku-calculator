import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { VisualizerComponent } from './components/visualizer/visualizer.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizerComponent,
    CalculatorComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
