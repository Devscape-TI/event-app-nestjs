import { Module } from '@nestjs/common';
import { AppController } from './default/app.controller';
import { AppService1Controller } from './microsservice1/app.service1.controller';
import { AppService2Controller } from './microsservice2/app.service2.controller';
import { AppService3Controller } from './microsservice3/app.service3.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    AppService1Controller,
    AppService2Controller,
    AppService3Controller,
  ],
  providers: [],
})
export class AppModule {}
