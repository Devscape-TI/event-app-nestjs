import { IMessagePublisherProvider } from './../message-publisher-provider.interface';

export class PublisherKafkaProvider implements IMessagePublisherProvider {
  execute(event: string, payload: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
