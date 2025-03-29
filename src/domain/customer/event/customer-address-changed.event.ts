import EventInterface from "../../@shared/event/event.interface";

export class CustomerAddressChangedEvent implements EventInterface {
  dataTimeOccurred: Date;
  eventData: CustomerAddressChangedEventProps;

  constructor(eventData: CustomerAddressChangedEventProps) {
    this.dataTimeOccurred = new Date();
    this.eventData = eventData;
  }
}

export class CustomerAddressChangedEventProps {
  id: string;
  name: string;
  address: string;

  constructor(id: string, name: string, address: string) {
    this.id = id;
    this.name = name;
    this.address = address;
  }
}

