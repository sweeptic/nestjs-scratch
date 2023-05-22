import { Controller, Get } from '@nestjs/common';

@Controller() // controller
export class AppController {
  @Get() // route handler
  getRootRoute() {
    return 'hi there';
  }
}
