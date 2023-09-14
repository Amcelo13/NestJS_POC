import { Injectable } from "@nestjs/common";
import { ReportType } from "src/data";
import { ReportService } from "src/report/report.service";

@Injectable()
export class SummaryService {
  constructor(private readonly reportService: ReportService) {}
  
  calculateSummary() {
    const totalExpense = this.reportService.getAllIncomeReports1(ReportType.EXPENSE)
    .reduce((sum, report) => sum + report.amount , 0)
    const totalIncome = this.reportService.getAllIncomeReports1(ReportType.INCOME)
    .reduce((sum, report) => sum + report.amount , 0)
     
    return {
        totalExpense,
        totalIncome,
        netIncome:totalIncome - totalExpense
    } 
  }
}
