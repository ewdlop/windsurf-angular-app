import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink, 
    RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'windsurf-website';

  constructor(private router: Router) {}

  getBreadcrumbs(): Array<{label: string, url: string}> {
    const url = this.router.url;
    const breadcrumbs: Array<{label: string, url: string}> = [];

    // Split the URL and create breadcrumb items
    const urlParts = url.split('/').filter(part => part !== '');
    let path = '';

    urlParts.forEach((part: string) => {
      path += `/${part}`;
      breadcrumbs.push({
        label: part.charAt(0).toUpperCase() + part.slice(1),
        url: path
      });
    });

    return breadcrumbs;
  }
}
