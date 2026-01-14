// Decorators
import { Controller, Get, UseGuards, Post, Request, Body, Delete, Param } from "@nestjs/common";

// Services
import { VkmService } from "./vkm.service";
import { UsersService } from "src/users/users.service";

// Entities
import { Vkm } from "./vkm.entity";

// Guards
import { AuthGuard } from "src/auth/auth.guard";

// DTO's
import { ModuleDto } from "./dto/module.dto";

@Controller('vkm')
export class VkmController {
  constructor(
    private readonly vkmService: VkmService,
    private readonly usersService: UsersService
  ) { }

  @Get()
  async findAll(): Promise<Vkm[]> {
    return await this.vkmService.findAll();
  }

  @UseGuards(AuthGuard)
  @Post('users')
  async addModule(@Request() req: any, @Body() moduleDto: ModuleDto): Promise<void> {
    console.log(req['sub'], moduleDto);
    await this.usersService.addModule(req['sub'].email, moduleDto.index);
  }

  @UseGuards(AuthGuard)
  @Delete('users/:index')
  async deleteModule(@Request() req: any, @Param('index') index: number): Promise<void> {
    console.log(req['sub'], index);
    await this.usersService.deleteModule(req['sub'].email, index);
  }
}
