import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
_SITETITLE:any;
_SCREENPHOTO:any;
_BAGPHOTO:any;
_FACEBOOK:any;
_WHATSAPP:any;   
_ITEMS:any = [];

constructor(private http:HttpClient) { }

ngOnInit(): void {
  localStorage.setItem('Title', 'Angular Lesson');
  localStorage.setItem('ScreenImage', 'assets/screen.jpg');
  localStorage.setItem('BagImage', 'assets/bag.jpg');
  localStorage.setItem('Facebook', 'https://facebook.com');
  localStorage.setItem('Whatsapp', 'https://whatsapp.com');
  this.GetAllDatas();
  this.GetNamesData();
}
GetAllDatas() {
  this._SITETITLE = localStorage.getItem('Title');
  this._SCREENPHOTO = localStorage.getItem('ScreenImage');
  this._BAGPHOTO = localStorage.getItem('BagImage');
  this._FACEBOOK = localStorage.getItem('Facebook');
  this._WHATSAPP  = localStorage.getItem('Whatsapp');
  this._ITEMS = [
    {id: 1, name: 'Software', lastname: 'Developer'},
    {id: 1, name: 'Software', lastname: 'Engineer'},
    {id: 1, name: 'Mobile', lastname: 'Developer'},
    {id: 1, name: 'Data', lastname: 'Analyst'},
    {id: 1, name: 'Graphics', lastname: 'Designer'},
  ];
}
GetNamesData() {
  this.http.get("https://regres.in/api/users?page=1").subscribe(
    (res:any) => {
      this._ITEMS = res.data;
      console.log("This is the response", res.data);
    },
    (err:any) => {
      console.log(err)
    }
      )
}
}
