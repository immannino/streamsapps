import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProjectService, Project } from '@app/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  projects$: Observable<Project[]>;
  heroes: Project[];

    constructor(private projectService: ProjectService) { }

    ngOnInit(): void {
        this.loadProjects();
        console.log(this.heroes);
    }

    loadProjects() {
        this.projects$ = this.projectService.getAll();
        this.projects$.toPromise()
        .then(response => this.heroes = response);
    }
    onSubmit() {}
}
