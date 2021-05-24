import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('headerElement',{static:false,read:ElementRef}) data:any
  @ViewChild('image',{static:false,read:ElementRef}) image:any
  constructor() { }
  
  @HostListener('window:scroll',['$event'])
  onWindowScroll(){
 if (window.pageYOffset>0) {
//    console.log('entered')
    this.data.nativeElement.classList.add('sticky')
    this.image.nativeElement.classList.add('imageResize')
    this.image.nativeElement.classList.remove('image')
    this.image.nativeElement.classList.remove('header')
    
    
  }else{
    this.data.nativeElement.classList.remove('sticky')
    this.image.nativeElement.classList.add('image')
    this.image.nativeElement.classList.add('header')
    this.image.nativeElement.classList.remove('imageResize')
  }
}
  ngOnInit(): void {
  }

}
