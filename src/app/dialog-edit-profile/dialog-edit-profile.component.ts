import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-profile',
  templateUrl: './dialog-edit-profile.component.html',
  styleUrls: ['./dialog-edit-profile.component.scss']
})

export class DialogEditProfileComponent implements OnInit {
  loading = false;
  user: User;
  birthDate : Date;

  constructor(public dialogRef: MatDialogRef<DialogEditProfileComponent>) { }

  ngOnInit(): void {
  }

  saveUser() {

  }
}
