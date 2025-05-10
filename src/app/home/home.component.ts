import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  features = [
    { 
      title: 'Explore', 
      description: 'Discover exciting windsurf locations around the world.', 
      icon: 'explore' 
    },
    { 
      title: 'Learn', 
      description: 'Get expert tips and techniques for windsurf enthusiasts.', 
      icon: 'school' 
    },
    { 
      title: 'Connect', 
      description: 'Join our community of passionate windsurfers.', 
      icon: 'group' 
    }
  ];
}
