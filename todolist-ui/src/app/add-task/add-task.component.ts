import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  data:any;

  task:any;
  description:any;

  constructor(private dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) matdata:any,
    private todoService:TodoService) { 
      this.data = matdata;
    }

  ngOnInit(): void {
    console.log(this.data);
    
  }

  update(){
    this.todoService.updateList(this.data.note).subscribe(i=>{
      this.dialogRef.close();
    },err=>{
      console.log(err);
    })
  }

  add(){
    this.todoService.addList({task:this.task, description:this.description}).subscribe(i=>{
      this.dialogRef.close();
    },err=>{
      console.log(err);
    })
  }

}
