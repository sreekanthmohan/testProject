import { UserService } from './../_services/user.service';
import { User, Person } from './../_models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  private model: Person;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.model = new Person();
  }

  onSubmit() {
    console.log("console called")
    this.userService.postTest(this.model)
      .subscribe(
      inv => {
        this.model = inv;
        console.log('user data', inv);
      },
      err => {

        console.error('body', err._body);
      },
      () => console.debug('got user data')
      );

  }
}

