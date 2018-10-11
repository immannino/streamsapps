import { Tutorial } from './core/models/tutorial.model';

export interface AppState {
  readonly tutorial: Tutorial[];
}
