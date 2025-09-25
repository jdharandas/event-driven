import { getSlides } from "../helpers";
import { TSlide } from "../types";


export const getEventStreamingSlides = (id: string, left: string, right: string): TSlide[] => {
  const texts = [
    `
# Event Streaming 

- See: TODO link

`,
    `
# Event Streaming
`
  ]

  return getSlides(texts, id, right, left);
}