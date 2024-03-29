
import { AuthService } from './auth.service';
import { AdalService } from 'ng2-adal/core';
import { MlsService } from './mls.service';
import { HttpModule, Http, XHRBackend, Response, ResponseOptions, ResponseType } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, inject, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';
import { WebService, ExcelParameter } from '../models/web-service';

// Integration Tests for the WebServices Service
// Utilizes a mock backend for all tests
describe('WebService Tests', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                AuthService,
                AdalService,
                MlsService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        })
            .compileComponents();
    }));

    it('can instantiate service when inject service',
        inject([MlsService], (service: MlsService) => {
            expect(service instanceof MlsService).toBe(true);
        }));

    it('can instantiate service with \'new\'', inject([Http], (http: Http) => {
        expect(http).not.toBeNull('http should be provided');
        const service = new MlsService(http, new AuthService(new AdalService(), http));
        expect(service instanceof MlsService).toBe(true, 'new service should be ok');
    }));

    it('can provide the mockBackend as XHRBackend',
        inject([XHRBackend], (backend: MockBackend) => {
            expect(backend).not.toBeNull('backend should be provided');
        }));

    describe('GET WebServices', () => {
        let backend: MockBackend;
        let service: MlsService;
        let response: Response;
        let fakeServicesData: any;

        beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
            backend = be;
            service = new MlsService(http, new AuthService(new AdalService(), http));
            fakeServicesData = servicesData;
            const options = new ResponseOptions({ status: 200, body: { data: fakeServicesData } });