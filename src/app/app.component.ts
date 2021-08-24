import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'booking-system';

  imgCollection = [
    {
      image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      thumbImage: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'
      // [imageSize]: {height: '100%', weight: '100%', space:3}
    }, {
      image: 'https://s31606.pcdn.co/wp-content/uploads/2016/08/hotel-rooms.jpg',
      thumbImage: 'https://s31606.pcdn.co/wp-content/uploads/2016/08/hotel-rooms.jpg'
    }, {
      image: 'https://wallpaperaccess.com/full/2690549.jpg',
      thumbImage: 'https://wallpaperaccess.com/full/2690549.jpg'
    }, {
      image: 'https://www.thaiembassy.com/wp-content/uploads/2021/06/sha-plus-hotels-in-phuket-1280x720-1.jpg',
      thumbImage: 'https://www.thaiembassy.com/wp-content/uploads/2021/06/sha-plus-hotels-in-phuket-1280x720-1.jpg'
    }, {
      image: 'https://cst-media3.viomassl.com/3940/324702/1024x768s',
      thumbImage: 'https://cst-media3.viomassl.com/3940/324702/1024x768s'
    }
];


}
