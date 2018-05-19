import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
@Component({
	selector: 'user-detail',
	templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {
	public user : any;
	public userFollowers : Array<any> = [];
	public subscriptionList : Array<any> = [];
	public organizationList : Array<any> = [];
	public repositoryList : Array<any> = [];
	public eventList : Array<any> = [];
	constructor(private userService : UserService){

	}
	public ngOnInit() {
		this.user = this.userService.getUser();
		this.userService.getevents().subscribe((result=>{
			this.eventList = result;
		}));
		this.userService.getFollowers().subscribe((result=>{
			this.userFollowers = result;
		}));
		this.userService.getSubscription().subscribe((result=>{
			this.subscriptionList = result;
		}));
		this.userService.getOrganization().subscribe((result=>{
			this.organizationList = result;
		}));
		this.userService.getRepo().subscribe((result=>{
			this.repositoryList = result;
		}));
	}
}