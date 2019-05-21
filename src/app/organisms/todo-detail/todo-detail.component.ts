import { Component, OnInit, Input } from '@angular/core'

import { ActivatedRoute } from '@angular/router' //Contains current URL
import { Location } from '@angular/common' //Communicate with Browser, like BrowserRouter

import { Todo } from '../../classes/todo'
import { TodoService } from '../../services/todo/todo.service'

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  @Input() todo: Todo

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getTodo()
  }

  getTodo(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.todoService.getTodo(id).subscribe(todo => this.todo = todo)
  }

  goBack(): void {
    this.location.back()
  }
}
