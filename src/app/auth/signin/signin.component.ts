import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  /**
   * Dans ce component :
   * vous générez le formulaire selon la méthode réactive
   * les deux champs,  email  et  password ,
   * sont requis — le champ  email  utilise  Validators.email  pour
   * obliger un string sous format d'adresse email ;
   * le champ  password  emploie  Validators.pattern  pour
   * obliger au moins 6 caractères alphanumériques,
   * ce qui correspond au minimum requis par Firebase ;
   * vous gérez la soumission du formulaire,
   * envoyant les valeurs rentrées par l'utilisateur à la méthode  createNewUser()
   * si la création fonctionne, vous redirigez l'utilisateur vers  /books ;
   * si elle ne fonctionne pas, vous affichez le message d'erreur renvoyé par Firebase.
   */
  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;

    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}