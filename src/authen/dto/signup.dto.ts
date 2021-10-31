import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Matches } from "class-validator";
import { Match } from "../decorator/match.decoration";

export class SignupDto {

    @ApiProperty()
    @IsNotEmpty()
    @Matches(/^[A-z0-9]{5,10}$/)
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @Matches(/^[A-z0-9]{5,10}$/)
    password: string;

    @ApiProperty()
    @IsNotEmpty()
    @Match("password")
    cpassword: string;

    @ApiProperty()
    firstname: string;

    @ApiProperty()
    lastname: string;

}