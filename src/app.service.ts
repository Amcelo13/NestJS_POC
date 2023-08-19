import { data, ReportType } from "./data";
import { Injectable } from "@nestjs/common";
import {v4} from 'uuid'
import { ReportResponseDTO } from "./dtos/report.dto";

interface ReportData {
  amount: number
  source: string
}
interface UpdateReportData  {
  amount?: number
  source?: string
}

@Injectable()
export class AppService {

  getAllIncomeReports1(type: ReportType):ReportResponseDTO[]{
    return data.report.filter((report) => report.type === type)
    .map((report)=> new ReportResponseDTO(report))
  }

  getReportById(type: ReportType, id: string): ReportResponseDTO{
   const report =  data.report.filter((report)=> report.type === type).find((report)=> report.id === id)

   if(!report) return 

   return new ReportResponseDTO(report)
  }

  createReport(type: ReportType, {amount, source}:ReportData):ReportResponseDTO{
    const newReport = {
      id: v4(),
      source,
      amount,
      created_at: new Date(),
      updated_at: new Date(),
      type
    };
    data.report.push(newReport);
    return new ReportResponseDTO(newReport);
  }

  updateReport(type: ReportType, id:string, body:UpdateReportData):ReportResponseDTO | string{
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
      return new ReportResponseDTO(data.report[reportIndex]);
    }
  }

  deleteReport(id:string){
    const reportIndex = data.report.findIndex((report) => (report.id = id));

    if (reportIndex === -1) return "Not found";

    data.report.splice(reportIndex, 1);
    return data.report[reportIndex];

  } 

} 