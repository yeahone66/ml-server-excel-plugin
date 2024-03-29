import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

// Services
import { AuthService } from './auth.service';

// Models
import { WebService, ExcelParameter } from '../models/web-service';

// Service which makes API calls to GET services and POST to an individual service
@Injectable()
export class MlsService {

    // Boolean field for WebService and WebServices component templates to know whether a service has been selected or not
    public serviceSelected = false;

    constructor(private http: Http, private authService: AuthService) { }

    // GET all services available to the user
    getWebServices(): Observable<WebService[]> {
        const connection = this.authService.connection + '/services';
        // Add authorization header with jwt token
        const token = this.authService.getToken();