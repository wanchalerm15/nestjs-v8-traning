import { Injectable } from '@nestjs/common';
import { SignupDto } from '../dto/signup.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenService {

    /** สำหรับสมัครสมาชิก */
    async onSignup(model: SignupDto) {
        model.password = await bcrypt.hash(model.password, 10);
        return model;
    }

}
