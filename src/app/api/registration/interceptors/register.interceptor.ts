import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { RegistrationRequest } from '../interfaces/registration-api.interface';

@Injectable()
export class RegisterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<RegistrationRequest>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        event = event.clone({ body: event.body.data });
      }
      return event;
    }));
  }
}
