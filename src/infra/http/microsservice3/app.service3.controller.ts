import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import {
  ApiResponse,
  ApiOperation,
  ApiTags,
  ApiForbiddenResponse,
} from '@nestjs/swagger';

@ApiTags('Ticket - Microsservice 3')
@Controller('ticket')
export class AppService3Controller {
  @ApiOperation({ summary: 'Create Ticket' })
  @ApiResponse({ status: 200, description: 'OK!' })
  @ApiForbiddenResponse({
    description: 'Response given when a command tries to break a domain rule',
  })
  @Post('create')
  create() {
    return null;
  }
}
