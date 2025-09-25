import { getSlides } from "../helpers";
import { TSlide } from "../types";

export const getEventSourcingSlides = (id: string, left: string, right: string): TSlide[] => {
  const texts = [
    `
# Event Sourcing

### Goal: not losing information

- Information is ***the new gold***
- Data helps you make **informed business decisions**
- Build **plannable**, **scalable**, and **well-structured** information systems consistently
`,
    `
# Why EventSourcing?

- Model it how it really works: store **facts** (events) instead of simple data and keep **Business context**
- No more technical databases and no more CRUD: **Ubiquitous Language**
- Add **time** dimension to your databases
- Keep **history** to use the data as you need and audit it: **source of truth**
`,
    `
# Why not a simple Data Warehouse?

- Model in ES == facts + Ubiquitous Language. Fex: CustomerBlocked event vs customer_blocked flag.
- Model in ES == flexible by design: events versioning.
- Event-Streaming to feed new services: no more pulls!
- Extract-Transform-Load can be an anti-pattern: Reverse ETL + Data Lake + Real-Time == Myth
`,
    `
# Concepts
- **Event**: Record of a past fact, immutable.
- **Event Stream**: Chronological sequence of facts (events) that have occurred for a particular business process or entity. Event Streams are append-only.
- **Event Store**: Events database.
- **Projection**: Callable that takes events from one or more streams to generate a view or state of the info.
- **Query Handler**: Callable that takes a query and returns data from a Projection / the Event Store.
`,
    `
# Event Store operations
- Append to an event stream. Event Sourcing handles *concurrency* using *optimistic locking* per stream, based on the index of the last appended event.
- Read one or more events from an event stream
`,
    `
# Event Schema (Cloud Events)
- id: the **unique** id of the event; bigint; mandatory
- specversion: the version of the cloudEvents specification; "1.0"; mandatory;
- time: timestamp of the fact; RFC 3339; mandatory;
- source: context in which an event happened; uri-reference; mandatory;
- subject: subject of the event in the context of the event producer (identified by the source); string;
`,
    `
- type: the type of the event; string; mandatory; example: "myapp.MyDomain.v1.MyEventCreated"
- datacontenttype: content type of the data value; string; example: "application/json"
- data: the payload of the event data; datacontenttype;
- dataschema: the schema the data represents; uri;
`,
    `
# Extended Schema
- stream: stream of the event; string; mandatory
- dataversion: version of the data and metadata of the event; string; mandatory;
- See standard extensions (here)[https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/documented-extensions.md#known-extensions]
`,
    `
# Application Lifecycle

[![Lifecycle](/event-sourced-lifecycle.png)](/event-sourced-lifecycle.png)
  `,
    `
# Useful links
- Martin Dilger [book](https://leanpub.com/eventmodeling-and-eventmodeling)
- [Cloud Events](https://cloud.google.com/eventarc/docs/cloudevents-json)
`,
  ]

  return getSlides(texts, id, right, left);
}