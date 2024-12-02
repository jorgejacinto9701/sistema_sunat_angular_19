import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from '../../../shared/services/image.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  backgroundImage: string = '';
  authenticatingPersonImage: string = '';
  sunatLogoImage: string = '';
  successfulLoginImage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private imageService: ImageService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages(): void {
    this.backgroundImage = this.imageService.getImage('backgroundImage');
    this.authenticatingPersonImage = this.imageService.getImage('authenticatingPerson');
    this.sunatLogoImage = this.imageService.getImage('sunatLogo');
    this.successfulLoginImage = this.imageService.getImage('successfulLogin');
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        const token = await this.authService.login(email, password);
        localStorage.setItem('token', token || '');
        console.log('Inicio de sesión exitoso. Token:', token);
        this.router.navigate(['/tareas/list']);
        // Redirige o realiza acciones adicionales después del inicio de sesión
      } catch (error) {
        this.errorMessage = 'Error al iniciar sesión. Intente de nuevo.';
        console.error('Error al iniciar sesión:', error);
      }
    }
  }
}