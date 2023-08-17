import { ReportType } from "./data";
export declare class AppController {
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
    addingIncomeReport({ source, amount }: {
        amount: number;
        source: string;
    }, type: string): {
        id: any;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    };
    updatingIncomeReport(body: {
        amount: number;
        source: string;
    }, id: string, type: string): {
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
