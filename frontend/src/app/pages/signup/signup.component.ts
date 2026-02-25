import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  error = '';
  loading = false;

  constructor(private auth: AuthService, private router: Router) {
    if (auth.isLoggedIn()) {
      router.navigate(['/dashboard']);
    }
  }

  async onSubmit() {
    this.error = '';
    this.loading = true;
    const result = await this.auth.register(this.name, this.email, this.password);
    this.loading = false;
    if (result.success) {
      this.router.navigate(['/dashboard']);
    } else {
      this.error = result.error || 'Registration failed';
    }
  }
}
