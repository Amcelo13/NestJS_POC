"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = exports.ReportType = void 0;
var ReportType;
(function (ReportType) {
    ReportType["INCOME"] = "income";
    ReportType["EXPENSE"] = "expense";
})(ReportType || (exports.ReportType = ReportType = {}));
exports.data = {
    report: [
        {
            id: 'uuid1',
            source: 'FOOD',
            amount: 2000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE,
        },
        {
            id: 'uuid',
            source: 'salary',
            amount: 1000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME,
        },
    ],
};
exports.data.report.push({
    id: 'uuid',
    source: 'salary',
    amount: 1000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME,
});
exports.data.report.push({
    id: 'uuid1',
    source: 'home',
    amount: 2000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME,
});
exports.data.report.push({
    id: 'uuid1',
    source: 'FOOD',
    amount: 2000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE,
});
//# sourceMappingURL=data.js.map