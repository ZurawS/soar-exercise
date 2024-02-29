import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
} from '@angular/core';
import { EventDetails } from '../../models/eventsData.model';

@Component({
  selector: 'app-details-row',
  standalone: true,
  imports: [NgFor],
  templateUrl: './details-row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsRowComponent {
  @HostBinding('style.overflow-y') private readonly overflow: string = 'auto';
  @Output() addToFovourites: EventEmitter<string> = new EventEmitter<string>();
  @Input() currentlySelectedEvent: EventDetails | undefined;
  @Input() isFavourite: boolean = false;

  addFavourite() {
    if (this.currentlySelectedEvent) {
      this.addToFovourites.emit(this.currentlySelectedEvent.customId);
    }
  }
}
