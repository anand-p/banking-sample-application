import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { BankingSampleApplicationSharedModule } from 'app/shared/shared.module';
import { BankingSampleApplicationCoreModule } from 'app/core/core.module';
import { BankingSampleApplicationAppRoutingModule } from './app-routing.module';
import { BankingSampleApplicationHomeModule } from './home/home.module';
import { BankingSampleApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    BankingSampleApplicationSharedModule,
    BankingSampleApplicationCoreModule,
    BankingSampleApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    BankingSampleApplicationEntityModule,
    BankingSampleApplicationAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class BankingSampleApplicationAppModule {}
