"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportResponseDTO = exports.UpdateReportDto = exports.CreateReportDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CreateReportDto {
}
exports.CreateReportDto = CreateReportDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateReportDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateReportDto.prototype, "source", void 0);
class UpdateReportDto extends (0, swagger_1.PartialType)(CreateReportDto) {
}
exports.UpdateReportDto = UpdateReportDto;
class ReportResponseDTO {
    tranformeCreatedAt() {
        return this.created_at;
    }
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.ReportResponseDTO = ReportResponseDTO;
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], ReportResponseDTO.prototype, "created_at", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "createdAt" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReportResponseDTO.prototype, "tranformeCreatedAt", null);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], ReportResponseDTO.prototype, "updated_at", void 0);
//# sourceMappingURL=report.dto.js.map