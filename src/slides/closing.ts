import { getSlides } from "../helpers";
import { TSlide } from "../types";

export const getAuthorSlides = (id: string, left: string, last: string): TSlide[] => {
  const texts = [
    `
# About the author

TODO
`
  ]

  return getSlides(texts, id, undefined, left, last);
}