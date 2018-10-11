import { Component, OnInit } from '@angular/core';
import { ProjectService, Project } from '@app/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as TutorialActions from './../../../../core/actions/tutorial.actions';
import { Tutorial } from './../../../../core/models/tutorial.model';
import { AppState } from './../../../../app.state';


@Component({
    selector: 'app-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
    tutorials: Observable<Tutorial[]>;
    projects$: Observable<Project[]>;

    constructor(private projectService: ProjectService, private store: Store<AppState>) {
        this.tutorials = store.select('tutorial');
    }

    delTutorial(index) {
        this.store.dispatch(new TutorialActions.RemoveTutorial(index));
    }

    ngOnInit(): void {
        this.loadProjects();
    }

    loadProjects() {
        this.projects$ = this.projectService.getAll();
    }
    onSubmit() {
    }
}
