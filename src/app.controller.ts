import {
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
  Body,
  HttpCode,
  ParseUUIDPipe,
  ParseEnumPipe,
} from "@nestjs/common";
import { ReportType, data } from "./data";
import { AppService } from "./app.service";
import { CreateReportDto, UpdateReportDto } from "./dtos/report.dto";

//Controllers are the classes used to make different endpoints of an API
@Controller("report/:type")
export class AppController {

  constructor(private readonly appService: AppService) {}

  //Get All the things
  @Get()
  getAllIncomeReports1(@Param("type", new ParseEnumPipe(ReportType)) type: string) {
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
    @Param("type",new ParseEnumPipe(ReportType)) type: string , @Param("id", ParseUUIDPipe) id: string
    ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getReportById(reportType, id)
  }

  //Post a thing
  @Post() //or body: { amount: number; type: string })
  addingIncomeReport(
    @Body() { source, amount}: CreateReportDto,
    @Param("type", new ParseEnumPipe(ReportType)) type: string
  ) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.createReport(reportType, {amount, source} )
  }

  //Update a thing
  @Put(":id")
  updatingIncomeReport(
    @Body() body: UpdateReportDto, @Param("id", ParseUUIDPipe) id: string,
    @Param("type", new ParseEnumPipe(ReportType)) type: string) {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.updateReport(reportType, id, body)
  }

  //Delete a thing
  @HttpCode(204)
  @Delete(":id")
  deletingIncomeReport(@Param("id", ParseUUIDPipe) id: string) {
    return this.appService.deleteReport(id)
  }
}
