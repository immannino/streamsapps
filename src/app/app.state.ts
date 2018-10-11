import { Laundry } from '@app/core/models/laundry.model';

export interface AppState {
  readonly laundry: Laundry[];
}
