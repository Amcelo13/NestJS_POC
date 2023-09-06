import {Controller,Delete,Get,Post,Param,Put,Body,HttpCode,ParseUUIDPipe,ParseEnumPipe} from "@nestjs/common";
import { ReportType, data } from "src/data";
import { ReportService} from "./report.service";
import { CreateReportDto, ReportResponseDTO, UpdateReportDto } from "src/dtos/report.dto";

//Controllers are the classes used to make different endpoints of an API
@Controller("report/:type")
export class ReportController {

  constructor(private readonly reportService: ReportService) {}

  //Get All the things
  @Get()
  getAllIncomeReports1(@Param("type", new ParseEnumPipe(ReportType)) type: string):ReportResponseDTO[] {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getAllIncomeReports1(reportType)
  }

  // @Get('array')
  // getAllIncomeReports2() {
  //   return []
  // }

  //Get the specific thing
  @Get(":id")
  getSpeicificIncomeReport(
    @Param("type",new ParseEnumPipe(ReportType)) type: string , @Param("id", ParseUUIDPipe) id: string
    ):ReportResponseDTO{
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.getReportById(reportType, id)
  }

  //Post a thing
  @Post()               //or body: { amount: number; type: string })
  addingIncomeReport(
    @Body() body: CreateReportDto,
    @Param("type", new ParseEnumPipe(ReportType)) type: string
  ):ReportResponseDTO {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.reportService.createReport(reportType, body )
  }

  //Update a thing
  @Put(":id")
  updatingIncomeReport(
    @Body() body: UpdateReportDto, @Param("id", ParseUUIDPipe) id: string,
    @Param("type", new ParseEnumPipe(ReportType)) type: string): ReportResponseDTO | string{
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return this.reportService.updateReport(reportType, id, body)
  }

  //Delete a thing
  @HttpCode(204)
  @Delete(":id")
  deletingIncomeReport(@Param("id", ParseUUIDPipe) id: string) {
    return this.reportService.deleteReport(id)
  }

}
