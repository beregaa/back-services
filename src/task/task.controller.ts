import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // @Get('/:id/:shmaidi/:baidi')
  // findAll(@Param('id') id: string , @Param('shmaidi') shmaidi:string , @Param('baidi') baidi: string) {
  //   return `dedamiwa ${id} guli pranchva ${shmaidi} gadaugnavs ${baidi}`;
  // }

  @Post(':shmaidi/bla')
  create(@Param() params) {
    console.log(params);
  }

  // @Put('bla/:kaiti/bla')
  // update(@Param('kaiti') id:string) {
  //   return `qatami remi ${id}`;
  // }
}
