import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './entities/appointments.entity';
import { AuthModule } from 'src/auth/auth.module';
import { PetsModule } from 'src/pets/pets.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Appointment]),
    AuthModule,
    PetsModule
  ],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
  exports:[AppointmentsService]
})
export class AppointmentsModule {}
