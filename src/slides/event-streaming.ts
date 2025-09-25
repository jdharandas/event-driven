import { getSlides } from "../helpers";
import { TSlide } from "../types";


export const getEventStreamingSlides = (id: string, left: string, right: string): TSlide[] => {
  const texts = [
    `
# Event Streaming 

### Goal: "highway" for your data between systems.

- Infinite streams of immutable events
- Real-time processing
- Decoupled architecture
- Scalability
`,
    `
# Event Streaming vs Event Sourcing

- Event Streaming: continuous flow of information between producers and consumers; infinite data oriented streams.
- Event Sourcing: state changes as a sequence of events; source of truth; auditability; temporal queries; business oriented streams (usually <100 events).
`,
    `
# Useful links

- Confluent Definition of [Event Streaming](https://www.confluent.io/learn/event-streaming/#how-event-streaming-works)

`
  ]

  return getSlides(texts, id, right, left);
}