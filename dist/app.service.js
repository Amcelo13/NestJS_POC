"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const data_1 = require("./data");
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let AppService = exports.AppService = class AppService {
    getAllIncomeReports1(type) {
        return data_1.data.report.filter((report) => report.type === type);
    }
    getReportById(type, id) {
        return data_1.data.report.filter((report) => report.type === type)
            .find((report) => report.id === id);
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
        return newReport;
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
            return data_1.data.report[reportIndex];
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
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map