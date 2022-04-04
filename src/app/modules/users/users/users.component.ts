import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { USER_COLUMNS } from 'src/app/common/constants';

@Component({
  selector: 'npg',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss', '../../../../playground/styles/styles.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UsersComponent implements OnInit {


  displayUsers: boolean;
  userColumns = USER_COLUMNS
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (this.router.url.includes('users')) {
      this.displayUsers = true
    } else {
      this.displayUsers = false;
    }
  }

  loadUsers() {
    this.router.navigate(['/users']);
  }

}
