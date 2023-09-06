import { ReportType } from "src/data";
export declare class CreateReportDto {
    amount: number;
    source: string;
}
declare const UpdateReportDto_base: import("@nestjs/common").Type<Partial<CreateReportDto>>;
export declare class UpdateReportDto extends UpdateReportDto_base {
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
export {};
