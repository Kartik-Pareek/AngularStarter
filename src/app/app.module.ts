import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/Http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { SalesInvoiceComponent } from './pages/sales-invoice/sales-invoice.component';
import { CompanyProfileComponent } from './pages/company-profile/company-profile.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { CustomerComponent } from './pages/customer/customer.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      RegisterComponent,
      SalesInvoiceComponent,
      CompanyProfileComponent,
      InventoryComponent,
      CustomerComponent,
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatExpansionModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MDBBootstrapModule.forRoot()
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
