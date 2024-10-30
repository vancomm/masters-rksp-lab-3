import { Module } from '@nestjs/common';
import { AuthorsController } from './authors.controller';
import { AuthorsService } from './authors.service';
import { DatasourceModule } from 'src/datasource/datasource.module';

@Module({
    controllers: [AuthorsController],
    providers: [AuthorsService],
    imports: [DatasourceModule],
})
export class AuthorsModule {}
