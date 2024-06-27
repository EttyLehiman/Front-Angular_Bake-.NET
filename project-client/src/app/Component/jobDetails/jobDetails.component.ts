import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Job } from '../../Models/Job';
import { field } from '../../Models/Field';
import { MainService } from '../../Services/main.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './jobDetails.component.html',
  styleUrls: ['./jobDetails.component.scss']
})
export class JobDetailsComponent {
  constructor(private mainService: MainService) { }

  @Input()
  job: Job = {
    field: field.QA,
    requirements: "",
    scopeOfHours: 0,
    area: "",
    Hybrid: false
  };
  
  @Output()
  count: EventEmitter<any> = new EventEmitter<any>();


  countCV() {
    this.mainService.setSubmitClicked(1);
    this.count.emit();
  }
}

