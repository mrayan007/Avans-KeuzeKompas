// Decorators
import { Controller, Get } from "@nestjs/common";

// Services
import { VkmService } from "./vkm.service";

// Entities
import { Vkm } from "./vkm.entity";

@Controller('vkm')
export class VkmController {
  constructor(private vkmService: VkmService) { }

  @Get()
  async findAll(): Promise<Vkm[]> {
    return await this.vkmService.findAll();
  }
}
