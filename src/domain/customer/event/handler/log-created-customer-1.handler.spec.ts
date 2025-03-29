import LogCreatedCustomer1Handler from "./log-created-customer-1.handler";
import CustomerCreatedEvent from "../customer-created.event";

describe("LogCreatedCustomer1Handler", () => {
  it("should log the correct message when handling CustomerCreatedEvent", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const eventData = { id: "123", name: "John Doe" };
    const event = new CustomerCreatedEvent(eventData);
    const handler = new LogCreatedCustomer1Handler();

    handler.handle(event);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Esse é o primeiro console.log do evento: CustomerCreated"
    );

    consoleSpy.mockRestore();
  });
});

