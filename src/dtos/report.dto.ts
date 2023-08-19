/* dto - DATA TRANSFER OBJECT */

import { IsNumber, IsPositive, IsString, IsNotEmpty,IsOptional } from "class-validator";
import {Exclude, Expose} from 'class-transformer';
import { ReportType } from "src/data";

//For req --> Body validations we use the class-validator package and class-transformer package
export class CreateReportDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @IsNotEmpty()
  source: string;
}

export class UpdateReportDto {
    
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: string;
}


//For res --> Body validations we use the class-transformer package
export class ReportResponseDTO{
  id: string;
  amount: number;
  source: string;
  created_at: Date; 
  
  @Exclude()
  updated_at: Date;
  type: ReportType;

}