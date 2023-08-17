import { Controller, Delete, Get, Post, Param } from '@nestjs/common';
import { data } from './data';

//Controllers are the classes used to make different endpoints of an API
@Controller('report/:type')
export class AppController {

  //Get All the things
  @Get()
  getAllIncomeReports1(@Param('type') type: string) {
    console.log(type, ': type is');
    return [];
  }

  // @Get('array')
  // getAllIncomeReports2() {
  //   return []
  // }

  //Get the specific thing
  @Get(':id')
  getSpeicificIncomeReport() {
    return 'Params get request';
  }

  //Post a thing
  @Post()
  addingIncomeReport() {
    return 'Created';
  }

  //Update a thing
  @Post(':id')
  updatingIncomeReport() {
    return 'Updated';
  }

  //Delete a thing
  @Delete(':id')
  deletingIncomeReport() {
    return 'Deleted';
  }
}
