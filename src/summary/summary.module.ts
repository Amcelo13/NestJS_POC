import { Module } from '@nestjs/common';
import { SummaryController } from './summary.controller';
import { SummaryService } from './summary.service';
import { ReportModule } from 'src/report/report.module';
// import { ReportService } from 'src/report/report.service';

@Module({
  // instead of adding every single service manually in providers, we can use imports
  // to import the module that contains the services we need direclty
  // by exporting the services in that module, we 
  imports: [ReportModule],
  controllers: [SummaryController],
  providers: [SummaryService]
})
export class SummaryModule {}
