import { Component } from '@angular/core';
import { ComplaintList } from "../../components/complaint-list/complaint-list";

@Component({
  selector: 'app-user-complaints-view',
  imports: [ComplaintList],
  templateUrl: './user-complaints-view.html',
  styleUrl: './user-complaints-view.css',
})
export class UserComplaintsView {

}
