import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss'],
})
export class VisualizerComponent {
  @Input('sum') options: number[] = [];
}
