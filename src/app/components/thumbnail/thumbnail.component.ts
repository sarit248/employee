import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  @Input()
  public source: string; // Image source.

  @Input()
  public side: number; // Width/Height.

  @Input()
  public id: string;

  @Output()
  public emitter: EventEmitter<string> = new EventEmitter<string>();

  clickOnImage() {
    this.emitter.emit(this.id);
  }
}
