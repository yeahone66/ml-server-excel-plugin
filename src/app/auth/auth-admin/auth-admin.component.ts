import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

// Component for local/LDAP/LDAP-S authentication
@Component({
  selector: 'app-auth-admin',
  templateUrl: './auth-admin.component.html',
  styleUrls: ['./auth-admin.component.css']
})
export class AuthAdminComponent implements OnInit {

  public authenticated = false;
  public config: {
    connection: string,
    username: string,
    password: string
  };
  public error: boolean;
  public errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
    this.error = false;
  }

  ngOnInit() {
    this.config = {
      connecti