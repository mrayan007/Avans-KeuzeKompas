// Decorators
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

// Repositories
import { Repository } from "typeorm";

// Entities
import { Vkm } from "./vkm.entity";

@Injectable()
export class VkmService {
  constructor(
    @InjectRepository(Vkm)
    private vkmRepository: Repository<Vkm>
  ) { }

  async findAll(): Promise<Vkm[]> {
    return await this.vkmRepository.find();
  }

  async findOne(id: number): Promise<Vkm> {
    const vkm = await this.vkmRepository.findOneBy({ id: id })

    if (!vkm) throw new NotFoundException();

    return vkm;
  }
}
