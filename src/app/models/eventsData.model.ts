import { KeyValue } from '@angular/common';

export interface RowEvent {
  id: string;
  customId: string;
  eventType: string;
  timestamp: string;
}

export interface EventDetails {
  id: string;
  customId: string;
  metadata: KeyValue<string, string>[];
  principal: KeyValue<string, string>[];
  target: KeyValue<string, string>[];
  observer: KeyValue<string, string>[];
  about: KeyValue<string, string>[];
  securityResult: KeyValue<string, string>[];
  extensions: KeyValue<string, string>[];
}
