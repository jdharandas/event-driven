import { getSlides } from "../helpers";
import { TSlide } from "../types";

export const getDDDSlides = (id: string, left: string, right: string): TSlide[] => {
  const texts = [
    `
# Domain-Driven Design (DDD)

### Goal: align software design with business domain

- Focus on the core domain and domain logic
- Collaborate with domain experts to create a shared understanding of the domain
- Use a common language (Ubiquitous Language) to describe the domain and its processes
`,
    `
# Building Blocks (I)
    
- **Entity**: Object defined by its identity, rather than its attr. Can be compared based on its unique ID.
- **Value Object**: Immutable object defined by its attr., rather than its identity. Can be compared based on its attr.
- **Aggregate**: Transactional consistency boundary protecting business logic across a common set of objects (as a single unit)..
`,
    `
# Building Blocks (II)

- **AggregateRoot**: Each aggregate has a **root** entity responsible of the integrity of the aggregate.
- **Repository**: Encapsulate storage, retrieval, and search for a collection of objects. Provide an abstraction over the data layer: work with domain objects without knowing how they are persisted.
- **Service**: Set of ops that do not fit within an entity or value obj. Encapsulate domain logic that involves multiple entities or aggregates.
`,
    `
# Strategic Design

- **Bounded Context**: Boundary within which a particular model is defined and applicable. Helps to manage complexity by breaking down a large domain into smaller, more manageable parts.
- **Context Map**: Visual representation of the relationships between bounded contexts. Helps to identify the interactions and dependencies between different parts of the system.
`,
    `
# Ubiquitous Language

- Common language shared by all members of a development team, including domain experts, developers, and other stakeholders.
- Should be used in all aspects of the project, including code, documentation, and conversations.
- Helps to ensure that everyone has a shared understanding of the domain and its processes.
`,
    `
# Useful links
- Eric Evans [book](https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215)
- Vaughn Vernon [book](https://www.amazon.com/Implementing-Domain-Driven-Design-Vaughn-Vernon/dp/0321834577)
- Domain-Driven Design [community](https://www.dddcommunity.org/)
`
  ]
  return getSlides(texts, id, right, left);
}