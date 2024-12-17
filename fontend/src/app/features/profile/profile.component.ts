import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{
  username: string | null = '';

  ngOnInit(): void {
    this.username=localStorage.getItem('username')
  }
}
