import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly baseUrl = 'https://du-mock-checkout-7d42d0a76fbf.herokuapp.com/api/';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith(this.baseUrl)) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer C4D5C577E9914C4B9C9BF46DF9914A28`,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
