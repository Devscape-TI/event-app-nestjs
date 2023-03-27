import { IMessaging } from 'src/contract/event/messaging.interface';
import { IMessagePublisherProvider } from '../message-publisher-provider.interface';
import { IMessageReceiverProvider } from '../message-receiver-provider.interface';

export class UserMessagingAdapter implements IMessaging {
  private _publisherProviderEvent: IMessagePublisherProvider;
  private _receiverProviderEvent: IMessageReceiverProvider;

  constructor(messageEvent: IMessagePublisherProvider) {
    this._publisherProviderEvent = messageEvent;
  }

  async publisher(event: string, data: any): Promise<void> {
    await this._publisherProviderEvent.execute(event, data);
    console.log(`Event: ${event}`);
    console.log(`Payload: ${JSON.stringify(data)}`);
  }

  async subscriber(event: string): Promise<any> {
    const message = await this._receiverProviderEvent.execute(event);
    console.log(`Event: ${event}`);
    console.log(`Payload: ${JSON.stringify(message)}`);
  }
}
