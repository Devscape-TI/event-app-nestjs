import { IMessaging } from 'src/contract/event/messaging.interface';
import { IMessagePublisherProvider } from '../message-publisher-provider.interface';

export class UserMessagingAdapter implements IMessaging {
  private _messageProviderEvent: IMessagePublisherProvider;

  constructor(messageEvent: IMessagePublisherProvider) {
    this._messageProviderEvent = messageEvent;
  }

  publisher(event: string, data: any) {
    this._messageProviderEvent.execute(event, data);
    console.log(`Event: ${event}`);
    console.log(`Payload: ${JSON.stringify(data)}`);
  }
  subscriber(event: string) {
    throw new Error('Method not implemented.');
  }
}
