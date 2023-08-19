import { ExecutionContext, CallHandler, NestInterceptor } from "@nestjs/common";
export declare class CustomInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler): import("rxjs").Observable<any>;
}
