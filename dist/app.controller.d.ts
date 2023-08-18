import { ReportType } from "./data";
import { AppService } from "./app.service";
import { CreateReportDto, UpdateReportDto } from "./dtos/report.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllIncomeReports1(type: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[];
    getSpeicificIncomeReport(type: string, id: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
    addingIncomeReport({ source, amount }: CreateReportDto, type: string): {
        id: any;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
    updatingIncomeReport(body: UpdateReportDto, id: string, type: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    } | "Not found";
    deletingIncomeReport(id: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    } | "Not found";
}
