import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class SignUpData {
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @MaxLength(16)
  @MinLength(8)
  password: string;
}
}
