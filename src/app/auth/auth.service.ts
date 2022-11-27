import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { LoginForm } from '../types/LoginForm';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: Boolean = false;
  isLoading: Boolean = false;
  passwordMatched: boolean = true;

  login(form: LoginForm) {
    if (this.isLoading) {
      return
    }

    console.log(form);
    this.isLoading = true;


    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        this.isAuthenticated = true;
        alert('Login success');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        alert('You have done the mistake in login or password')
      })
      .finally(() => this.isLoading = false)
  }

  register(form: LoginForm) {
    if (this.isLoading) {
      return
    }
    this.isLoading = true;
    if (form.password !== form.confirm) {
      this.passwordMatched = false;
      return;
    }
    console.log(form)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        this.isAuthenticated = true;
        console.log('userCredential', userCredential)
        //const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Error')
        // ..
      })
      .finally(() => this.isLoading = false)
  }

  constructor() { }
}
