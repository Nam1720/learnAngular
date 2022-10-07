import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Author } from '../../../authors.model';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss'],
})
export class AuthorDetailComponent implements OnInit, OnChanges, DoCheck {
  @Input() countDetail!: number;
  @Input() author!: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<Number>();

  constructor() {
    console.log('first');
  }
  ngDoCheck(): void {
    console.log('docheck', this.countDetail);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngOnInit(): void {
    console.log('oninit');
  }

  increment(): void {
    console.log('increment');
    this.countDetail = this.countDetail + 1;
  }
}
