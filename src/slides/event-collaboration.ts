
import { getSlides } from "../helpers";
import { TSlide } from "../types";


export const getEventCollaborationSlides = (id: string, left: string, right: string): TSlide[] => {
  const texts = [
    `
# Event Collaboration

### Goal: decouple components

- Instead of requesting other component states, components communicate with each other by sending and subscribing to events representing the state
- Read Martin Fowler [definition](https://martinfowler.com/eaaDev/EventCollaboration.html")
`,
  ]

  return getSlides(texts, id, right, left);
}