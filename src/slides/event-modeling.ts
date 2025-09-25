import { getSlides } from "../helpers";
import { TSlide } from "../types";

export const getEventModelingSlides = (id: string, left: string, right: string): TSlide[] => {
  const texts = [
    `
# Event Modeling

### Goal: create an Ubiquitous Language

- Translate tech diagrams to business = common docs
- Common docs = avoid miscommunications, misunderstandings and wrong assumptions, faster onboarding
- *Model first* = documentation always up to date
- *Data Flow first* = focus on info, scalability, flexibility
`,
    `
# What are systems?
  
- System are processes that can be broken down into simple steps containing **triggers** and **events**
- Each step on a system either modify the information or uses the information already present
- Some process are interactive, others background jobs; some may notify external systems, triggering other processes.
`,
    `
# Why Event Modeling?

- Combines the best of *EventStorming* with DDD, UML and UX tools like Figma
- Can be used even if the system is not event-driven: events are just the data flowing through the system
- Only 4 patterns to define a full system: easy to read and understand by everyone
- Information Completeness: don't make assumptions about the data, always query existing one
`,
    `
# How does it work?

- Single timeline that represents the life of a single business process
- Whiteboard + sticky notes: blue (commands), orange (events), green (read models), yellow (external events), red (errors)
- Gear symbol to represent background processes (called *automations*)
`,
    `
# Concepts

- Events represent past actions and store their data
- External Events represent data from an ext. system (usually contract with third party subscribers or **Integration Events**)
- Commands are the input triggers that start an action. Don't need to explain how the system does it.
- Screens mockups are added to visualize UX
- Read Models (projections) are pulls of data contained in *prev events*: feed screens, background processes...
`,
    `
# Patterns

- Screen + Command + Event = State Change
- Event + Read Model + Screen = State View
- State View + Process + State Change = Automation
- Ext. Event + Process + State Change = Translation
- Ext. Event + Read Model + Screen = Translation (used if the ext. data matches the int. data model)
`,
    `
# Business Rules
### Given-When-Then (GWT), Given-Then (GT)

- Define your GWT rules directly below the State Changes: G = (N x Events), W = CMD, T = Error
- Define your GT rules directly below the State Views: G = Event + attr., T = Read Model + Event attr.
- Translate GWT and GT into unit tests
`,
    `
# Useful links
- Martin Dilger [book](https://leanpub.com/eventmodeling-and-eventmodeling)
`,
  ]

  return getSlides(texts, id, right, left);
}