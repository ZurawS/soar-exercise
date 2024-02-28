import { NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RowEvent } from '../../models/eventsData.model';

@Component({
  selector: 'app-tabs-row',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tabs-row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsRowComponent {
  @Input() rowEvents: RowEvent[] = [];
  @Output() showDetails = new EventEmitter<string>();

  onClick(id: string) {
    this.showDetails.emit(id);
  }

  formatTimestamp(timestamp: string) {
    return timestamp.split('T')[1].split('.')[0];
  }
}
