import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import User from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [ApiService]
})
export class UserComponent implements OnInit {
  alertHidden = true;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  register(e: Event): void {
    e.preventDefault();
    let user: User = new User;
    user.username = ((e.target as HTMLElement).children[0] as HTMLInputElement).value;
    user.password = ((e.target as HTMLElement).children[1] as HTMLInputElement).value;
    this.apiService.regUser(user).subscribe(data => {
      let status: number = (data as any).code;
      switch(status) {
        case 200: {
          this.showAlert('Successfully registered', true);
          break;
        }
        case 403: {
          this.showAlert('Username already exist', false);
          break;
        }
        case 404: {
          this.showAlert('Not found', false);
          break;
        }
        case 502: {
          this.showAlert('Server error', false);
          break;
        }
      }
    });
  }

  showAlert(message: string, isGood: boolean): void {
    this.alertHidden = false;
    let alert: HTMLElement | null = document.getElementById('alert');
    if (alert) {
      alert.innerText = message;
      alert.className = 'alert ' + ((isGood) ? 'alert-success' : 'alert-danger');
    }
  }

}
