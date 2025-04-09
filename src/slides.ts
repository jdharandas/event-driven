import { Edge, Node } from "reactflow";
import { SLIDE_HEIGHT, SLIDE_PADDING, SLIDE_WIDTH, SlideData } from "./Slide";
import { getEventSourcingSlides } from "./slides/EventSourcing";
import { getEventStreamingSlides } from "./slides/EventStreaming";

// # Index
// - Event Driven Architectures
// - Event Collaboration
// - Event Streaming
// - Event Sourcing
// - CQRS
// - DDD
// - Event Modeling
// `,
//   },
// };

// about the slides
const intro = {
  id: "first",
  data: {
    right: "eventcollaboration",
    source: `
# Event Driven Architectures 

### Goals: scalability, decouple components

- Event producers that generate a stream of events
- Event consumers that listen for these events
- Event channels that transfer events from producers to consumers
`,
  },
};

const eventCollaboration = {
  id: "eventcollaboration",
  data: {
    left: intro.id,
    right: "eventstreaming",
    source: `
# Event Collaboration

### Goal: decouple components

- Instead of requesting other component states, components communicate with each other by sending and subscribing to events representing the state
- Read Martin Fowler (definition)[https://martinfowler.com/eaaDev/EventCollaboration.html"]
`,
  },
}

// content
const eventStreaming = getEventStreamingSlides("eventstreaming", eventCollaboration.id, "eventsourcing")
const eventSourcing = getEventSourcingSlides("eventsourcing", "eventstreaming", "last")

// author
const last = {
  id: "last",
  data: {
    left: eventSourcing[0].id,
    last: intro.id,
    source: `
# About the author

TODO
`
  }
}

export const slides = Object.fromEntries(
  [intro, eventCollaboration, ...eventStreaming, ...eventSourcing, last].map(({ id, data }) => [id, data]),
) as Record<string, SlideData>;

export const slidesToElements = (
  initial: string,
  slides: Record<string, SlideData>,
) => {
  const stack = [{ id: initial, position: { x: 0, y: 0 } }];
  const visited = new Set();
  const nodes: Node<SlideData>[] = [];
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
