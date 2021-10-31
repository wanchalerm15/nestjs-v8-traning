import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthenService } from './services/authen.service';
import { SignupDto } from './dto/signup.dto';

@ApiTags("Authentication")
@Controller('authen')
export class AuthenController {
  constructor(private readonly authenService: AuthenService) { }

  @ApiOperation({ summary: "ลงทะเบียนสมัครสมาชิก" })
  @Post('Signup')
  Signup(@Body() model: SignupDto) {
    return this.authenService.onSignup(model);
  }

}
