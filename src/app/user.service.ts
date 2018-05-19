import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService{
	public user : any;
	constructor (public http : HttpClient){
    	
    }
    getUsers (): Observable<any> {
		return this.http.get<any>("https://api.github.com/search/users?q=tom");
	}
	setUser(user){
		this.user = user;
	}
	getUser(){
		return this.user;
	}
	getFollowers() : Observable<any> {
		let Url = "https://api.github.com/users/"+ this.user.login + "/followers";
		return this.http.get<any>(Url);	
	}
	getSubscription() : Observable<any> {
		let Url = "https://api.github.com/users/"+ this.user.login+"/subscriptions";
		return this.http.get<any>(Url);
	}
	getOrganization() : Observable<any> {
		let Url = "https://api.github.com/users/"+ this.user.login+"/orgs";
		return this.http.get<any>(Url);
	}
	getRepo() : Observable<any> {
		let Url = "https://api.github.com/users/"+ this.user.login+"/repos";
		return this.http.get<any>(Url);
	}
	getevents() : Observable<any> {
		let Url = "https://api.github.com/users/"+ this.user.login+"/received_events";
		return this.http.get<any>(Url);
	}
}
