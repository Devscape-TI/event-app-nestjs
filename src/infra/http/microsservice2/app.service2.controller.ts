import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import {
  ApiResponse,
  ApiOperation,
  ApiTags,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { UserCreatedEventDtoBody } from './dto/user-created-event-dto.body';

@ApiTags('Device - Microsservice 2')
@Controller('device')
export class AppService2Controller {
  @ApiOperation({ summary: 'Listen event user created' })
  @ApiResponse({ status: 200, description: 'OK!' })
  @ApiForbiddenResponse({
    description: '',
  })
  @Post('sns/listen/event/created-user')
  listenEventUserCreated(@Req() req, @Body() body: UserCreatedEventDtoBody) {
    console.log('call event')
    console.log(req)
    console.log(body);
    const payloadMessage = JSON.stringify(body.Message);
    console.log(payloadMessage);
    return;
  }
}
