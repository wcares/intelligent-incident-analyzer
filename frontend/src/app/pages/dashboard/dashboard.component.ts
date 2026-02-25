import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  userName = '';
  sidebarOpen = true;

  stats = [
    { label: 'Total Incidents', value: 6, icon: 'doc', color: '#3b82f6' },
    { label: 'In Progress', value: 3, icon: 'clock', color: '#f59e0b' },
    { label: 'Critical Priority', value: 1, icon: 'alert', color: '#ef4444' },
    { label: 'Resolved', value: 1, icon: 'check', color: '#10b981' },
  ];

  features = [
    { icon: 'NLP', title: 'NLP Analysis', desc: 'Automatic text analysis with sentiment detection and entity extraction', color: '#3b82f6' },
    { icon: 'CV', title: 'Computer Vision', desc: 'Image analysis for damage assessment and object detection', color: '#8b5cf6' },
    { icon: 'AT', title: 'Audio Transcription', desc: 'Convert audio reports to text with AI-powered transcription', color: '#f59e0b' },
  ];

  incidents = [
    {
      id: 'INC-2026-001', severity: 'medium', status: 'in-progress', date: '2/24/2026', reporter: 'John Smith',
      title: 'Vehicle Collision - Highway 101',
      desc: 'Two-car collision reported at the intersection of Highway 101 and Elm Street. Minor damage to both vehicles, no injuries reported.',
      aiScore: 45,
    },
    {
      id: 'INC-2026-002', severity: 'high', status: 'resolved', date: '2/23/2026', reporter: 'Campus Security',
      title: 'Lab Equipment Malfunction - Building C',
      desc: 'Chemical spill in laboratory C-204 due to equipment failure. Area evacuated and hazmat team notified.',
      aiScore: 78,
    },
    {
      id: 'INC-2026-003', severity: 'low', status: 'in-progress', date: '2/22/2026', reporter: 'Jane Doe',
      title: 'Parking Lot Fender Bender',
      desc: 'Minor vehicle damage in Lot B. No injuries. Both drivers exchanged insurance information.',
      aiScore: 22,
    },
  ];

  constructor(private auth: AuthService, private router: Router) {
    const user = this.auth.getUser();
    this.userName = user?.name || 'User';
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    this.auth.logout();
  }

  getSeverityClass(severity: string): string {
    return `badge-${severity}`;
  }

  getStatusClass(status: string): string {
    return `badge-status-${status}`;
  }
}
