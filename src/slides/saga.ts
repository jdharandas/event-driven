import { getSlides } from "../helpers";
import { TSlide } from "../types";

export const getSagaSlides = (id: string, left: string, right: string): TSlide[] => {
  const texts = [
    `
# Saga

### Goal: manage data consistency across multiple services in a distributed system.

- Sequence of local transactions
- Each transaction updates data within a single service
- Events trigger the next transaction in the saga
- Compensating transactions to undo changes in case of failures
`, `
# Patterns: Process Coordinator vs Choreography

- Process Coordinator: Orchestrates and manages the saga's workflow, ensuring that each step is executed in the correct order and handling any necessary compensating actions in case of failures.
- Choreography: Each service involved in the saga is responsible for executing its own local transaction and publishing events to trigger the next step in the saga.
`, `
# Alternative Patterns

- Processor-TODO List Pattern: Each service maintains a list of tasks to be processed, using the current state to determine which tasks to execute next.
- 2PC: All participants in a distributed transaction agree on whether to commit or abort it => Can lead to blocking and reduced availability.
- Eventual Consistency: Accept temporary inconsistencies in favor of availability and partition tolerance.
`,
    `
# Useful links
- [Microsoft Learn](https://learn.microsoft.com/en-en/azure/architecture/patterns/saga)
- Chris Richardson [blog](https://microservices.io/patterns/data/saga.html)
`
  ]
  return getSlides(texts, id, right, left);
}