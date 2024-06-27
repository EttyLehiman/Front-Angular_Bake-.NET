import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../Services/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  userName: string = 'guest';
  jobField: string = 'Not mentioned';
  resumesSent: number = 0;
  countOfCV: string = "";

  private submitClickedSubscription: Subscription;

  constructor(private mainService: MainService, private router: Router) {
    this.submitClickedSubscription = this.mainService.submitClicked$.subscribe(
      (value) => {
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        const userName = user.name || "defaultUser";
        const storedCount = localStorage.getItem(userName);
        if (storedCount !== null) {
          this.countOfCV = storedCount;
        } else {
          this.countOfCV = "0"
        }
      }
    );
  }
  ngOnInit(): void {
    if (this.isLocalStorageAvailable()) {
      this.navigateToJobs();
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      if (user.name != null) {
        this.userName = user.name;
        this.jobField = user.fieldSearch;
        this.resumesSent = user.resumesSent;
      }
      else
        this.navigateToLogin();

    } else {
      console.warn('Local storage is not available.');
      // this.navigateToLogin();
    }
  }

  navigateToLogin(): void {
    this.router.navigate(['/Login']);
  }

  navigateToJobs(): void {
    this.router.navigate(['/ListJobs']);
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
  ngOnDestroy() {
    this.submitClickedSubscription.unsubscribe();
  }
}
