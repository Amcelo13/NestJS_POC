import { ReportType } from "./data";
interface ReportData {
    amount: number;
    source: string;
}
interface UpdateReportData {
    amount?: number;
    source?: string;
}
export declare class AppService {
    getAllIncomeReports1(type: ReportType): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[];
    getReportById(type: ReportType, id: string): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
    createReport(type: ReportType, { amount, source }: ReportData): {
        id: any;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
    updateReport(type: ReportType, id: string, body: UpdateReportData): {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    } | "Not found";
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
