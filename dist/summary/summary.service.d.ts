import { ReportService } from "src/report/report.service";
export declare class SummaryService {
    private readonly reportService;
    constructor(reportService: ReportService);
    calculateSummary(): {
        totalExpense: number;
        totalIncome: number;
        netIncome: number;
    };
}
