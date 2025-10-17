import { getSlides } from "../helpers";
import { TSlide } from "../types";


export const getSolidSlides = (id: string, left: string, right: string): TSlide[] => {
  const texts = [
    `
# SOLID

### Goal: maintainable software

- Acronym for 5 design principles to make software designs more understandable, flexible, and maintainable.
- Introduced by Robert C. Martin (Uncle Bob) in the early 2000s.
- Widely adopted in object-oriented programming and software engineering.
- Can be applied in other programming paradigms as well: functional programming, procedural programming, etc.
`,
    `
# Single Responsibility Principle (SRP)

- Every software entity has only one reason to change: one job or responsibility.
- Focused and cohesive entities are easier to understand, maintain, and test.
`,
    `
# Open/Closed Principle (OCP)

- Open for extension but closed for modification.
- Add new functionality without changing existing code.
- Helps to prevent bugs and maintain stability.
`,
    `
## Vertical Slicing

- Design software in vertical slices => encapsulate all layers for a specific feature.
- Each slice = independent & self-contained: scalable development, testing (GWTs), maintenance.
- Promotes modularity and separation of concerns
- Works well with Trunk-based development: small, frequent merges to the main branch.
`, `
### Drawbacks of Vertical Slicing

- Code Duplication: similar logic across slices may lead to duplication.
- Tooling to handle dependencies between slices and enforce boundaries.
`,
    `
# Liskov Substitution Principle (LSP)

- Derived entities can be used in place of their base without causing unexpected behavior.
- Ensures that subclasses adhere to the contracts defined by their base classes.
- Promotes polymorphism and enhances code reusability.
`,
    `
# Interface Segregation Principle (ISP)

- Clients should not be forced to depend on interfaces they do not use.
- Creation of smaller, more specific interfaces rather than large, general-purpose ones
- Helps to reduce dependencies and improve code clarity.
`,
    `
# Dependency Inversion Principle (DIP)

- High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g., interfaces).
- Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.
- Promotes decoupling and enhances the flexibility and testability of the code.

`,
    `
# Useful links

- Digital Ocean [SOLID Principles](https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)
- Wikipedia [SOLID](https://en.wikipedia.org/wiki/SOLID)
`
  ]

  return getSlides(texts, id, right, left);
}