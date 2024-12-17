import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";

@Component({
  selector: 'app-layout-contain',
  templateUrl: './layout-contain.component.html',
  styleUrl: './layout-contain.component.scss'
})
export class LayoutContainComponent implements OnInit{
  constructor(private authService:AuthService) {
  }
  ngOnInit(): void {
  }
}
