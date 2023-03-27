export interface IMessageReceiverProvider {
  execute(event: string): Promise<any>;
}
