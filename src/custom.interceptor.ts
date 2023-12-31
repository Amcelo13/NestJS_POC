import { NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common";
import { map } from "rxjs";

export class CustomInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    console.log("Intercepting the request");
    console.log({context});

    // It is going to return an Observable
    return handler.handle().pipe(
      map((data) => {
        const response  = {
          ...data,
          createdAt: data.created_at  //Changing the name
        }
        delete response.updated_at; //Deleting the field
        delete response.created_at
        return response;
      })
    );
  }
}
