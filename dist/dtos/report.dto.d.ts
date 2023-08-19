import { ReportType } from "src/data";
export declare class CreateReportDto {
    amount: number;
    source: string;
}
export declare class UpdateReportDto {
    amount: number;
    source: string;
}
export declare class ReportResponseDTO {
    id: string;
    amount: number;
    source: string;
    created_at: Date;
    tranformeCreatedAt(): Date;
    updated_at: Date;
    type: ReportType;
    constructor(partial: Partial<ReportResponseDTO>);
}
