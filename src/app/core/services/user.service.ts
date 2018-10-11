import { Injectable } from '@angular/core';

import { JsonApiService } from './json-api.service';
import { Observable } from 'rxjs';

const routes = {
    users: '/users'
};

@Injectable()
export class UserService {

    constructor(private jsonApiService: JsonApiService) {}

    getAll(): Observable<JsonApiService[]> {
        return this.jsonApiService
            .fetch(routes.users);
    }

}
