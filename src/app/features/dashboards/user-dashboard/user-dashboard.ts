import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from '../../../shared/components/navbar/navbar';


@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [Navbar, RouterOutlet],
  templateUrl: './user-dashboard.html',
  styleUrls: ['./user-dashboard.css']
})
export class UserDashboard {
  constructor(private router: Router) {}
  navigateToAddComplaint() {
    this.router.navigate(['/user/complaints/add']);
  }
  navigateToViewComplaints() {
    this.router.navigate(['/user/complaints/view']);
  }
}

