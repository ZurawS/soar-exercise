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
  // code related to "customId" can be removed if in real version of the application field "id" is always unique
  iniitalSoarData: SoarData = testDataPlaceholder;
  soarData: SoarData | undefined;
  currentlySelectedEvent: EventDetails | undefined;
  isFavouritesView: boolean = false;

  get eventTypeHeader(): string {
    const eventsKeysSet = new Set<string>();
    this.soarData?.Events.forEach((event) => {
      eventsKeysSet.add(event._rawDataFields['event_metadata_eventType']);
    });
    return Array.from(eventsKeysSet).join(', ');
  }

  get rowEvents(): RowEvent[] {
    const rowEventsArray = this.soarData?.Events.map((event) => {
      const data = event._rawDataFields;
      return {
        id: data['id'],
        customId: data['customId'],
        eventType: data['event_metadata_eventType'],
        timestamp: data['event_metadata_eventTimestamp'],
      };
    });
    return rowEventsArray || [];
  }

  get isFavourite() {
    if (!this.currentlySelectedEvent?.customId) {
      return false;
    }
    const event = this.soarData?.Events.find(
      (event) =>
        event._rawDataFields['customId'] ===
        this.currentlySelectedEvent?.customId
    );

    return event?._rawDataFields['isFovourite'] === 'true';
  }

  ngOnInit(): void {
    this.iniitalSoarData = {
      ...this.iniitalSoarData,
      Events: [
        ...this.iniitalSoarData.Events.map((event, index) => {
          return {
            ...event,
            _rawDataFields: {
              ...event._rawDataFields,
              customId: event._rawDataFields['id'] + index,
              isFavourite: 'false',
            },
          };
        }),
      ],
    };

    this.soarData = this.iniitalSoarData;

    this.currentlySelectedEvent = this.formatRawDataFields(
      this.soarData?.Events[0]._rawDataFields
    );
  }

  displayEventDetails(id: string) {
    const rawDataFields = this.soarData?.Events.find(
      (event) => event._rawDataFields['customId'] === id
    )?._rawDataFields;

    if (!rawDataFields) {
      return;
    }

    this.currentlySelectedEvent = this.formatRawDataFields(rawDataFields);
  }

  toggleFovourites(customId: string) {
    if (!this.currentlySelectedEvent) {
      return;
    }

    const event = this.getEventWithId(customId);
    let isFavourite = false;

    if (event) {
      isFavourite = event._rawDataFields['isFovourite'] === 'true';
      event._rawDataFields['isFovourite'] =
        event._rawDataFields['isFovourite'] === 'true' ? 'false' : 'true';
    }

    if (this.isFavouritesView) {
      this.soarData = {
        ...this.soarData,
        Events: this.soarData!.Events.filter((event) => {
          return event._rawDataFields['customId'] !== customId;
        }),
      } as SoarData;
    }

    if (isFavourite && this.isFavouritesView) {
      this.currentlySelectedEvent = undefined;
    }
  }

  displayFavourites(inputValue: boolean) {
    if (!inputValue) {
      this.soarData = this.iniitalSoarData;
      this.isFavouritesView = false;
      this.currentlySelectedEvent = this.formatRawDataFields(
        this.soarData?.Events[0]._rawDataFields
      );
      return;
    }

    this.isFavouritesView = true;

    this.soarData = {
      ...this.iniitalSoarData,
      Events: this.iniitalSoarData.Events.filter((event) => {
        return event._rawDataFields['isFovourite'] === 'true';
      }),
    };

    console.log(this.soarData.Events.length);
    console.log(this.soarData);

    if (this.soarData.Events.length === 0) {
      this.currentlySelectedEvent = undefined;
    }
  }

  searchControl(searchValue: string) {}

  private getEventWithId(id: string) {
    return this.iniitalSoarData.Events.find(
      (event) => event._rawDataFields['customId'] === id
    );
  }

  private formatRawDataFields(rawDataFields: KeyValueMap): EventDetails {
    const customRawDataFields = {
      id: rawDataFields['id'],
      customId: rawDataFields['customId'],
      isFovourite: rawDataFields['isFovourite'] === 'true',
      metadata: this.findValuesForKey(rawDataFields, 'metadata'),
      principal: this.findValuesForKey(rawDataFields, 'principal'),
      target: this.findValuesForKey(rawDataFields, 'target'),
      observer: this.findValuesForKey(rawDataFields, 'observer'),
      about: this.findValuesForKey(rawDataFields, 'about'),
      securityResult: this.findValuesForKey(rawDataFields, 'securityResult'),
      extensions: this.findValuesForKey(rawDataFields, 'extensions'),
    };

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
}
