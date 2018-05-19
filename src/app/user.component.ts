import { Component, OnInit, ViewChild } from '@angular/core';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
@Component({
	selector: 'users',
	templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
	public userList : Array<any> = [];
	public userSearch : string = '';
	constructor(private userService : UserService, private router : Router){

	}
	public ngOnInit() {
		this.userService.getUsers().subscribe((result)=>{
			console.log(result);
			this.userList = result.items;
			console.log(this.userList);
		});
	}
	onUserClick(user : any){
		this.userService.setUser(user);
		this.router.navigate(['./user/'+user.id]);
	}
}