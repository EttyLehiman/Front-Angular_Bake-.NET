import { Component, Output, Input } from '@angular/core';
import { Job } from '../../Models/Job';
import { field } from '../../Models/Field';
// import { EventEmitter } from 'node:stream';
// import {  Output } from '@angular/core';
import { EventEmitter } from '@angular/core';



@Component({
    selector: 'app-name-job',
    templateUrl: './name-job.component.html',
    styleUrl: './name-job.component.scss'
})
export class NameJobComponent {
    @Output()
    nameJobCV: EventEmitter<any> = new EventEmitter<any>();

    @Input()
    nameJob: Job = {

        field: field.QA,
        requirements: "",
        scopeOfHours: 0,
        area: "string",
        Hybrid: false

    }
    getEnumValue(fieldValue: number): string {
        return field[fieldValue];
    }
    flag: Boolean = false
    viewItems() {
        this.flag = !this.flag;
    }
    sendNameOfJob() {
        this.nameJobCV.emit(field[this.nameJob.field]);
    }
}