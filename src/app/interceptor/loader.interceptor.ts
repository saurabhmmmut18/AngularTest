import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class LoaderInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger;
        console.log("Loader Interceptor calling");

        const modifiedReq = req.clone({
            headers: req.headers.set('Authorization', 'Test')
        });
        console.log(modifiedReq);

        var result = next.handle(modifiedReq);
        console.log(result)
        return result;
    }
    
}