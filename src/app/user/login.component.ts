import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
    selector: 'loginuser',
    templateUrl: './login.component.html',
    styleUrls: ['./user.component.css']
})

export class LoginComponent implements OnInit {
    constructor(private router:Router) { }

    ngOnInit() {

    }
    onSubmit(formvalue: any) {

        let loginuser = {

            email: formvalue.email,
            password: formvalue.password
        };

        console.log(JSON.stringify(loginuser) + "new user");
        this.router.navigate(['dashboard']);
    }
}