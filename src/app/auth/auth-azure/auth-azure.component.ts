import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

// Component for AAD authentication
@Component({
    selector: 'app-auth-azure',
    templateUrl: './auth-azure.component.html',
    styleUrls: ['./auth-azure.component.css']
})
export class AuthAzureComponent implements OnInit {

    public config: {
        connection: string,
        tenant: string,
        clientid: string,
        resource: string
    };
    public error: boolean;
    public errorMessage: string;
    
    constructor(public router: Router, public authService: AuthService) {
        this.error = false;
    }

    public ngOnInit() {
        this.config = {
            connection: '',
            tenant: '',
            clientid: '',
            resource: ''
        };
    }

    // Called when user submits form
    // Uses the ADAL npm wrapper package to log the user in
    // This redirects the user to their AAD sign-in page if they gave a correct 
    // tenant If an incorrect tenant was given, AAD will tell them it doesn't 
    // exist and they will have to re