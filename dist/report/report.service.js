"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportService = void 0;
const data_1 = require("../data");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const report_dto_1 = require("../dtos/report.dto");
let ReportService = exports.ReportService = class ReportService {
    getAllIncomeReports1(type) {
        return data_1.data.report.filter((report) => report.type === type).map((report) => new report_dto_1.ReportResponseDTO(report));
    }
    getReportById(type, id) {
        const report = data_1.data.report.filter((report) => report.type === type).find((report) => report.id === id);
        if (!report)
            return;
        return new report_dto_1.ReportResponseDTO(report);
    }
    createReport(type, { amount, source }) {
        const newReport = {
            id: (0, uuid_1.v4)(),
            source,
            amount,
            created_at: new Date(),
            updated_at: new Date(),
            type
        };
        data_1.data.report.push(newReport);
        return new report_dto_1.ReportResponseDTO(newReport);
    }
    updateReport(type, id, body) {
        const reportToUpdate = data_1.data.report
            .filter((report) => report.type === type)
            .find((report) => report.id === id);
        if (!reportToUpdate) {
            return "Not found";
        }
        else {
            const reportIndex = data_1.data.report.findIndex((report) => report.id === reportToUpdate.id);
            data_1.data.report[reportIndex] = {
                ...data_1.data.report[reportIndex],
                ...body,
            };
            return new report_dto_1.ReportResponseDTO(data_1.data.report[reportIndex]);
        }
    }
    deleteReport(id) {
        const reportIndex = data_1.data.report.findIndex((report) => (report.id = id));
        if (reportIndex === -1)
            return "Not found";
        data_1.data.report.splice(reportIndex, 1);
        return data_1.data.report[reportIndex];
    }
};
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)()
], ReportService);
//# sourceMappingURL=report.service.js.map