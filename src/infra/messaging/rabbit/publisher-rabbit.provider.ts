import { IMessagePublisherProvider } from './../message-publisher-provider.interface';

export class PublisherRabbitMqProvider implements IMessagePublisherProvider {
  execute(event: string, payload: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
