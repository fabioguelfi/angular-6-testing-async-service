import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed, inject, async } from '@angular/core/testing';
import { PostsService } from './posts.service';
import { not } from '@angular/compiler/src/output/output_ast';

fdescribe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PostsService]
    });
  });

  it('should be created', inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));

  it('should bahave if post is populate', async(inject([PostsService], (service: PostsService) => {
    service.getPosts().subscribe(result => {
      // asserts
      expect(result[0].userId).not.toBeUndefined();
      expect(result[0].id).not.toBeNull();
      expect(result[0].title).not.toBeNull();
      expect(result[0].body.length).toBeGreaterThanOrEqual(100);
    })
  })));

  it('should behave be 200 status code', async(inject([PostsService], (service: PostsService) => {

    service.getPosts().subscribe(
      res => {
        expect(res.length).toBeGreaterThan(0);
      }
    )

  })));

});
