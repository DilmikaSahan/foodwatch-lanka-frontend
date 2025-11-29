import { Component, OnInit } from '@angular/core';
import { ComplaintsService, Complaint } from '../../services/complaints.service';

@Component({
  selector: 'app-user-complaints-page',
  imports: [],
  templateUrl: './user-complaints-page.html',
  styleUrl: './user-complaints-page.css',
})
export class UserComplaintsPage implements OnInit {
  complaints: Complaint[] = [];
  selectedComplaint?: Complaint;

  loading = false;
  errorMessage = '';
  successMessage = '';

  statusOptions = ['PENDING', 'UNDER_INVESTIGATION', 'RESOLVED', 'REJECTED'];
  editStatus = '';
  editNote = '';

  constructor(private complaintsService: ComplaintsService) {}

  ngOnInit(): void {
    this.loadAllComplaints();
  }

  loadAllComplaints(): void {
    this.loading = true;
    this.errorMessage = '';
    this.complaintsService.getAllComplaints().subscribe({
      next: (data) => {
        this.complaints = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to load complaints.';
        this.loading = false;
      }
    });
  }


}
