"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomInterceptor = void 0;
const rxjs_1 = require("rxjs");
class CustomInterceptor {
    intercept(context, handler) {
        console.log("Intercepting the request");
        return handler.handle().pipe((0, rxjs_1.map)((data) => {
            console.log('Intercepting the response');
            return data;
        }));
    }
}
exports.CustomInterceptor = CustomInterceptor;
//# sourceMappingURL=custom.interceptor.js.map