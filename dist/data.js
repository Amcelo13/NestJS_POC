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
            id: '7f01ecee-7621-4bf5-a24a-ca61fa3087cd',
            source: 'FOOD',
            amount: 2000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE,
        },
        {
            id: '1926ae74-ff9b-48b3-a603-c833de7421ae',
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
    amount: 5000,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.EXPENSE,
});
//# sourceMappingURL=data.js.map