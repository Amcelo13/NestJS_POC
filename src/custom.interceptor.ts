import {ExecutionContext, CallHandler, NestInterceptor} from "@nestjs/common"
import {map} from 'rxjs'

export class CustomInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler:CallHandler){
        console.log("Intercepting the request")
        return handler.handle().pipe(
            map((data)=>{
                console.log('Intercepting the response')
            return data
            })
        )
    }
}