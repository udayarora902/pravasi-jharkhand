# Hero Section Content Management Guide

## Overview
Every page in the application now uses the same HeroSectionComponent with customizable content. The content for each page is managed through the `HeroContentService`.

## How to Edit Content

### Location
Edit the content in: `src/app/services/hero-content.service.ts`

### Structure
Each page has its own content configuration with the following properties:

```typescript
interface HeroPageContent {
  images: SlideImage[];           // Array of slideshow images
  notices: NoticeItem[];          // Array of notice board items
  noticeBoardTitle?: string;      // Title for notice board (optional)
  noticeBoardIcon?: string;       // Icon for notice board (optional)
  showSlideshow?: boolean;        // Show/hide slideshow (optional)
  showNoticeBoard?: boolean;      // Show/hide notice board (optional)
}
```

### Available Pages and Their Keys
- **Home**: `'home'`
- **Contact Us**: `'contactus'`
- **IT & Media**: `'itandmedia'`
- **TOKAGSP**: `'tokagsp'`
- **Photo Gallery**: `'photogallery'`
- **Video Gallery**: `'videogallery'`
- **National Team**: `'nationalteam'`
- **Press Release**: `'pressrelease'`
- **Feedback**: `'feedback'`
- **Delhi Contact**: `'delhicontactperson'`
- **Pravasi Sammelan**: `'pravasisammelansecond'`

## Editing Examples

### To Change Images for a Page
```typescript
'contactus': {
  images: [
    {
      url: 'https://your-new-image-url.com/image1.jpg',
      alt: 'New Contact Image 1'
    },
    {
      url: 'https://your-new-image-url.com/image2.jpg', 
      alt: 'New Contact Image 2'
    }
  ],
  // ... rest of content
}
```

### To Add/Edit Notices
```typescript
'feedback': {
  // ... images
  notices: [
    {
      date: { day: '25', month: 'Dec' },
      title: 'New Feedback System',
      description: 'We have launched a new feedback system for better user experience.',
      location: 'Online Portal',
      time: 'Available 24/7'
    },
    // Add more notices here
  ],
  // ... rest of content
}
```

### To Change Notice Board Title and Icon
```typescript
'itandmedia': {
  // ... images and notices
  noticeBoardTitle: 'TECH ANNOUNCEMENTS',
  noticeBoardIcon: '⚡',
  // ... rest of content
}
```

### To Hide Slideshow or Notice Board
```typescript
'photogallery': {
  // ... content
  showSlideshow: true,      // Set to false to hide slideshow
  showNoticeBoard: false,   // Set to false to hide notice board
}
```

## Benefits of This System

✅ **Centralized Content Management**: All hero section content in one place
✅ **Easy to Edit**: Simply modify the service file to change any page content
✅ **Type Safety**: TypeScript interfaces ensure data consistency
✅ **Flexible Layout**: Can show/hide slideshow or notice board per page
✅ **Consistent UI**: Same component used across all pages
✅ **Page-Specific Content**: Each page can have unique images, notices, and styling

## Adding New Pages

To add a new page with HeroSection:

1. Add content to `hero-content.service.ts`:
```typescript
'newpage': {
  images: [/* your images */],
  notices: [/* your notices */],
  noticeBoardTitle: 'YOUR TITLE',
  noticeBoardIcon: '🆕'
}
```

2. In your new page component:
```typescript
export class NewPage implements OnInit {
  heroContent!: HeroPageContent;

  constructor(private heroContentService: HeroContentService) {}

  ngOnInit() {
    this.heroContent = this.heroContentService.getHeroContent('newpage');
  }
}
```

3. In your page template:
```html
<app-hero-section 
  [images]="heroContent.images"
  [notices]="heroContent.notices"
  [noticeBoardTitle]="heroContent.noticeBoardTitle"
  [noticeBoardIcon]="heroContent.noticeBoardIcon"
  [showSlideshow]="heroContent.showSlideshow ?? true"
  [showNoticeBoard]="heroContent.showNoticeBoard ?? true">
</app-hero-section>
```

## Notes
- Default values are provided if content is not found for a page
- Images use Picsum for demo purposes - replace with actual image URLs
- Notice board supports emojis for icons
- All content changes require application restart to take effect
