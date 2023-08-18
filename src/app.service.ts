import { data, ReportType } from "./data";
import { Injectable } from "@nestjs/common";
import {v4} from 'uuid'

interface ReportData {
  amount: number
  source: string
}

@Injectable()
export class AppService {

  getAllIncomeReports1(type: ReportType){
    return data.report.filter((report) => report.type === type)
  }


  getReportById(type: ReportType, id: string){
    return data.report.filter((report)=> report.type === type)
    .find((report)=> report.id === id)
  }


  createReport(type: ReportType, {amount, source}:ReportData){
    const newReport = {
      id: v4(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type
    };
    data.report.push(newReport);
    return newReport;
  }


  updateReport(type: ReportType, id:string, body:ReportData){
    const reportToUpdate = data.report
    .filter((report) => report.type === type)
    .find((report) => report.id === id);
    if (!reportToUpdate) {
      return "Not found";
    }
    else{
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


  deleteReport(id:string){
    const reportIndex = data.report.findIndex((report) => (report.id = id));

    if (reportIndex === -1) return "Not found";

    data.report.splice(reportIndex, 1);
    return data.report[reportIndex];

  } 

} 