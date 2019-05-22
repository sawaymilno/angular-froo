import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Todo } from '../../classes/todo'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      {id: 11, name: 'Wash Dishes', task: 'Wash them and put in dishwasher'},
      {id: 12, name: 'Mop Floor', task: 'Mop and dry floors'},
      {id: 13, name: 'Clean Couch', task: 'Clean the couch and fabreeze it'},
      {id: 14, name: 'Dog Walk', task: 'Take Fido out for a walk'},
      {id: 15, name: 'School Day', task: 'Take kids to school'},
      {id: 16, name: 'Trash day', task: 'Take out trash to the curb'},
      {id: 17, name: 'Call Boss', task: 'Call the milkman'}
    ]

    const racers = [
      {id: 1, firstName: 'Charlie', lastName: 'McClung'},
      {id: 2, firstName: 'Chad', lastName: 'Person'}
    ]

    return {
      todos,
      racers
    }
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11). (Wash Dishes)
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(list: any[]): number {
  //   return list.length > 0 ? Math.max(...list.map(item => item.id)) + 1 : 11
  // }
}
