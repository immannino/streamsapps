import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import { Store } from '@ngrx/store';
import { Tutorial } from '@app/core/models/tutorial.model';
import { AppState } from '@app/app.state';
import * as TutorialActions from './../../../../core/actions/tutorial.actions';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
    tutorials: Observable<Tutorial[]>;
    isLinear = false;
    options: FormGroup;

    constructor(private _formBuilder: FormBuilder, private store: Store<AppState>) {
        this.options = _formBuilder.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
        this.tutorials = store.select('tutorial');
    }

    private addTutorial() {
        this.store.dispatch(new TutorialActions.AddTutorial(this.options.value));
    }

    ngOnInit(): void {
        this.options = this._formBuilder.group({
            loads: [null, Validators.required],
            detergent: [null, Validators.required],
            washTemperature: [null, Validators.required],
            dryTemperature: [null, Validators.required],
            starch: [null, Validators.required],
            package: [null, Validators.required],
            instructions: [null]
        });
    }

    onSubmit() {
        if (this.options.valid) {
            console.log('form submitted');
            console.log(this.options.value);
            this.addTutorial();
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
