import { NgModule, Component, Pipe, OnInit } from "@angular/core";
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-forms';

  // langs: string[] = ["English", "French", "German"];
  // myform: FormGroup;
  // firstName: FormControl;
  // lastName: FormControl;
  // email: FormControl;
  // password: FormControl;
  // language: FormControl;

  //
  myformSimple: FormGroup;
  firstNameS: FormControl;
  lastNameS: FormControl;
  blabla: FormControl;

  constructor(fb: FormBuilder) {
    this.myformSimple = fb.group({});
    
    this.myformSimple = fb.group({
      name:fb.group({
        firstNameS: this.firstNameS,
        lastNameS: this.lastNameS,
      }),
      blabla: this.blabla
    });
}

  ngOnInit() {
    //this.createFormControls();
    //this.createForm();

    //this.createFormControlsSimple();
    //this.createFormSimple();
  }

 


  createFormControlsSimple(){
    this.firstNameS = new FormControl("", Validators.required);
    this.lastNameS = new FormControl("", Validators.required);
    this.blabla = new FormControl(false);
  }

  createFormSimple(){
    this.myformSimple = new FormGroup({
      firstNameS: this.firstNameS,
      lastNameS: this.lastNameS,
      blabla: this.blabla
    });
  }

  onSubmitSimple(){
    console.log(this.myformSimple.value);
  }
}























 // createFormControls() {
  //   this.firstName = new FormControl("", Validators.required);
  //   this.lastName = new FormControl("", Validators.required);
  //   this.email = new FormControl("", [
  //     Validators.required,
  //     Validators.pattern("[^ @]*@[^ @]*")
  //   ]);
  //   this.password = new FormControl("", [
  //     Validators.required,
  //     Validators.minLength(8)
  //   ]);
  //   this.language = new FormControl("", Validators.required);
  // }

  // createForm() {
  //   this.myform = new FormGroup({
  //     name: new FormGroup({
  //       firstName: this.firstName,
  //       lastName: this.lastName
  //     }),
  //     email: this.email,
  //     password: this.password,
  //     language: this.language
  //   });
  // }

  // // createFormArr(){
  // //   (<FormArray>this.formGroup.controls.my_controls).push(this.formBuilder.group({
  // //     'id_internalVal'  :   formData.invdata[i][1],
  // //     'id_val'          :   formData.invdata[i][2],
  // //     'ordinate'        :   formData.invdata[i][3]
  // //   }));
   
  // // }

  // onSubmit() {
  //   console.log(this.myform.value);
  //   if (this.myform.valid) {
  //     console.log("Form Submitted!");
  //     console.log(this.myform.value);
  //     this.myform.reset();
  //   }
  // }




