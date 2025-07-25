import { Injectable } from '@angular/core';
import { SlideImage } from '../components/image-slideshow/image-slideshow';
import { NoticeItem } from '../components/notice-board/notice-board';

export interface HeroPageContent {
  images: SlideImage[];
  notices: NoticeItem[];
  noticeBoardTitle: string;
  noticeBoardIcon: string;
  showSlideshow: boolean;
  showNoticeBoard: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class HeroContentService {

  // Standard image array used across all pages
  private standardImages: SlideImage[] = [
    {
      url: 'Slider/1512206712.jpg',
      alt: 'Pravasi Jharkhand Community Event'
    },
    {
      url: 'Slider/1512225706.png',
      alt: 'Cultural Heritage Program'
    },
    {
      url: 'Slider/1512225849.png',
      alt: 'Community Gathering'
    },
    {
      url: 'Slider/1512402577.jpg',
      alt: 'Traditional Celebration'
    },
    {
      url: 'Slider/1512402593.jpg',
      alt: 'Pravasi Jharkhand Meeting'
    },
    {
      url: 'Slider/1512402605.jpg',
      alt: 'Community Festival'
    },
    {
      url: 'Slider/1512402615.jpg',
      alt: 'Cultural Program'
    },
    {
      url: 'Slider/1518705771.jpg',
      alt: 'Community Service'
    },
    {
      url: 'Slider/1520351644.jpg',
      alt: 'Leadership Meeting'
    },
    {
      url: 'Slider/1544379966.jpg',
      alt: 'Community Celebration'
    },
    {
      url: 'Slider/1554104370.jpg',
      alt: 'Cultural Festival'
    }
  ];

  // Standard notices used across all pages
  private standardNotices: NoticeItem[] = [
    {
      date: { day: '23', month: 'Dec' },
      title: 'Annual General Meeting',
      description: 'Join us for the annual Pravasi Jharkhand meeting. All members are cordially invited.',
      location: 'Jharkhand',
      time: '10:00 AM',
      link: '/pravasisammelansecond'
    }
  ];

  private pageContent: { [key: string]: HeroPageContent } = {
    // Home page content
    'home': {
      images: this.standardImages,
      notices: this.standardNotices,
      noticeBoardTitle: 'NOTICE BOARD',
      noticeBoardIcon: '📢',
      showSlideshow: true,
      showNoticeBoard: true
    },
    // Contact Us page content
    'contactus': {
      images: this.standardImages,
      notices: this.standardNotices,
      noticeBoardTitle: 'NOTICE BOARD',
      noticeBoardIcon: '📢',
      showSlideshow: true,
      showNoticeBoard: true
    },

    // IT and Media page content
    'itandmedia': {
      images: this.standardImages,
      notices: this.standardNotices,
      noticeBoardTitle: 'NOTICE BOARD',
      noticeBoardIcon: '📢',
      showSlideshow: true,
      showNoticeBoard: true
    },

    // Tokagsp page content
    'tokagsp': {
      images: this.standardImages,
      notices: this.standardNotices,
      noticeBoardTitle: 'NOTICE BOARD',
      noticeBoardIcon: '📢',
      showSlideshow: true,
      showNoticeBoard: true
    },

    // Photo Gallery page content
    'photogallery': {
      images: this.standardImages,
      notices: this.standardNotices,
      noticeBoardTitle: 'NOTICE BOARD',
      noticeBoardIcon: '📢',
      showSlideshow: true,
      showNoticeBoard: true
    },

    // Video Gallery page content
    'videogallery': {
      images: this.standardImages,
      notices: this.standardNotices,
      noticeBoardTitle: 'NOTICE BOARD',
      noticeBoardIcon: '📢',
      showSlideshow: true,
      showNoticeBoard: true
    },

    // National Team page content
    'nationalteam': {
      images: this.standardImages,
      notices: this.standardNotices,
      noticeBoardTitle: 'NOTICE BOARD',
      noticeBoardIcon: '📢',
      showSlideshow: true,
      showNoticeBoard: true
    },

    // Press Release page content
    'pressrelease': {
      images: this.standardImages,
      notices: this.standardNotices,
      noticeBoardTitle: 'NOTICE BOARD',
      noticeBoardIcon: '📢',
      showSlideshow: true,
      showNoticeBoard: true
    },

    // Feedback page content
    'feedback': {
      images: this.standardImages,
      notices: this.standardNotices,
      noticeBoardTitle: 'NOTICE BOARD',
      noticeBoardIcon: '📢',
      showSlideshow: true,
      showNoticeBoard: true
    },

    // Delhi Contact Person page content
    'delhicontactperson': {
      images: this.standardImages,
      notices: this.standardNotices,
      noticeBoardTitle: 'NOTICE BOARD',
      noticeBoardIcon: '📢',
      showSlideshow: true,
      showNoticeBoard: true
    },

    // Pravasi Sammelan Second page content
    'pravasisammelansecond': {
      images: this.standardImages,
      notices: this.standardNotices,
      noticeBoardTitle: 'NOTICE BOARD',
      noticeBoardIcon: '📢',
      showSlideshow: true,
      showNoticeBoard: true
    }
  };

  getHeroContent(pageName: string): HeroPageContent {
    const defaultContent = this.getDefaultContent();
    const content: Partial<HeroPageContent> = this.pageContent[pageName] || {};
    return {
      images: content.images ?? defaultContent.images,
      notices: content.notices ?? defaultContent.notices,
      noticeBoardTitle: content.noticeBoardTitle ?? defaultContent.noticeBoardTitle,
      noticeBoardIcon: content.noticeBoardIcon ?? defaultContent.noticeBoardIcon,
      showSlideshow: content.showSlideshow ?? defaultContent.showSlideshow,
      showNoticeBoard: content.showNoticeBoard ?? defaultContent.showNoticeBoard
    };
  }

  private getDefaultContent(): HeroPageContent {
    return {
      images: [
        {
          url: 'https://picsum.photos/800/400?random=1',
          alt: 'Default Image'
        }
      ],
      notices: [
        {
          date: { day: '1', month: 'Jan' },
          title: 'Welcome',
          description: 'Welcome to Pravasi Jharkhand community website.',
          location: 'Online',
          time: 'Always'
        }
      ],
      noticeBoardTitle: 'NOTICE BOARD',
      noticeBoardIcon: '📢',
      showSlideshow: true,
      showNoticeBoard: true
    };
  }
}
