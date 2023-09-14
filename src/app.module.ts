import { ClassSerializerInterceptor, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { SummaryModule } from "./summary/summary.module";
import { ReportModule } from "./report/report.module";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose/dist/mongoose.module";
import { AuthModule } from './auth/auth.module';
// import { CustomInterceptor } from "./custom.interceptor";
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    SummaryModule,
    ReportModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      // useClass: CustomInterceptor,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
