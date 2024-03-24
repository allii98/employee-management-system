import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor( private router: Router) {}

  ngOnInit() {
    // Lakukan pengalihan langsung ke halaman login saat aplikasi dimuat
    const isLogged = localStorage.getItem('isLogged');
    if (isLogged === 'true') {
      // Jika sudah login, arahkan ke halaman yang sesuai
      this.router.navigate(['/home']);
    } else {

      this.router.navigate(['/login']);
    }
  }
}
