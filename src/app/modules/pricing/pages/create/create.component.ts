import { Component, OnInit } from '@angular/core';
import { ProjectService, Project } from '@app/core';
import { Observable } from 'rxjs';
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
    projects$: Observable<Project[]>;

    constructor(private projectService: ProjectService, private store: Store<AppState>) {
        this.tutorials = store.select('tutorial');
    }

    addTutorial(name, url) {
        this.store.dispatch(new TutorialActions.AddTutorial({name: name, url: url}));
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
