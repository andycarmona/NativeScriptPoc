"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.heroesUrl = "./heroes.json";
    }
    UserService.prototype.getHeroes = function () {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        var body = res.json();
        console.dump("Hero object: " + body);
        return body.data || {};
    };
    UserService.prototype.handleError = function () {
        return Promise.reject("Error");
    };
    UserService.prototype.register = function (user) {
        console.dump("user object: " + user);
        alert("About to register: " + user.email);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBRXhELGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFNL0IsSUFBYSxXQUFXO0lBSXBCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ0QixjQUFTLEdBQUcsZUFBZSxDQUFDO0lBSXBDLENBQUM7SUFFRCwrQkFBUyxHQUFUO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDL0IsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDdEIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLEdBQWE7UUFDckIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUNBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQztBQTVCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBS2lCLFdBQUk7R0FKckIsV0FBVyxDQTRCdkI7QUE1Qlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSBcIi4vaGVyb1wiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgaGVyb2VzVXJsID0gXCIuL2hlcm9lcy5qc29uXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldEhlcm9lcygpOiBQcm9taXNlPEhlcm9bXT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuaGVyb2VzVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4odGhpcy5leHRyYWN0RGF0YSlcclxuICAgICAgICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcclxuICAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5kdW1wKFwiSGVybyBvYmplY3Q6IFwiKyBib2R5KTtcclxuICAgICAgICByZXR1cm4gYm9keS5kYXRhIHx8IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUVycm9yKCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChcIkVycm9yXCIpO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xyXG4gICAgICAgIGNvbnNvbGUuZHVtcChcInVzZXIgb2JqZWN0OiBcIisgdXNlcik7XHJcbiAgICAgICAgYWxlcnQoXCJBYm91dCB0byByZWdpc3RlcjogXCIgKyB1c2VyLmVtYWlsKTtcclxuICAgIH1cclxufSJdfQ==