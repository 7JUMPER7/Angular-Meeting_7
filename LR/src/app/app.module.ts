import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router'
import { GoodsComponent } from './goods/goods.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http'

const appRoutes: Routes = [
  {
    path: 'sum',
    component: GoodsComponent
  },
   {
     path: 'register',
     component: UserComponent
   }
];

@NgModule({
  declarations: [
    AppComponent,
      GoodsComponent,
      UserComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
