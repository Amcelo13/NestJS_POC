import { ReportType } from "./data";
import { AppService } from "./app.service";
import { CreateReportDto, ReportResponseDTO, UpdateReportDto } from "./dtos/report.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllIncomeReports1(type: string): ReportResponseDTO[];
    getSpeicificIncomeReport(type: string, id: string): ReportResponseDTO;
    addingIncomeReport(body: CreateReportDto, type: string): ReportResponseDTO;
    updatingIncomeReport(body: UpdateReportDto, id: string, type: string): ReportResponseDTO | string;
    deletingIncomeReport(id: string): "Not found" | {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
}
