import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppUserDirective } from './app-user.directive';
import { IndexComponent } from './index/index.component';
import { appRoutes } from './app.router';

@NgModule({
  declarations: [//当前模块所需要的子组件  不包括子模块
    AppComponent,
    AppUserDirective,
    IndexComponent
  ],
  imports: [//模块 路由
    BrowserModule,
     RouterModule.forRoot(appRoutes)
  ],
  providers: [],//当前模块所需要的服务
  bootstrap: [AppComponent]
})
export class AppModule { }
