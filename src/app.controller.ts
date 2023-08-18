import {
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
  Body,
  HttpCode,
} from "@nestjs/common";
import { ReportType, data } from "./data";
import { v4 } from "uuid";
import { AppService } from "./app.service";

//Controllers are the classes used to make different endpoints of an API
@Controller("report/:type")
export class AppController {

  constructor(private readonly appService: AppService) {}

  //Get All the things
  @Get()
  getAllIncomeReports1(@Param("type") type: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getAllIncomeReports1(reportType)
  }

  // @Get('array')
  // getAllIncomeReports2() {
  //   return []
  // }

  //Get the specific thing
  @Get(":id")
  getSpeicificIncomeReport(
    @Param("type") type: string,
    @Param("id") id: string
  ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getReportById(reportType, id)
  }

  //Post a thing
  @Post() //or body: { amount: number; type: string })
  addingIncomeReport(
    @Body() { source, amount }: { amount: number; source: string },
    @Param("type") type: string
  ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.createReport(reportType, {amount, source} )
  }

  //Update a thing
  @Put(":id")
  updatingIncomeReport(
    @Body() body: { amount: number; source: string },
    @Param("id") id: string,
    @Param("type") type: string
  ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
      return this.appService.updateReport(reportType, id, body)
    }

  //Delete a thing
  @HttpCode(204)
  @Delete(":id")
  deletingIncomeReport(@Param("id") id: string) {
    return this.appService.deleteReport(id)
  }
}
