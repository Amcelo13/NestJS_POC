/* dto - DATA TRANSFER OBJECT */
import {
  IsNumber,
  IsPositive,
  IsString,
  IsNotEmpty,
  IsOptional,
} from "class-validator";
import { Exclude, Expose } from "class-transformer";
import { ReportType } from "src/data";
import { PartialType } from "@nestjs/swagger";

//For [request --> Body] validations we use the class-validator package 
export class CreateReportDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;
}

export class UpdateReportDto extends PartialType(CreateReportDto) {}   //OR we can write every paramter with IsOptional() decorator

//For [response --> Body] validations we use the class-transformer package

export class ReportResponseDTO {
  id: string;
  amount: number
  source: string;
                                                                                       
  @Exclude()
  created_at: Date;
  @Expose({ name: "createdAt" }) //this is used to change the name of the property in the response
  tranformeCreatedAt() {
    return this.created_at;
  }

  @Exclude()
  updated_at: Date;
  type: ReportType;

  constructor(partial: Partial<ReportResponseDTO>) {
    //so it means partial is of type Partially similar to ReportResponseDTO class members
    Object.assign(this, partial);
  }
}
