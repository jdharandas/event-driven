export type TSlideData = {
  source: string;
  left?: string;
  up?: string;
  down?: string;
  right?: string;
  last?: string;
};

export type TSlide = { id: string; data: TSlideData };
