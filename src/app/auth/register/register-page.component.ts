import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/LoginForm';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  passwordMatched: boolean = true;
  isLoading: Boolean = false;

  form: LoginForm = {
    email: '',
    password: '',
    confirm:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  sendFile() {
    if (this.isLoading) {
      return
    }
    this.isLoading = true;
    if (this.form.password !== this.form.confirm) {
      this.passwordMatched = false;
      return;
    }
    console.log(this.form)
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        // Signed in
        console.log('userCredential', userCredential)
        //const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Error')
        // ..
      })
      .finally(() => this.isLoading = false)

    }

}
