import { Component, OnInit } from '@angular/core';
import {Goal} from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css'],
  styles: ['h6 {color: red} ']
})
export class GoalComponent implements OnInit {
  goals:Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son', new Date(2020,3,14)),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date (2019,6,9)),
    new Goal(3, 'Get new phone case', 'Diana has her birthday coming up soon', new Date (2022,2,1)),
    new Goal(4, 'Get Dog food', 'Pupper likes expensive sancks', new Date (2023,4,2)),
    new Goal(5, 'Solve math homework', 'Damn Math', new Date (2030,4,6)),
    new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date (2030,4,8)),
  ];
  toggleDetails(index: number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  deleteGoal(isComplete: any, index: number){
    if (isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if(toDelete){
        this.goals.splice(index,1);
      }     
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
