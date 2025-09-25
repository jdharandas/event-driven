import { Edge, Node } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_PADDING, SLIDE_WIDTH } from "./Slide";
import { getAuthorSlides as getClosingSlides } from "./slides/closing";
import { getCQRSSlides } from "./slides/cqrs";
import { getDDDSlides } from "./slides/ddd";
import { getEventCollaborationSlides } from "./slides/event-collaboration";
import { getEventModelingSlides } from "./slides/event-modeling";
import { getEventSourcingSlides } from "./slides/event-sourcing";
import { getEventStreamingSlides } from "./slides/event-streaming";
import { getIntroSlides } from "./slides/intro";
import { getSagaSlides } from "./slides/saga";
import { TSlideData } from "./types";

export const slides = Object.fromEntries(
  [
    ...getIntroSlides("intro", "eventcollaboration"),
    ...getEventCollaborationSlides("eventcollaboration", "intro", "eventstreaming"),
    ...getEventStreamingSlides("eventstreaming", "eventcollaboration", "eventsourcing"),
    ...getEventSourcingSlides("eventsourcing", "eventstreaming", "cqrs"),
    ...getCQRSSlides("cqrs", "eventsourcing", "saga"),
    ...getSagaSlides("saga", "cqrs", "ddd"),
    ...getDDDSlides("ddd", "saga", "eventmodeling"),
    ...getEventModelingSlides("eventmodeling", "ddd", "last"),
    ...getClosingSlides("last", "eventmodeling", "intro"),
  ].map(({ id, data }) => [id, data]),
) as Record<string, TSlideData>;

export const slidesToElements = (
  initial: string,
  slides: Record<string, TSlideData>,
) => {
  const stack = [{ id: initial, position: { x: 0, y: 0 } }];
  const visited = new Set();
  const nodes: Node<TSlideData>[] = [];
  const edges: Edge[] = [];

  while (stack.length) {
    const { id, position } = stack.pop()!;
    const data = slides[id];
    const node = { id, type: "slide", position, data };

    if (data.left && !visited.has(data.left)) {
      const nextPosition = {
        x: position.x - (SLIDE_WIDTH + SLIDE_PADDING),
        y: position.y,
      };

      stack.push({ id: data.left, position: nextPosition });
      edges.push({
        id: `${id}->${data.left}`,
        source: id,
        target: data.left,
      });
    }

    if (data.up && !visited.has(data.up)) {
      const nextPosition = {
        x: position.x,
        y: position.y - (SLIDE_HEIGHT + SLIDE_PADDING),
      };

      stack.push({ id: data.up, position: nextPosition });
      edges.push({ id: `${id}->${data.up}`, source: id, target: data.up });
    }

    if (data.down && !visited.has(data.down)) {
      const nextPosition = {
        x: position.x,
        y: position.y + (SLIDE_HEIGHT + SLIDE_PADDING),
      };

      stack.push({ id: data.down, position: nextPosition });
      edges.push({
        id: `${id}->${data.down}`,
        source: id,
        target: data.down,
      });
    }

    if (data.right && !visited.has(data.right)) {
      const nextPosition = {
        x: position.x + (SLIDE_WIDTH + SLIDE_PADDING),
        y: position.y,
      };

      stack.push({ id: data.right, position: nextPosition });
      edges.push({
        id: `${id}->${data.down}`,
        source: id,
        target: data.right,
      });
    }

    nodes.push(node);
    visited.add(id);
  }

  return { nodes, edges };
};
