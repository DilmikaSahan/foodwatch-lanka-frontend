import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComplaintsService, Complaint } from '../../services/complaints.service';
import { KeycloakService } from '../../../../core/auth/services/keycloak';
import { CommonModule } from '@angular/common';  
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-complaints-view',
  imports: [ MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule, CommonModule ],
  standalone: true,
  templateUrl: './complaints-view.html',
  styleUrl: './complaints-view.css',
})
export class ComplaintsView implements AfterViewInit {
  @Input() viewMode: 'all' | 'assigned' | 'user' = 'user';
  displayedColumns: string[] = ['complaintId', 'category', 'status', 'district', 'complaintAt', 'actions'];
  dataSource: MatTableDataSource<Complaint> = new MatTableDataSource();
  showActions = true;
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private complaintService: ComplaintsService, private keycloakservice: KeycloakService, private route: ActivatedRoute,private router: Router) {}
  roles: string[] = [];

  isAdmin = false;
  isOfficer = false;
  isUser = false;

  ngOnInit(): void {
    const mode = this.route.snapshot.paramMap.get('mode');
    if(mode){
      this.viewMode = mode as 'all' | 'assigned' | 'user';
    }
    this.roles = this.keycloakservice.getRoles();
    this.isAdmin =this.roles.includes("admin");
    this.isOfficer = this.roles.includes("officer");
    this.isUser = this.roles.includes("user");
    this.adjustColumnsByRole();
    this.loadComplaints();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadComplaints() {
    switch(this.viewMode){
      case 'all':
        if(this.isAdmin || this.isOfficer){
          this.complaintService.getAllComplaints().subscribe({
            next: (complaints) => this.dataSource.data = complaints,
            error: (err) => console.error('Error fetching complaints', err)
          })
        } 
        break;
      case 'assigned':
        if(this.isOfficer){
          this.complaintService.getComplaintsByAssignedOfficer().subscribe({
            next: (complaints) => this.dataSource.data = complaints,
            error: (err) => console.error('Error fetching complaints', err)
          })
        }
        break;
      case 'user':
        if(this.roles.includes("user")){
          this.complaintService.getComplaintsByUser().subscribe({
            next: (complaints) => this.dataSource.data = complaints,
            error: (err) => console.error('Error fetching complaints', err)
          })
        }
        break;
      default:
        console.error('Invalid view mode');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewComplaint(complaint: Complaint) {
    if(this.isAdmin){
      this.router.navigate(['/admin/complaints/details', complaint.complaintId]);
    }else if(this.isOfficer){
      this.router.navigate(['/officer/complaints/details', complaint.complaintId]);
    }else{
      this.router.navigate(['/user/complaints/details', complaint.complaintId]);
    }

  }

  adjustColumnsByRole() {
    if (this.isAdmin || this.isOfficer) {
      this.displayedColumns = [
        'complaintId',
        'category',
        'complaintAt',
        'province',
        'district',
        'city',
        'location',
        'status',
        'officer',
        'priorityLevel',
        'actions'
      ];
    } else {
      // User view
      this.displayedColumns = [
        'complaintId',
        'category',
        'complaintAt',
        'province',
        'district',
        'city',
        'location',
        'status',
        'actions'
      ];
    }
  }

}
