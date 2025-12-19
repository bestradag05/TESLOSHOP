import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeedService } from './seed.service';
import { ProductsService } from 'src/products/products.service';
import { validRoles } from 'src/auth/interfaces';
import { Auth } from 'src/auth/decorators';


@Controller('seed')
export class SeedController {
  constructor(
    private readonly seedService: SeedService
  ) {}

  @Get()
 /*  @Auth( validRoles.admin) */
  async executeSeed() {

    return this.seedService.runSeed();
  }


}
