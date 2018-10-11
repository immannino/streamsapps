import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import { ProjectService, Project } from '@app/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  isLinear = false;
  options: FormGroup;
  projects$: Observable<Project[]>;

    constructor(private projectService: ProjectService, private _formBuilder: FormBuilder) {
        this.options = _formBuilder.group({
            hideRequired: false,
            floatLabel: 'auto',
          });
    }

    ngOnInit(): void {
        this.loadProjects();
        this.options = this._formBuilder.group({
            detergent: [null, Validators.required],
            washTemperature: [null, Validators.required],
            dryTemperature: [null, Validators.required],
            instructions: [null]
        });
    }

    loadProjects() {
        this.projects$ = this.projectService.getAll();
    }
    onSubmit() {
        if (this.options.valid) {
            console.log('form submitted');
            console.log(this.options.value);
        } else {
            this.validateAllFormFields(this.options); // {7}
        }
    }
    validateAllFormFields(formGroup: FormGroup) {         // {1}
        Object.keys(formGroup.controls).forEach(field => {  // {2}
            const control = formGroup.get(field);             // {3}
            if (control instanceof FormControl) {             // {4}
            control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {        // {5}
            this.validateAllFormFields(control);            // {6}
            }
        });
    }
    isFieldValid(field: string) {
        return (!this.options.get(field).valid && this.options.get(field).touched) ||
        (this.options.get(field).untouched);
    }
    reset() {
        this.options.reset();
    }
}
