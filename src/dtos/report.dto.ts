/* dto - DATA TRANSFER OBJECT */

import { IsNumber, IsPositive, IsString, IsNotEmpty,IsOptional } from "class-validator";

//For Body validations we use the class-validator package and class-transformer package
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