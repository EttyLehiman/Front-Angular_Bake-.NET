import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      area: new FormControl(''),
      field: new FormControl('')
    });
  }

  @Output() filterChanged: EventEmitter< { area: string, field: string }> = new EventEmitter<{ area: string, field: string }>();

  filter() {
    const cityControl = this.form.get('area');
    const typeControl = this.form.get('field');

    if (cityControl && typeControl) {
      const cityValue = cityControl.value;
      const typeValue = typeControl.value;
      
      this.filterChanged.emit({ area: cityValue, field: typeValue });
    }
  }
}
