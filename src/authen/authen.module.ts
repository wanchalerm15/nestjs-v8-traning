import { Module } from '@nestjs/common';
import { AuthenService } from './services/authen.service';
import { AuthenController } from './authen.controller';

@Module({
  controllers: [AuthenController],
  providers: [AuthenService]
})
export class AuthenModule { }
