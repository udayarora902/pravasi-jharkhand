import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SlideImage {
  url: string;
  alt: string;
}

@Component({
  selector: 'app-image-slideshow',
  imports: [CommonModule],
  templateUrl: './image-slideshow.html',
  styleUrl: './image-slideshow.css'
})
export class ImageSlideshowComponent implements OnInit, OnDestroy {
  @Input() images: SlideImage[] = [];
  @Input() autoPlay: boolean = true;
  @Input() interval: number = 2000;
  @Input() showNavigation: boolean = true;
  @Input() showDots: boolean = true;

  currentImageIndex = 0;
  private intervalId: any;

  ngOnInit() {
    if (this.autoPlay && this.images.length > 1) {
      this.startSlideshow();
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, this.interval);
  }

  stopSlideshow() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  nextImage() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  prevImage() {
    this.currentImageIndex = this.currentImageIndex === 0 
      ? this.images.length - 1 
      : this.currentImageIndex - 1;
  }

  goToImage(index: number) {
    this.currentImageIndex = index;
  }

  onMouseEnter() {
    if (this.autoPlay) {
      this.stopSlideshow();
    }
  }

  onMouseLeave() {
    if (this.autoPlay && !this.intervalId) {
      this.startSlideshow();
    }
  }
}
