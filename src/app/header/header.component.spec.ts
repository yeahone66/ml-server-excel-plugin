import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

// Components
import { HeaderComponent } from './header.component';

// Services
import { AuthService } from '../services/auth.service';
import { MlsService } from '../services/mls.service';

describe('HeaderComponent', function () {
  let comp: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;
  let mlsService: MlsService;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: MlsService, useClass: MlsServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    comp = fixture.componentInstance;
    authService = TestBed.get(AuthService);
    mlsService = TestBed.get(MlsService);
    fixture.detectChanges();
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should not be authenticated', () => {
    const state = authService.isAuthenticated();
    exp