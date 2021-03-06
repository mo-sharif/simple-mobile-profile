import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'code-exercise';
  public dataJSON = {
    "data": {
      "userInfo": {
        "firstName": "John",
        "lastName": "Smith",
        "email": "webadmin@example.com",
        "phone": "1-800-555-6969",
        "mobile": "1-800-555-6968",
        "location": "321 Ray Street Pleasanton, CA",
        "avatarpath": "/avatars/avatar1465389809397-l.png",
        "userId": 1
      },
      "stats": [
        {"title": "IDEAS", "total":813},
        {"title": "VIEWS", "total":173502},
        {"title": "POSTS", "total":1622}
      ],
      "followings": [
        {
          "followee": {
            "userDisplayName": "Cat Jones",
            "avatar": "/avatars/avatar.jpg",
            "userId": 225,
            "url": "/Page/UserProfile?userid=225"
          },
          "targetUrl": "/Page/UserProfile?userid=225"
        },
        {
          "followee": {
            "userDisplayName": "Charlotte Henderson",
            "avatar": "/avatars/avatar.jpg",
            "userId": 111,
            "url": "/Page/UserProfile?userid=111"
          },
          "targetUrl": "/Page/UserProfile?userid=111"
        },
        {
          "followee": {
            "userDisplayName": "John Watson",
            "avatar": "/avatars/avatar1458848883442.jpg",
            "userId": 51,
            "url": "/Page/UserProfile?userid=51"
          },
          "targetUrl": "/Page/UserProfile?userid=51"
        },
        {
          "followee": {
            "userDisplayName": "Yasser Seirawan",
            "avatar": "/avatars/avatar1.jpg",
            "userId": 325,
            "url": "/Page/UserProfile?userid=325"
          },
          "targetUrl": "/Page/UserProfile?userid=325"
        },
        {
          "followee": {
            "userDisplayName": "Alice May",
            "avatar": "/avatars/default_person.svg",
            "userId": 22,
            "url": "/Page/UserProfile?userid=22"
          },
          "targetUrl": "/Page/UserProfile?userid=22"
        },
        {
          "followee": {
            "userDisplayName": "Boy Sack",
            "avatar": "/avatars/avatar2.jpg",
            "userId": 4,
            "url": "/Page/UserProfile?userid=4"
          },
          "targetUrl": "/Page/UserProfile?userid=4"
        }
      ],
      "followingTitle": "People I'm following",
      "followingCount": 6
    }
  }
  _user:any;
  _stats:{};
  _followers:{}
  constructor(){  }
  
   ngOnInit() {
      let _data = this.dataJSON
      this._user =  _data.data.userInfo;
      this._stats = _data.data.stats;
      console.log(_data.data.followings)
      this._followers = _data.data.followings;

   }
 
}
