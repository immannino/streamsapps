import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import { ProjectService, Project } from '@app/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  isLinear = false;
  profileForm: FormGroup;
  addressForm: FormGroup;
  projects$: Observable<Project[]>;

    constructor(
        private projectService: ProjectService, private _formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.loadProjects();
        this.addressForm = this._formBuilder.group({
            street: [null, Validators.required],
            street2: [null],
            city: [null, Validators.required],
            state: [null, Validators.required],
            zip: [null, Validators.required]
          });
        this.profileForm = this._formBuilder.group({
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            address: this.addressForm,
          });
    }

    loadProjects() {
        this.projects$ = this.projectService.getAll();
    }
    onSubmit() {
        if (this.profileForm.valid) {
            console.log('form submitted');
            console.log(this.profileForm.value);
        } else {
            this.validateAllFormFields(this.profileForm); // {7}
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
        return (!this.profileForm.get(field).valid && this.profileForm.get(field).touched) ||
        (this.profileForm.get(field).untouched);
    }
    reset() {
        this.profileForm.reset();
    }
}
