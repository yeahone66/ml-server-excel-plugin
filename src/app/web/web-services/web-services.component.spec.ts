import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

// Components
import { WebServicesComponent } from './web-services.component';

// Services
import { AuthService } from '../../services/auth.service';
import { MlsService } from '../../services/mls.service';

// Models
import { WebService, Parameter, ExcelParameter } from '../../models/web-service';

// Integration tests for the Web Services Component
describe('WebServicesComponent', funct