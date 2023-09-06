import { SummaryService } from "./summary.service";
export declare class SummaryController {
    private readonly summaryService;
    constructor(summaryService: SummaryService);
    getSummary(): {
        totalExpense: number;
        totalIncome: number;
        netIncome: number;
    };
}
