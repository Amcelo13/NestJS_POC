import {
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
  Body,
  HttpCode
} from "@nestjs/common";
import { ReportType, data } from "./data";
import { v4 } from "uuid";

//Controllers are the classes used to make different endpoints of an API
@Controller("report/:type")
export class AppController {
  //Get All the things
  @Get()
  getAllIncomeReports1(@Param("type") type: string) {
    //selecting type param from the url and assigning it to type variable
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    return data.report.filter((report) => report.type === reportType);
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
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;
    return data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
  }

  //Post a thing
  @Post() //or body: { amount: number; type: string })
  addingIncomeReport(
    @Body() { source, amount }: { amount: number; source: string },
    @Param("type") type: string
  ) {
    // console.log('body is : ', body);
    const newReport = {
      id: v4(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === "income" ? ReportType.INCOME : ReportType.EXPENSE,
    };
    data.report.push(newReport);
    return newReport;
  }

  //Update a thing
  @Put(":id")
  updatingIncomeReport(
    @Body() body: { amount: number; source: string },
    @Param("id") id: string,
    @Param("type") type: string
  ) {
    const reportType =
      type === "income" ? ReportType.INCOME : ReportType.EXPENSE;

    const reportToUpdate = data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);

    if (!reportToUpdate) {
      return "Not found";
    } else {
      const reportIndex = data.report.findIndex(
        (report) => report.id === reportToUpdate.id
      );
      //now updating the report
      data.report[reportIndex] = {
        //editing the previous values of report
        ...data.report[reportIndex],
        ...body,
      };
      return data.report[reportIndex];
    }
  }

  //Delete a thing
  @HttpCode(204)  
  @Delete(":id")
  deletingIncomeReport(@Param("id") id: string) {
    const reportIndex = data.report.findIndex((report) => report.id = id);

    if(reportIndex === -1) return "Not found"
    

    data.report.splice(reportIndex, 1);
    return data.report[reportIndex]
  }
}
