import { Component } from "@angular/core";
import { User } from "../../share/user/user";
import { UserService } from "../../share/user/user.service";
import { Router } from "@angular/router";

@Component({
    selector: "my-app",
    providers: [UserService],
    template: `
    <StackLayout>
      <TextField hint="Email Address" [(ngModel)]="user.email" keyboardType="email"
        autocorrect="false" autocapitalizationType="none"></TextField>
      <TextField hint="Password" secure="true" [(ngModel)]="user.password"></TextField>
      <Button [text]="isLogginIn ? 'Sign ina' : 'Sign up'" (tap)="submit()"></Button>
      <Button [text]="isLogginIn ? 'Sign up' : 'Back to login'"></Button>
    </StackLayout>
  `,
    styleUrls: ["views/login/login-common.css"]
})
export class LoginComponent {
    email: String;
    user: User;
    isLogginIn: Boolean;

    constructor(private router:Router,private userService: UserService) {
        console.log("Init..");
        this.isLogginIn = true;
        this.user = new User();
        this.user.email = "andywaz@gmial.com";
    }


    submit() {
        if (this.isLogginIn) {
            this.login()
        } else { this.signUp(); }
        console.log("Using mail and password: ", this.user.email, this.user.password);
    }

    toggleDisplay() {
        this.isLogginIn = !this.isLogginIn;
    }

    login() {
        console.log("login..");
        this.router.navigate(["/list"]);
        this.isLogginIn = false;
    }
    signUp() {
        this.userService.register(this.user);
        this.isLogginIn = true;
    }
}
