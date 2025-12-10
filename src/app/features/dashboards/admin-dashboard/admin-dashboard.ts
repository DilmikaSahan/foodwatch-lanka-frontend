import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../../shared/components/navbar/navbar';
import{Router,RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  imports: [Navbar, RouterOutlet],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard implements OnInit{

  constructor(private router:Router) {}
  ngOnInit() {
    this.loadDashboardMain();

  }
  loadDashboardMain(){
    this.router.navigate(['/admin/complaints/adminDashboardMain']);
  }
}
