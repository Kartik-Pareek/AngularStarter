import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../_services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  panelOpenState = false;
  model: any = {};
  menuList = [
    {
      "icon":"dashboard",
      "title":"Dashboard",
      "subMenu":[]
    },
    {
      "icon":"supervisor_account",
      "title":"Admin",
      "subMenu":[
        {
          "title":"Company Profile",
        }
      ]
    },
    {
      "icon":"business",
      "title":"Contact",
      "subMenu":[
        {
          "title":"Masters",
        },
        {
          "title":"Customer",
        },
        {
          "title":"Vendor",
        }
      ]
    },
    {
      "icon":"add_shopping_cart",
      "title":"Inventry",
      "subMenu":[
        {
          "title":"Masters",
        },
        {
          "title":"Products",
        },
        {
          "title":"Goods Recieved",
        },
        {
          "title":"Goods Issue",
        }
      ]
    },
    {
      "icon":"rotate_right",
      "title":"Sales",
      "subMenu":[
        {
          "title":"Invoice",
        }
      ]
    },
    {
      "icon":"rotate_left",
      "title":"Puchase",
      "subMenu":[
        {
          "title":"Invoice",
        }
      ]
    }
    
  ];

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService,private http: HttpClient) { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully');
    }, error => {
      console.log('Failed to login');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
