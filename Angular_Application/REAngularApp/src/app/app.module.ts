import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'show', component: ShowComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
        // useHash: true
      },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
