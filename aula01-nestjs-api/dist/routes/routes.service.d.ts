import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RoutesService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createRouteDto: CreateRouteDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRouteDto: UpdateRouteDto): string;
    remove(id: number): string;
}
