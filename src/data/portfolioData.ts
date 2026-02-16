export interface PortfolioItem {
  id: number;
  title: string;
  category: 'Videos' | 'Shorts' | '2D Motion';
  videoId: string;
  thumbnail?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Został UPOKORZONY na oczach całego ŚWIATA!',
    category: 'Videos',
    videoId: 'g45GnYcsSMk',
  },
  {
    id: 2,
    title: 'W pośrednim filmie na kanale BUSZ',
    category: 'Videos',
    videoId: 'VI70ICxQBSw',
  },
  {
    id: 3,
    title: 'Viral TikTok Edit #1',
    category: 'Shorts',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'Motion Graphics Intro',
    category: '2D Motion',
    videoId: 'jNQXAC9IVRw',
  },
  {
    id: 5,
    title: 'YouTube Short Series',
    category: 'Shorts',
    videoId: '9bZkp7q19f0',
  },
  {
    id: 6,
    title: 'Professional Montage',
    category: 'Videos',
    videoId: 'tYzMGcUty6s',
  },
  {
    id: 7,
    title: 'Logo Animation',
    category: '2D Motion',
    videoId: 'OPf0YbXqDm0',
  },
  {
    id: 8,
    title: 'Stream Highlight',
    category: 'Shorts',
    videoId: 'kJQP7kiw9Fk',
  },
  {
    id: 9,
    title: 'Cinematic Trailer',
    category: 'Videos',
    videoId: '2Xc3p-4XJ1s',
  },
  {
    id: 10,
    title: 'Motion Graphics Intro',
    category: '2D Motion',
    videoId: 'jNQXAC9IVRw',
  }, 
];
