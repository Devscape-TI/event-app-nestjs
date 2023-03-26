import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import {
  ApiResponse,
  ApiOperation,
  ApiTags,
  ApiForbiddenResponse,
} from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  @ApiOperation({ summary: 'Get Health Check information' })
  @ApiResponse({ status: 200, description: 'OK!' })
  @ApiForbiddenResponse({
    description: 'Response given when a command tries to break a domain rule',
  })
  @Get('health')
  health(): { health: boolean } {
    return { health: true };
  }
}
