import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';


@Component({
    selector: 'app-adduser',
    templateUrl: './addUser.html',
    styleUrls: ['./user.component.css']
})
export class AddUserComponent implements OnInit {
    hide = true;
    constructor() { }

    ngOnInit() {

    }
    onSubmit(formvalue: any) {
       
     let newuser ={
      fname:  formvalue.fname,
      lname: formvalue.lname,
      username: formvalue.username,
      email: formvalue.email,
      password    :formvalue.password,
      description  : formvalue.description,
      address  : formvalue.address,
      dob:formvalue.dob,
      gender:formvalue.gender
    };

console.log(JSON.stringify(newuser)+"new user");
    }
}