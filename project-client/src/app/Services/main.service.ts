import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private countCV = new BehaviorSubject<number>(0);
  submitClicked$ = this.countCV.asObservable();
  countCv: number = 0;
  setSubmitClicked(value: number) {
    this.countCv += value;
    this.countCV.next(this.countCv);
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userName = user.name || "defaultUser";
    localStorage.setItem(userName, this.countCv.toString());
  }
}
