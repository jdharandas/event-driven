import { getSlides } from "../helpers";
import { TSlide } from "../types";

export const getIntroSlides = (id: string, right: string): TSlide[] => {
  const texts = [
    `
# Event Driven Architectures 

### Goals: scalability, decouple components

- Event producers that generate a stream of events
- Event consumers that listen for these events
- Event channels that transfer events from producers to consumers
`, `
# Why Event Driven? (I)
- Decoupling: producers and consumers decoupled = independent development and scaling
- Scalability: handle high volumes of events and scale components independently
- Responsiveness: enable real-time processing and analytics
- Flexibility: easily add or modify components without impacting the entire system
`, `
# Why Event Driven? (II)
- Resilience: isolate failures to specific components = improve overall system reliability
- Asynchronous Communication: enable non-blocking interactions = improve performance and UX
- +Event Sourcing: improve auditing, debugging, and system recovery
- +AI: out-of-the-box machine learning applications
`, `
# Common Use Cases
- Microservices Arch: decoupled services communicating via events
- Real-Time Data Processing: analytics, monitoring, fraud detection, IoT
- User Activity Tracking: personalizations, recommendations
- Workflow Automation: trigger actions based on events
`, `
# Challenges (I): Event Versioning
- External Events: consumers need to create *contracts* with third party subscribers, so emitted events must be versioned
- Internal Events: versioning is recommended to avoid BC between producers and internal consumers
- Versioning strategies: in event type (e.g. myapp.MyDomain.v1.MyEventCreated), or data (e.g. { version: "1.0", ... })
`
  ]

  return getSlides(texts, id, right);
}