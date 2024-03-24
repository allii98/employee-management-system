import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Pengecekan apakah pengguna sudah login sebelumnya
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged === 'true') {
      // Jika sudah login, arahkan ke halaman yang sesuai
      this.router.navigate(['/home']);
    }
  }

  
  login(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      if (username === 'test' && password === '1') {
        // Redirect ke halaman Employee List jika login berhasil
        localStorage.setItem('isLogged', 'true');
        this.router.navigate(['/home']);
        // alert('Login berhasil!');
      } else {
        alert('Username atau password salah!');
      }
    } else {
      alert('Harap isi kedua bidang.');
    }
  }
}
