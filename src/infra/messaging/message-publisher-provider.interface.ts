export interface IMessagePublisherProvider {
  execute(event: string, payload: any): Promise<void>;
}
