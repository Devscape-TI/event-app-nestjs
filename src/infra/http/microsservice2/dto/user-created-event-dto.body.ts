import { ApiProperty } from '@nestjs/swagger';

export class UserCreatedEventDtoBody {
  @ApiProperty()
  Type: string;

  @ApiProperty()
  MessageId: string;

  @ApiProperty()
  Token: string;

  @ApiProperty()
  TopicArn: string;

  @ApiProperty()
  Message: string;

  @ApiProperty()
  SubscribeURL: string;

  @ApiProperty()
  Timestamp: string;

  @ApiProperty()
  SignatureVersion: string;

  @ApiProperty()
  Signature: string;

  @ApiProperty()
  SigningCertURL: string;
}
