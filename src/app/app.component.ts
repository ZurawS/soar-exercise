import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderRowComponent } from './components/header-row/header-row.component';
import { TabsRowComponent } from './components/tabs-row/tabs-row.component';
import { DetailsRowComponent } from './components/details-row/details-row.component';
import testDataPlaceholder from '../assets/testDataPlaceholder';
import { SoarData } from './models/SoarData.model';
import { EventDetails, RowEvent } from './models/eventsData.model';
import { KeyValueMap } from './models/KeyValueMap.model';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderRowComponent,
    TabsRowComponent,
    DetailsRowComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // [TEST DATA placeholder]
  // Because of no unique ID in "_rawDataFields" I had to create them myself
  soarData: SoarData = testDataPlaceholder;
  currentlySelectedEvent: EventDetails | undefined;

  get eventTypeHeader(): string {
    const eventsMap = new Map<string, number>();
    this.soarData.Events.map((event) => {
      if (eventsMap.has(event._rawDataFields['event_metadata_eventType'])) {
        eventsMap.set(
          event._rawDataFields['event_metadata_eventType'],
          (eventsMap.get(event._rawDataFields['event_metadata_eventType']) ||
            0) + 1
        );
      } else {
        eventsMap.set(event._rawDataFields['event_metadata_eventType'], 1);
      }
    });
    return this.findMaxKeyInMap(eventsMap) || '';
  }

  get rowEvents(): RowEvent[] {
    const rowEventsArray: RowEvent[] = this.soarData.Events.map((event) => {
      const data = event._rawDataFields;
      return {
        id: data['id'],
        eventType: data['event_metadata_eventType'],
        timestamp: data['event_metadata_eventTimestamp'],
      };
    });
    return rowEventsArray;
  }

  ngOnInit(): void {
    this.currentlySelectedEvent = this.formatRawDataFields(
      this.soarData.Events[0]._rawDataFields
    );
    this.soarData = {
      ...this.soarData,
      Events: [
        ...this.soarData.Events,
        ...this.soarData.Events.map((event, index) => {
          return {
            ...event,
            _rawDataFields: {
              ...event._rawDataFields,
              customId: event._rawDataFields['id'] + index,
            },
          };
        }),
      ],
    };
  }

  displayEventDetails(id: string) {
    const rawDataFields = this.soarData.Events.find(
      (event) => event._rawDataFields['id'] === id
    )?._rawDataFields;

    if (!rawDataFields) {
      return;
    }

    this.currentlySelectedEvent = this.formatRawDataFields(rawDataFields);
  }

  searchControl(searchValue: string) {
    console.log({ searchValue });
  }

  private formatRawDataFields(rawDataFields: KeyValueMap): EventDetails {
    const customRawDataFields = {
      id: rawDataFields['id'],
      isFovourite: rawDataFields['isFovourite'] === 'true',
      metadata: this.findValuesForKey(rawDataFields, 'metadata'),
      principal: this.findValuesForKey(rawDataFields, 'principal'),
      target: this.findValuesForKey(rawDataFields, 'target'),
      observer: this.findValuesForKey(rawDataFields, 'observer'),
      about: this.findValuesForKey(rawDataFields, 'about'),
      securityResult: this.findValuesForKey(rawDataFields, 'securityResult'),
      extensions: this.findValuesForKey(rawDataFields, 'extensions'),
    };

    console.log(customRawDataFields);

    return customRawDataFields;
  }

  private findValuesForKey(
    data: KeyValueMap,
    key: string
  ): KeyValue<string, string>[] {
    return Object.entries(data)
      .filter((data) => data[0].startsWith('event_' + key))
      .map((data) => ({
        key: data[0].split('event_' + key + '_')[1],
        value: data[1],
      }));
  }

  private findMaxKeyInMap(map: Map<string, number>): string | undefined {
    let maxKey: string | undefined;
    let maxValue: number = Number.MIN_SAFE_INTEGER;

    Array.from(map.entries()).forEach((value) => {
      const currentValue: number | undefined = map.get(value[0]);
      if (currentValue) {
        if (currentValue > maxValue) {
          maxKey = value[0];
          maxValue = currentValue;
        }
      }
    });

    return maxKey;
  }
}
