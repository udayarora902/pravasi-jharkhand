import { Component, OnInit } from '@angular/core';

import { FooterComponent } from '../../components/footer/footer';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { ImageSlideshowComponent } from '../../components/image-slideshow/image-slideshow';
import { MainContentComponent } from '../../components/main-content/main-content';
import { NoticeBoardComponent } from '../../components/notice-board/notice-board';
import { HeroContentService, HeroPageContent } from '../../services/hero-content.service';

@Component({
  selector: 'app-home',
  imports: [
    FooterComponent,
    HeroSectionComponent,
    ImageSlideshowComponent,
    MainContentComponent,
    NoticeBoardComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
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
    this.heroContent = this.heroContentService.getHeroContent('home');
  }
}
