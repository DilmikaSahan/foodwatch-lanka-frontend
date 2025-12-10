import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';   
import { AdminService, UserDetails } from '../../services/admin-service';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-admin-view-all-users',
  imports: [ MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, CommonModule, MatInputModule ],
  templateUrl: './admin-view-all-users.html',
  styleUrl: './admin-view-all-users.css',
})
export class AdminViewAllUsers implements AfterViewInit,OnInit{
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'phoneNumber', 'createAT', 'updateAT'];
  dataSource: MatTableDataSource<UserDetails> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort; 

  constructor(private adminService: AdminService) {}
  ngOnInit(): void {
    this.loadComplaints();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  loadComplaints() {
    this.adminService.getAllusers().subscribe({
      next: (users) => { this.dataSource.data = users; },
      error: (err) => console.error('Error fetching users:', err)
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }  
  }
  viewUser(user: UserDetails) {
    console.log('Viewing user:', user);
  }
}

