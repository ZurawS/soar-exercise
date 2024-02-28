export interface SoarData {
  CreatorUserId: null;
  Events: {
    isFavourite?: boolean;
    _fields: {
      BaseEventIds: string[];
      ParentEventId: number;
      DeviceVendor: string;
      DeviceProduct: string;
      DeviceEventClassId: string;
    };
    _rawDataFields: {
      [key: string]: string;
    };
    Environment?: string | null;
    SourceSystemName?: string | null;
    Extensions: {
      Key: string;
      Value: string;
    }[];
  }[];
  Environment: string;
  SourceSystemName: string;
  Extensions: {
    Key: string;
    Value: string;
  }[];
  TicketId?: string | null;
  Description?: string | null;
  DisplayId?: string | null;
  Reason?: string | null;
  Name?: string | null;
  DeviceVendor?: string | null;
  DeviceProduct?: string | null;
  StartTime?: number | null;
  EndTime?: number | null;
  Type?: number | null;
  Priority?: number | null;
  RuleGenerator?: string | null;
  SourceGroupingIdentifier?: string | null;
  PlaybookTriggerKeywords?: string[];
  Attachments?: [] | null;
  IsTrimmed?: boolean | null;
  DataType?: number | null;
  SourceType?: number | null;
  SourceSystemUrl?: string | null;
  SourceRuleIdentifier?: string | null;
  SiemAlertId?: string | null;
  __CorrelationId?: string | null;
}
