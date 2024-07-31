import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  images = [
    {
      src: 'assets/bolcsode/31.jpg',
      alt: 'Image 1',
      title: 'Bölcsöde építés',
      description: 'Description for Image 1'
    },
    {
      src: 'assets/bolcsode/32.jpg',
      alt: 'Image 2',


    },
    {
      src: 'assets/bolcsode/33.jpg',
      alt: 'Image 3',


    },
    // {
    //   src: 'assets/bolcsode/34.jpg',
    //   alt: 'Image 3',

    // },
    // {
    //   src: 'assets/bolcsode/35.jpg',
    //   alt: 'Image 3',

    // },
    // {
    //   src: 'assets/bolcsode/36.jpg',
    //   alt: 'Image 3',

    // },

    {
      src: 'assets/burkolas/75.jpg',
      alt: 'Image 3',
      title: 'Burkolás',
      description: 'Description for Image 3'
    }
    ,
    {
      src: 'assets/burkolas/71.jpg',
      alt: 'Image 3',
   
    },
    {
      src: 'assets/burkolas/74.jpg',
      alt: 'Image 3',
    
    },
    // {
    //   src: 'assets/burkolas/74.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },

    // {
    //   src: 'assets/burkolas/76.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/burkolas/77.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/burkolas/78.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    {
      src: 'assets/csohidfot/21.jpg',
      alt: 'Image 3',
      title: 'Csőhíd építés (fémszerkezet)',
      description: 'Description for Image 3'
    },
    {
      src: 'assets/csohidfot/22.jpg',
      alt: 'Image 3',
     
    },
    {
      src: 'assets/csohidfot/211.jpg',
      alt: 'Image 3',
     
    },
    // {
    //   src: 'assets/karoligasparbontas/51.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    {
      src: 'assets/karoligasparbontas/52.jpg',
      alt: 'Image 3',
      title: 'Épület bontás és takarítás',
      description: 'Description for Image 3'
    },
    {
      src: 'assets/karoligasparbontas/53.jpg',
      alt: 'Image 3',
    
    },
    {
      src: 'assets/karoligasparbontas/54.jpg',
      alt: 'Image 3',
    }
    // },
    // {
    //   src: 'assets/karoligasparbontas/55.jpg',
    //   alt: 'Image 3',
   
    // },
    // {
    //   src: 'assets/karoligasparbontas/56.jpg',
    //   alt: 'Image 3',
  
    // },
    // {
    //   src: 'assets/karoligasparbontas/57.jpg',
    //   alt: 'Image 3',
   
    // },
    // {
    //   src: 'assets/karoligasparbontas/58.jpg',
    //   alt: 'Image 3',
  
    // },
    // {
    //   src: 'assets/karoligasparbontas/59.jpg',
    //   alt: 'Image 3',
 
    // },
    // {
    //   src: 'assets/karoligasparbontas/511.jpg',
    //   alt: 'Image 3',

    // },
    // {
    //   src: 'assets/karoligasparbontas/512.jpg',
    //   alt: 'Image 3',
   
    // },
    // {
    //   src: 'assets/karoligasparbontas/513.jpg',
    //   alt: 'Image 3',

    // },
    // {
    //   src: 'assets/karoligasparbontas/514.jpg',
    //   alt: 'Image 3',

    // },
    // {
    //   src: 'assets/karoligasparbontas/515.jpg',
    //   alt: 'Image 3',

    // }
   ,{
      src: 'assets/medenceepites/65.jpg',
      alt: 'Image 3',
      title: 'Medence építés',
      description: 'Description for Image 3'
    },
    {
      src: 'assets/medenceepites/68.jpg',
      alt: 'Image 3',

    },
    {
      src: 'assets/medenceepites/62.jpg',
      alt: 'Image 3',

    },
    // {
    //   src: 'assets/medenceepites/64.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/medenceepites/65.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/medenceepites/67.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/medenceepites/68.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/medenceepites/69.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/medenceepites/611.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    {
      src: 'assets/napelempark/1.jpg',
      alt: 'Image 3',
      title: 'Napelem park építés',
      description: 'Description for Image 3'
    },
    {
      src: 'assets/napelempark/2.jpg',
      alt: 'Image 3',
  
    },
    {
      src: 'assets/napelempark/3.jpg',
      alt: 'Image 3',
 
    },
    // {
    //   src: 'assets/napelempark/4.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/napelempark/5.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    {
      src: 'assets/utepites/41.jpg',
      alt: 'Image 3',
      title: 'Útépítés',
      description: 'Description for Image 3'
    },
    {
      src: 'assets/utepites/47.jpg',
      alt: 'Image 3',

    },
    {
      src: 'assets/utepites/45.jpg',
      alt: 'Image 3',
   
     },
    // {
    //   src: 'assets/utepites/44.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/utepites/45.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/utepites/46.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/utepites/47.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/utepites/48.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // },
    // {
    //   src: 'assets/utepites/49.jpg',
    //   alt: 'Image 3',
    //   title: 'Image 3',
    //   description: 'Description for Image 3'
    // }
  ];

}
