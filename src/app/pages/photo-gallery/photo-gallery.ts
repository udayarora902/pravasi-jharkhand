import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { FooterComponent } from '../../components/footer/footer';
import { ImageSlideshowComponent } from '../../components/image-slideshow/image-slideshow';
import { NoticeBoardComponent } from '../../components/notice-board/notice-board';
import { HeroContentService, HeroPageContent } from '../../services/hero-content.service';

@Component({
  selector: 'app-photo-gallery',
  imports: [HeroSectionComponent, FooterComponent, ImageSlideshowComponent, NoticeBoardComponent],
  templateUrl: './photo-gallery.html',
  styleUrl: './photo-gallery.css'
})
export class PhotoGallery implements OnInit {
heroContent: HeroPageContent = {
    noticeBoardTitle: 'NOTICE BOARD',
    noticeBoardIcon: '📢',
    images: [] as any,
    notices: [] as any,
    showSlideshow: true,
    showNoticeBoard: true
  };

  constructor(private heroContentService: HeroContentService) {}

  ngOnInit() {
    this.heroContent = this.heroContentService.getHeroContent('photogallery');
  }
}
