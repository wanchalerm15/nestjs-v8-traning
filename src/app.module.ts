import { Module } from '@nestjs/common';
import { AuthenModule } from './authen/authen.module';

@Module({
  imports: [AuthenModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
