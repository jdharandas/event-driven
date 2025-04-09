export const getEventSourcingSlides = (id: string, left: string, right: string) => {
    const headerSlide = {
        id: id,
        data: {
            down: "eventsourcing01",
            left: left,
            right: right,
            source: `
# Event Sourcing

### Goal: not losing information

- Information is ***the new gold***
- Data helps you make **informed business decisions**
- Build **plannable**, **scalable**, and **well-structured** information systems consistently
`,
        },
    }

    const slide01 = {
        id: "eventsourcing01",
        data: {
            up: id,
            down: "eventsourcing02",
            source: `
# Why EventSourcing?

- Model it how it really works: store **facts** (events) instead of simple data and keep **Business context**
- No more technical databases and no more CRUD: **Ubiquitous Language**
- Add **time** dimension to your databases
- Keep **history** to use the data as you need and audit it: **source of truth**
`,
        },
    }

    const slide02 = {
        id: "eventsourcing02",
        data: {
            up: "eventsourcing01",
            down: "eventsourcing03",
            source: `
# Why not a simple Data Warehouse?

- Model in ES == facts + Ubiquitous Language. Fex: CustomerBlocked event vs customer_blocked flag.
- Model in ES == flexible by design: events versioning.
- Event-Streaming to feed new services: no more pulls!
- Extract-Transform-Load can be an anti-pattern: Reverse ETL + Data Lake + Real-Time == Myth
`,
        },
    }

    const slide03 = {
        id: "eventsourcing03",
        data: {
            up: "eventsourcing02",
            down: "eventsourcing04",
            source: `
# Concepts
- **Event**: Record of a past fact, immutable.
- **Event Stream**: Chronological sequence of facts (events) that have occurred for a particular business process or entity. Event Streams are append-only.
- **Event Store**: Events database.
- **Projection**: Callable that takes events from one or more streams to generate a view or state of the information.
`,
        },
    }

    const slide04 = {
        id: "eventsourcing04",
        data: {
            up: "eventsourcing03",
            down: "eventsourcing05",
            source: `
# Event Store operations
- Append to an event stream
- Read one or more events from an event stream
`,
        },
    }


    // TODO JDM separate cloud events into another section (mejor antes de todo esto, justo después de arquitecturas event-driven)

    const slide05 = {
        id: "eventsourcing05",
        data: {
            up: "eventsourcing04",
            down: "eventsourcing06",
            source: `
# Event Schema (Cloud Events)
- id: the **unique** id of the event; bigint; mandatory
- specversion: the version of the cloudEvents specification; "1.0"; mandatory;
- time: timestamp of the fact; RFC 3339; mandatory;
- source: context in which an event happened; uri-reference; mandatory;
- subject: subject of the event in the context of the event producer (identified by the source); string;
`,
        },
    }

    const slide06 = {
        id: "eventsourcing06",
        data: {
            up: "eventsourcing05",
            down: "eventsourcing07",
            source: `
- type: the type of the event; string; mandatory; example: "myapp.MyDomain.v1.MyEventCreated"
- datacontenttype: content type of the data value; string; example: "application/json"
- data: the payload of the event data; datacontenttype;
- dataschema: the schema the data represents; uri;
`,
        },
    }

    const slide07 = {
        id: "eventsourcing07",
        data: {
            up: "eventsourcing06",
            down: "eventsourcinglast",
            source: `
# Extended Schema
- stream: stream of the event; string; mandatory
- dataversion: version of the data and metadata of the event; string; mandatory;
- See standard extensions (here)[https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/documented-extensions.md#known-extensions]
`,
        },
    }

    const lastSlide = {
        id: "eventsourcinglast",
        data: {
            up: "eventsourcing07",
            last: id,
            source: `
# Useful links
- Martin Dilger (book)[https://leanpub.com/eventmodeling-and-eventsourcing]
- (Cloud Events)[https://cloud.google.com/eventarc/docs/cloudevents-json]
`,
        },
    }

    return [
        headerSlide,
        slide01,
        slide02,
        slide03,
        slide04,
        slide05,
        slide06,
        slide07,
        lastSlide,
    ]
}
