import { Component } from '@angular/core';
import { ComplaintForm } from "../../components/complaint-form/complaint-form";
import { ComplaintsService } from '../../services/complaints.service';

@Component({
  selector: 'app-user-complaints-add',
  imports: [ComplaintForm],
  templateUrl: './user-complaints-add.html',
  styleUrl: './user-complaints-add.css',
})
export class UserComplaintsAdd {
  constructor(private complaintsService: ComplaintsService) {}
  handleFormSubmit(formdata: any){
    console.log("submmiting compliant:", formdata);

    this.complaintsService.addComplaint(formdata).subscribe({
      next: (res) => {alert("Complaint submitted successfully!");},
      error: (err) => {alert("Error submitting complaint.");}
    })
  }

}
