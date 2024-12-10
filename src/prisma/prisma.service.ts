import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  //ao instanciar esse serviço conecta no prisma
  async onModuleInit() {
    await this.$connect();
  }
}
