import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
  } from '@nestjs/common';
  import { LoginGuard, Public } from './login.guard';
  import { LoginService } from './login.service';
  
  @Controller('login')
  export class LoginController {
    constructor(private loginService: LoginService) {}
  
    @HttpCode(HttpStatus.OK)
    @Public()
    @Post('')
    signIn(@Body() signInDto: Record<string, any>) {
      return this.loginService.signIn(signInDto.username, signInDto.password);
    }
  }