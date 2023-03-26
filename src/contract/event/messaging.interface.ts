export interface IMessaging {
  publisher(event: string, data: any);
  subscriber(event: string);
}
