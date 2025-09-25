import { TSlide } from "./types";

export const getSlides = (texts: string[], id: string, right?: string, left?: string, last?: string): TSlide[] => {
  const slides: TSlide[] = [];

  for (let i = 0; i < texts.length; i++) {
    const isLast = i == (texts.length - 1);
    const idIdx = `${id}${i}`;
    slides.push({
      id: idIdx,
      data: {
        ...{
          up: i === 0 ? undefined : `${id}${i - 1}`,
          down: isLast ? undefined : `${id}${i + 1}`,
          left: left ? `${left}0` : undefined,
          right: right ? `${right}0` : undefined,
          last: isLast && last ? `${last}0` : undefined,
          source: texts[i],
        }
      }
    })
  }

  return slides
}
