import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  data: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      res => {
        this.data = res;
        console.log(this.data)
      }
    )
  }

  updateUserStatus(user: any): void {
    if (user.userStatus === 'new') {
      user.userStatus = 'existing';

      // Optionally, update on the backend too
      this.userService.updateUserStatus(user.id, { userStatus: 'existing' }).subscribe(
        res => {
          console.log('User status updated:', res);
        },
        err => {
          console.error('Failed to update user status', err);
        }
      );
    }
  }

}
