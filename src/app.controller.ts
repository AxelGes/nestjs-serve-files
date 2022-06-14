import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { readFile } from 'fs/promises';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('image/:id')
  getImage(@Param('id') id, @Res() res) {
    const imgPath = id + '.png';
    return res.sendFile(imgPath, { root: 'public' });
  }

  @Get('/:id')
  async getData(@Param('id') id) {
    return JSON.parse(await readFile(`./public/${id}`, 'utf8'));
  }
}
