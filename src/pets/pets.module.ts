import { Module } from '@nestjs/common';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pet]),
    AuthModule,
  ],
  controllers: [PetsController],
  providers: [PetsService],
  exports: [
    PetsService,
    TypeOrmModule,
  ],
})
export class PetsModule {}