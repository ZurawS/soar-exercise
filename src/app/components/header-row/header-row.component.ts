import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-header-row',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header-row.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderRowComponent implements AfterViewInit {
  @Input() creatorUserID: string = '';
  @Input() eventsHeader: string = '';
  @Output() searchValueChange = new EventEmitter<string>();
  @Output() toggleFavourites = new EventEmitter<boolean>();
  readonly searchControl = new FormControl();

  get currentTimeStamp() {
    return new Date().toISOString();
  }

  ngAfterViewInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.searchValueChange.emit(value);
      });
  }

  toggleClicked(inputValue: any) {
    this.toggleFavourites.emit(inputValue.target.checked);
  }
}
