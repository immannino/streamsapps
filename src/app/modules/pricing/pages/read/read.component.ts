import { Component, OnInit } from '@angular/core';
import { ProjectService, Project } from '@app/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { Laundry } from '@app/core/models/laundry.model';
import { AppState } from '@app/app.state';
import * as LaundryActions from '@app/core/actions/laundry.actions';


@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
    laundry: Observable<Laundry[]>;

    constructor(private store: Store<AppState>) {
        this.laundry = store.select('laundry');
    }

    delLaundry(index) {
        this.store.dispatch(new LaundryActions.RemoveLaundry(index));
    }

    ngOnInit(): void {
    }

    onSubmit() {
    }
}
