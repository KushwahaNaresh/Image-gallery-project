import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient) { }

  getimgdata(){
    //  return this.api.get(`http://localhost:3000/posts`).pipe(catchError(this.handleError))
     return [
      { "imgid": 1,
        "name": "Flowers",
        "category": "flowers",
        "path":"assets/categories/flowers/flowers1.jpg",
        "likes": 40
      },
      { "imgid": 2,
        "name": "Nature",
        "category": "nature",
        "path":"assets/categories/nature/nature1.jpg",
        "likes": 40
      },
      { "imgid": 3,
        "name": "Cartoons",
        "category": "cartoons",
        "path":"assets/categories/cartoon/cartoon1.jpg",
        "likes": 40
      },
      { "imgid": 4,
        "name": "mountains",
        "category": "mountains",
        "path":"assets/categories/mountains/mountains1.jpg",
        "likes": 40
      },
      { "imgid": 5,
      "name": "Nights",
      "category": "nights",
      "path":"assets/categories/nights/nights1.jpg",
      "likes": 40
      },
      { "imgid": 6,
        "name": "under water",
        "category": "under water",
        "path":"assets/categories/under-water/uw1.jpg",
        "likes": 40
      },
      { "imgid": 7,
        "name": "Flowers",
        "category": "flowers",
        "path":"assets/categories/flowers/flowers2.jpg",
        "likes": 40
      },
      { "imgid": 8,
        "name": "Nature",
        "category": "nature",
        "path":"assets/categories/nature/nature2.jpg",
        "likes": 40
      },
      { "imgid": 9,
        "name": "Cartoons",
        "category": "cartoons",
        "path":"assets/categories/cartoon/cartoon2.jpg",
        "likes": 40
      },
      { "imgid": 10,
        "name": "mountains",
        "category": "mountains",
        "path":"assets/categories/mountains/mountains2.jpg",
        "likes": 40
      },
      { "imgid": 11,
      "name": "Nights",
      "category": "nights",
      "path":"assets/categories/nights/nights2.jpg",
      "likes": 40
      },
      { "imgid": 12,
        "name": "under water",
        "category": "under water",
        "path":"assets/categories/under-water/uw2.jpg",
        "likes": 40
      },
      { "imgid": 13,
        "name": "Flowers",
        "category": "flowers",
        "path":"assets/categories/flowers/flowers3.jpg",
        "likes": 40
      },
      { "imgid": 14,
        "name": "Flowers",
        "category": "flowers",
        "path":"assets/categories/flowers/flowers4.jpg",
        "likes": 40
      },
      { "imgid": 15,
        "name": "Nature",
        "category": "nature",
        "path":"assets/categories/nature/nature3.jpg",
        "likes": 40
      },
      { "imgid": 16,
        "name": "mountains",
        "category": "mountains",
        "path":"assets/categories/mountains/mountains3.jpg",
        "likes": 40
      },
      { "imgid": 17,
      "name": "Nights",
      "category": "nights",
      "path":"assets/categories/nights/nights3.jpg",
      "likes": 40
      },
      { "imgid": 18,
        "name": "under water",
        "category": "under water",
        "path":"assets/categories/under-water/uw3.jpg",
        "likes": 40
      },
      { "imgid": 19,
        "name": "Flowers",
        "category": "flowers",
        "path":"assets/categories/flowers/flowers5.jpg",
        "likes": 40
      },
      { "imgid": 20,
        "name": "Nature",
        "category": "nature",
        "path":"assets/categories/nature/nature4.jpg",
        "likes": 40
      },
      { "imgid": 21,
      "name": "Nature",
      "category": "nature",
      "path":"assets/categories/nature/nature5.jpg",
      "likes": 40
      },
      { "imgid": 22,
        "name": "mountains",
        "category": "mountains",
        "path":"assets/categories/mountains/mountains4.jpg",
        "likes": 40
      },
      { "imgid": 23,
      "name": "Nights",
      "category": "nights",
      "path":"assets/categories/nights/nights4.jpg",
      "likes": 40
      },
      { "imgid": 24,
        "name": "under water",
        "category": "under water",
        "path":"assets/categories/under-water/uw4.jpg",
        "likes": 40
      },
      { "imgid": 25,
        "name": "Flowers",
        "category": "flowers",
        "path":"assets/categories/flowers/flowers6.jpg",
        "likes": 40
      },
      { "imgid": 26,
        "name": "Nature",
        "category": "nature",
        "path":"assets/categories/nature/nature6.jpg",
        "likes": 40
      },
      { "imgid": 27,
      "name": "mountains",
      "category": "mountains",
      "path":"assets/categories/mountains/mountains5.jpg",
      "likes": 40
      },
      { "imgid": 28,
        "name": "mountains",
        "category": "mountains",
        "path":"assets/categories/mountains/mountains6.jpg",
        "likes": 40
      },
      { "imgid": 29,
      "name": "Nights",
      "category": "nights",
      "path":"assets/categories/nights/nights5.jpg",
      "likes": 40
      },
      { "imgid": 30,
        "name": "under water",
        "category": "under water",
        "path":"assets/categories/under-water/uw5.jpg",
        "likes": 40
      },
      { "imgid": 31,
        "name": "Flowers",
        "category": "flowers",
        "path":"assets/categories/flowers/flowers7.jpg",
        "likes": 40
      },
      { "imgid": 32,
        "name": "Nature",
        "category": "nature",
        "path":"assets/categories/nature/nature7.jpg",
        "likes": 40
      },
      { "imgid": 33,
      "name": "Nature",
      "category": "nature",
      "path":"assets/categories/nature/nature8.jpg",
      "likes": 40
      },
      { "imgid": 34,
        "name": "mountains",
        "category": "mountains",
        "path":"assets/categories/mountains/mountains7.jpg",
        "likes": 40
      },
      { "imgid": 35,
      "name": "mountains",
        "category": "mountains",
        "path":"assets/categories/mountains/mountains8.jpg",
        "likes": 40
      },
      { "imgid": 36,
      "name": "mountains",
      "category": "mountains",
      "path":"assets/categories/mountains/mountains9.jpg",
      "likes": 400
      },
      { "imgid": 37,
      "name": "mountains",
      "category": "mountains",
      "path":"assets/categories/mountains/mountains10.jpg",
      "likes": 40
      },
      { "imgid": 38,
        "name": "Nature",
        "category": "nature",
        "path":"assets/categories/nature/nature9.jpg",
        "likes": 40
      },
      { "imgid": 39,
      "name": "Nature",
      "category": "nature",
      "path":"assets/categories/nature/nature10.jpg",
      "likes": 40
      },
      { "imgid": 40,
      "name": "Flowers",
      "category": "flowers",
      "path":"assets/categories/flowers/flowers8.jpg",
      "likes": 40
      },
      { "imgid": 41,
      "name": "Flowers",
      "category": "flowers",
      "path":"assets/categories/flowers/flowers9.jpg",
      "likes": 40
      },
      { "imgid": 42,
      "name": "Flowers",
      "category": "flowers",
      "path":"assets/categories/flowers/flowers10.jpg",
      "likes": 40
      }
    ]
  }
 
  private handleError(error:HttpErrorResponse){

    let errorMessage = "Something went wrong..."

          return throwError(errorMessage)
  }
}
