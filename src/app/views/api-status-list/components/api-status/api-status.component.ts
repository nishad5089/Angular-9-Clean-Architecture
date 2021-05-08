import { Component, OnInit } from '@angular/core';
import {ApiStatusService} from '../../service/api-status.service';

@Component({
  selector: 'app-api-status',
  templateUrl: './api-status.component.html',
  styleUrls: ['./api-status.component.css']
})
export class ApiStatusComponent implements OnInit {

  constructor(private apiStatusService: ApiStatusService) { }
 title;
  ngOnInit(): void {
    this.apiStatusService.showMessage().subscribe(res => {
      this.title = res;
    });
  }

}
