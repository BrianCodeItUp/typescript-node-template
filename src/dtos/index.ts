import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class SignupDto {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @MaxLength(16)
  @MinLength(8)
  password: string;
}

export class SigninDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string
}
