import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AddTaskComponent } from '../add-task/add-task.component';
import { LoginService } from '../service/login.service';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  notes:any=[];


  constructor(private loginService: LoginService, private router: Router,private _snackBar: MatSnackBar, private todoService:TodoService
    ,private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.loginService.token == '') {
      this.router.navigateByUrl('/login') 
   }

   this.getAllLists();

  }

  checkboxUpdated(noteUpdate:any){
      console.log(noteUpdate);
      this.todoService.updateList(noteUpdate).subscribe(i=>{
        this.getAllLists();
      },err=>{
        console.log(err);
        
      })
  }

  openDialog(note:any) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      type: '2',
      note:note
    };

    this.dialog.open(AddTaskComponent, dialogConfig).afterClosed().subscribe(i=>{
      this.getAllLists();
    });
}


openDialogAdd(){
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;

  dialogConfig.data = {
    type: '1',
  };

  this.dialog.open(AddTaskComponent, dialogConfig).afterClosed().subscribe(i=>{
    this.getAllLists();
  });
}

  getAllLists(){
    this.todoService.getAllLists().subscribe((i:any)=>{
      this.notes = i.content;
    },err=>{
      console.log(err);
    })
  }

  deleteTask(note:any){
    this.todoService.deleteTask(note.id).subscribe(i=>{
      this.getAllLists();
    },err=>{

    })
  }

  logout(){
    this.loginService.token="";
    this.router.navigateByUrl("/login")
  }

}
