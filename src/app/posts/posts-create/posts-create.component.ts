import { Component } from '@angular/core';
import { Post } from '../posts.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

// Defines a component with the decorator ---- need to import Component
// Need to include decorater in the form of object that defines various thing... template
// Selector is an html element by which ou can use the component
// templateUrl is an html marup that will be used
// Use "app-..." to not clash with other HTML
@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./post-create.scss']
})
export class PostCreateComponent {
  enteredTitle = "";
  enteredContent = "";
  
  // Includes the service
  constructor(public postsService: PostsService){}

  onAddPost(form: NgForm) {
    if (form.invalid){
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postsService.addPosts(form.value.title, form.value.content)
    form.resetForm();
  };
};
