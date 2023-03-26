import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import {
  ApiResponse,
  ApiOperation,
  ApiTags,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { CreateUserDtoBody } from './dto/create-user-dto.body';
import { IMessaging } from './../../../contract/event/messaging.interface';
import { UserMessagingAdapter } from 'src/infra/messaging/adapter/user-messaging.adapter';
import { IMessagePublisherProvider } from './../../messaging/message-publisher-provider.interface';
import { PublisherTopicSnsAwsProvider } from './../../messaging/aws/sns/publisher-topic-sns-aws.provider';

@ApiTags('User - Microsservice 1')
@Controller('user')
export class AppService1Controller {
  private _messagingService: IMessaging;
  private _messagingProvider: IMessagePublisherProvider;

  constructor() {
    //abstrair para injecao de dependency a instancia das classes abaixo
    this._messagingProvider = new PublisherTopicSnsAwsProvider();
    this._messagingService = new UserMessagingAdapter(this._messagingProvider);
  }

  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 200, description: 'OK!' })
  @ApiForbiddenResponse({
    description: '',
  })
  @Post('create')
  create(@Req() req, @Body() body: CreateUserDtoBody) {
    //step 1: implementa regras de negocio de validacao e criacao do usuario

    //step 2: implement publicacao do evento de usuario cadastro
    this._messagingService.publisher('CREATED_USER', body);

    //obs: o step 1 e 2 devem ser implementados no usecase ou service
    // implementado no controlador para codigo de exemplo com foco no fluxo de mensageria

    return 'Action: Usuario cadastrado -> Event Publisher: CREATED_USER';
  }
}
