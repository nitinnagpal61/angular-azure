// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operator/filter';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable()
export class AuthService {

	auth0 = new auth0.WebAuth({
		clientID: 'cunOxKmo7Q8gYIBc5zzaAbBnf4EJ0RQn',
		domain: 'angular-azure.auth0.com',
		responseType: 'token id_token',
		audience: 'https://angular-azure.auth0.com/userinfo',
		redirectUri: 'http://localhost:51253/callback',
		scope: 'openid'
	});

	constructor(public router: Router) { }

	public login(): void {
		this.auth0.authorize();
	}

}