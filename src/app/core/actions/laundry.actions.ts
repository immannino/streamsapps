import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Laundry } from '../models/laundry.model';

export const ADD_LAUNDRY       = '[LAUNDRY] Add';
export const REMOVE_LAUNDRY    = '[LAUNDRY] Remove';

export class AddLaundry implements Action {
    readonly type = ADD_LAUNDRY;

    constructor(public payload: Laundry) {}
}

export class RemoveLaundry implements Action {
    readonly type = REMOVE_LAUNDRY;

    constructor(public payload: number) {}
}

export type Actions = AddLaundry | RemoveLaundry;
