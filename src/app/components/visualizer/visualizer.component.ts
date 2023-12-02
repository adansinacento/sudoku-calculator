import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
})
export class VisualizerComponent {
  @Input('sum') options: number[] = [];

  @Output() hide = new EventEmitter<number[]>();

  onHide() {
    this.hide.emit(this.options);
  }
}
