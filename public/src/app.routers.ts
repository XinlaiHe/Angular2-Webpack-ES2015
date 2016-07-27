import { AppComponent } from './app.component';
import { AnotherComponent } from './another.component';
import { FruitComponent } from './fruit.component';

export const AppRoutes = [
  { path: '', component: FruitComponent },
  { path: 'fruits', component: FruitComponent },
  { path: 'another', component: AnotherComponent }
];