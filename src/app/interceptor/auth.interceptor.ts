import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class AuthInterceptor implements HttpInterceptor{
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger;
        console.log("Http Interceptor Test");
        var result=  next.handle(req);
        console.log(result);
        return result;
    }

}