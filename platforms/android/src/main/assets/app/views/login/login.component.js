"use strict";
var core_1 = require("@angular/core");
var user_1 = require("../../share/user/user");
var user_service_1 = require("../../share/user/user.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        console.log("Init..");
        this.isLogginIn = true;
        this.user = new user_1.User();
        this.user.email = "andywaz@gmial.com";
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLogginIn) {
            this.login();
        }
        else {
            this.signUp();
        }
        console.log("Using mail and password: ", this.user.email, this.user.password);
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLogginIn = !this.isLogginIn;
    };
    LoginComponent.prototype.login = function () {
        console.log("login..");
        this.router.navigate(["/list"]);
        this.isLogginIn = false;
    };
    LoginComponent.prototype.signUp = function () {
        this.userService.register(this.user);
        this.isLogginIn = true;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        template: "\n    <StackLayout>\n      <TextField hint=\"Email Address\" [(ngModel)]=\"user.email\" keyboardType=\"email\"\n        autocorrect=\"false\" autocapitalizationType=\"none\"></TextField>\n      <TextField hint=\"Password\" secure=\"true\" [(ngModel)]=\"user.password\"></TextField>\n      <Button [text]=\"isLogginIn ? 'Sign ina' : 'Sign up'\" (tap)=\"submit()\"></Button>\n      <Button [text]=\"isLogginIn ? 'Sign up' : 'Back to login'\"></Button>\n    </StackLayout>\n  ",
        styleUrls: ["views/login/login-common.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMEM7QUFDMUMsOENBQTZDO0FBQzdDLDhEQUE0RDtBQUM1RCwwQ0FBeUM7QUFnQnpDLElBQWEsY0FBYztJQUt2Qix3QkFBb0IsTUFBYSxFQUFTLFdBQXdCO1FBQTlDLFdBQU0sR0FBTixNQUFNLENBQU87UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUM5RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztJQUMxQyxDQUFDO0lBR0QsK0JBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUNELCtCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQWpDRCxJQWlDQztBQWpDWSxjQUFjO0lBZDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1FBQ3hCLFFBQVEsRUFBRSwyZEFRWDtRQUNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO0tBQzlDLENBQUM7cUNBTTZCLGVBQU0sRUFBc0IsMEJBQVc7R0FMekQsY0FBYyxDQWlDMUI7QUFqQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlL3VzZXIvdXNlclwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZS91c2VyL3VzZXIuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxyXG4gICAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxTdGFja0xheW91dD5cclxuICAgICAgPFRleHRGaWVsZCBoaW50PVwiRW1haWwgQWRkcmVzc1wiIFsobmdNb2RlbCldPVwidXNlci5lbWFpbFwiIGtleWJvYXJkVHlwZT1cImVtYWlsXCJcclxuICAgICAgICBhdXRvY29ycmVjdD1cImZhbHNlXCIgYXV0b2NhcGl0YWxpemF0aW9uVHlwZT1cIm5vbmVcIj48L1RleHRGaWVsZD5cclxuICAgICAgPFRleHRGaWVsZCBoaW50PVwiUGFzc3dvcmRcIiBzZWN1cmU9XCJ0cnVlXCIgWyhuZ01vZGVsKV09XCJ1c2VyLnBhc3N3b3JkXCI+PC9UZXh0RmllbGQ+XHJcbiAgICAgIDxCdXR0b24gW3RleHRdPVwiaXNMb2dnaW5JbiA/ICdTaWduIGluYScgOiAnU2lnbiB1cCdcIiAodGFwKT1cInN1Ym1pdCgpXCI+PC9CdXR0b24+XHJcbiAgICAgIDxCdXR0b24gW3RleHRdPVwiaXNMb2dnaW5JbiA/ICdTaWduIHVwJyA6ICdCYWNrIHRvIGxvZ2luJ1wiPjwvQnV0dG9uPlxyXG4gICAgPC9TdGFja0xheW91dD5cclxuICBgLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJ2aWV3cy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XHJcbiAgICBlbWFpbDogU3RyaW5nO1xyXG4gICAgdXNlcjogVXNlcjtcclxuICAgIGlzTG9nZ2luSW46IEJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6Um91dGVyLHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJbml0Li5cIik7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbkluID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgICAgIHRoaXMudXNlci5lbWFpbCA9IFwiYW5keXdhekBnbWlhbC5jb21cIjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2luSW4pIHtcclxuICAgICAgICAgICAgdGhpcy5sb2dpbigpXHJcbiAgICAgICAgfSBlbHNlIHsgdGhpcy5zaWduVXAoKTsgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNpbmcgbWFpbCBhbmQgcGFzc3dvcmQ6IFwiLCB0aGlzLnVzZXIuZW1haWwsIHRoaXMudXNlci5wYXNzd29yZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgICAgICB0aGlzLmlzTG9nZ2luSW4gPSAhdGhpcy5pc0xvZ2dpbkluO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4uLlwiKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSk7XHJcbiAgICAgICAgdGhpcy5pc0xvZ2dpbkluID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzaWduVXAoKSB7XHJcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpO1xyXG4gICAgICAgIHRoaXMuaXNMb2dnaW5JbiA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuIl19