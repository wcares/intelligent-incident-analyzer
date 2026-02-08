import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Intelligent Incident Report Analyzer';
  backendStatus: string = 'Checking...';
  apiMessage: string = '';

  async ngOnInit() {
    try {
      const response = await fetch('/health');
      const data = await response.json();
      this.backendStatus = `Connected (v${data.version})`;
    } catch {
      this.backendStatus = 'Not running (start backend on port 8000)';
    }

    try {
      const response = await fetch('/api/incidents');
      const data = await response.json();
      this.apiMessage = data.message;
    } catch {
      this.apiMessage = 'Could not reach API';
    }
  }
}
