export declare enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}
interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[];
}
export declare const data: Data;
export {};
