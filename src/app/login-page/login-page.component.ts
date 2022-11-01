import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Students } from '../student';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  p: number = 1;
  student: Students[] = [];
  StudentName: any;
  constructor(private logService: LoginServiceService) {}

  ngOnInit(): void {
    console.log('ngOnInit function working');
    this.getAllStudents();
  }
  getAllStudents() {
    console.log('getAllPlayers function is working');
    return this.logService.getStudents().subscribe(
      (res: any) => {
        console.log(res);
        this.student = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  Search() {
    if (this.StudentName == '') {
      this.ngOnInit();
    } else {
      this.student = this.student.filter((res) => {
        return res.StudentName.toLocaleLowerCase().match(
          this.StudentName.toLocaleLowerCase()
        );
      });
    }
  }
}
