import LogCustomerAddressChangedHandler from "./log-customer-address-changed.handler";
import { CustomerAddressChangedEvent, CustomerAddressChangedEventProps } from "../customer-address-changed.event";

describe("LogCustomerAddressChangedHandler", () => {
  it("should log the correct message when handling CustomerAddressChangedEvent", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const eventData = new CustomerAddressChangedEventProps("123", "João Doe", "Rua dos Bobos nº 0");
    const event = new CustomerAddressChangedEvent(eventData);
    const handler = new LogCustomerAddressChangedHandler();

    handler.handle(event);

    expect(consoleSpy).toHaveBeenCalledWith(
      `Endereço do cliente: ${eventData.id}, ${eventData.name} alterado para: ${eventData.address}`
    );

    consoleSpy.mockRestore();
  });
});

