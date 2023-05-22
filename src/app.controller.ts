import { Controller, Get } from '@nestjs/common';

@Controller('/app') // controller
export class AppController {
  @Get('/asdf') // route handler
  getRootRoute() {
    return 'hi there';
  }

  @Get('/bye') // route handler
  getByeThere() {
    return 'bye there';
  }
}
