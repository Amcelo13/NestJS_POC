import { ReportType } from "src/data";
import { ReportService } from "./report.service";
import { CreateReportDto, ReportResponseDTO, UpdateReportDto } from "src/dtos/report.dto";
export declare class ReportController {
    private readonly reportService;
    constructor(reportService: ReportService);
    getAllIncomeReports1(type: string): ReportResponseDTO[];
    getSpeicificIncomeReport(type: string, id: string): ReportResponseDTO;
    addingIncomeReport(body: CreateReportDto, type: string): ReportResponseDTO;
    updatingIncomeReport(body: UpdateReportDto, id: string, type: string): ReportResponseDTO | string;
    deletingIncomeReport(id: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    } | "Not found";
}
