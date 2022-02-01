import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard/dashboard-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, RouterModule],
})
export class DashboardModule {}
