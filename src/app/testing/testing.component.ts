import { Observable } from 'rxjs';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {

  public posts: Observable<any>;

  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

}
