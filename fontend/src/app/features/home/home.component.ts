import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  secureData: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }
}
