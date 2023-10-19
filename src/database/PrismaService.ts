import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient
    implements OnModuleInit {

    async onModuleInit() {
        console.log('Conectando ao banco de dados...');
        await this.$connect();
        console.log('Conexão ao banco de dados estabelecida.');
    }

}