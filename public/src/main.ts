import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter } from '@angular/router';
import { AppRoutes } from './app.routers';

bootstrap(AppComponent, [HTTP_PROVIDERS, provideRouter(AppRoutes)]);