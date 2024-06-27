// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { saveAs } from 'file-saver';

// @Component({
//   selector: 'app-resume-builder',
//   templateUrl: './resume-builder.component.html',
//   styleUrls: ['./resume-builder.component.scss']
// })
// export class ResumeBuilderComponent {
//   resumeForm: FormGroup;
//   resumeData: any;
//   showPopup: boolean = false;

//   constructor(private fb: FormBuilder) {
//     this.resumeForm = this.fb.group({
//       fullName: [''],
//       email: [''],
//       phone: [''],
//       education: [''],
//       experience: ['']
//     });
//   }

//   onSubmit() {
//     this.resumeData = this.resumeForm.value;
//     this.showPopup = true;
//   }

//   downloadResume() {
//     const resumeContent = `
//       Resume:
//       Full Name: ${this.resumeData.fullName}
//       Email: ${this.resumeData.email}
//       Phone: ${this.resumeData.phone}
//       Education: ${this.resumeData.education}
//       Experience: ${this.resumeData.experience}
//     `;
//     const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
//     saveAs(blob, 'Resume.txt');
//     this.showPopup = false;
//   }
  
// }  
// resume-builder.component.ts

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-resume-builder',
  templateUrl: './resume-builder.component.html',
  styleUrls: ['./resume-builder.component.scss']
})
export class ResumeBuilderComponent {
  resumeForm: FormGroup;
  resumeData: any;
  showPopup: boolean = false;

  constructor(private fb: FormBuilder) {
    this.resumeForm = this.fb.group({
      fullName: [''],
      email: [''],
      phone: [''],
      education: [''],
      experience: ['']
    });
  }

  onSubmit() {
    this.resumeData = this.resumeForm.value;
    this.showPopup = true;
  }

  downloadResume() {
    const resumeContent = `
      Resume Preview:
      Full Name: ${this.resumeData.fullName}
      Email: ${this.resumeData.email}
      Phone: ${this.resumeData.phone}
      Education: ${this.resumeData.education}
      Experience: ${this.resumeData.experience}
      `;
    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'Resume.txt');
  }
}
