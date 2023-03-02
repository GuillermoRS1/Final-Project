import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { AuthService } from '../verif/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // Initialice some variables
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  @Output() show: EventEmitter<void> = new EventEmitter<void>();

  // Function to view the cart view
  showCart() {
    this.show.emit();
  }

  // Function to verify if the user is logged in or not
  verify() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/sign-in']);
      }
    });
  }
}
