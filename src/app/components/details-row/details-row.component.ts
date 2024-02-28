import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
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
  @Output() chooseAlert: EventEmitter<string> = new EventEmitter<string>();
  @Input() currentlySelectedEvent: EventDetails | undefined;
}
