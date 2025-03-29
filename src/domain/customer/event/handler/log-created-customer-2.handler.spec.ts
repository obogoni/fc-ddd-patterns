import LogCreatedCustomer2Handler from "./log-created-customer-2.handler";
import CustomerCreatedEvent from "../customer-created.event";

describe("LogCreatedCustomer2Handler", () => {
  it("should log the correct message when handling CustomerCreatedEvent", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const eventData = { id: "123", name: "John Doe" };
    const event = new CustomerCreatedEvent(eventData);
    const handler = new LogCreatedCustomer2Handler();

    handler.handle(event);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Esse é o segundo console.log do evento: CustomerCreated"
    );

    consoleSpy.mockRestore();
  });
});

