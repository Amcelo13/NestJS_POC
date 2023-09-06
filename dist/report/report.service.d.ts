import { ReportType } from "src/data";
import { ReportResponseDTO } from "src/dtos/report.dto";
interface ReportData {
    amount: number;
    source: string;
}
interface UpdateReportData {
    amount?: number;
    source?: string;
}
export declare class ReportService {
    getAllIncomeReports1(type: ReportType): ReportResponseDTO[];
    getReportById(type: ReportType, id: string): ReportResponseDTO;
    createReport(type: ReportType, { amount, source }: ReportData): ReportResponseDTO;
    updateReport(type: ReportType, id: string, body: UpdateReportData): ReportResponseDTO | string;
    deleteReport(id: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    } | "Not found";
}
export {};
