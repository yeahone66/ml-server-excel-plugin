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
        connection: s