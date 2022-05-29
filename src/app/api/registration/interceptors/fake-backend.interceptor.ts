

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RegistrationRequest } from '../interfaces/registration-api.interface';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<RegistrationRequest>,
    next: HttpHandler
  ): Observable<HttpEvent<RegistrationRequest>> {
    const { url, method } = request;
    if (url.endsWith('register') && method === 'POST' && request.body) {
      return handleRegister(request.body);
    }
    return next.handle(request);

    function handleRegister(request: RegistrationRequest): Observable<HttpEvent<RegistrationRequest>> {
      let copyOfRequest = Object.assign({}, request)
      delete copyOfRequest['password']

      return of(
        new HttpResponse({
          status: 200,
          body: copyOfRequest
        })
      );
    }
  }
}

export const FakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
