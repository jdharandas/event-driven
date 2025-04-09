export const getEventStreamingSlides = (up: string, left: string, right: string) => {
    const headerSlide = {
        id: "eventstreaming",
        data: {
            down: "eventstreaming01",
            left: left,
            right: right,
            source: `
# Event Streaming 

- See: TODO link

`,
        },
    }
    const slide01 = {
        id: "eventstreaming01",
        left: left,
        right: right,
        data: {
            up: up,
            // down: "eventstreaming02",
            source: `
# Event Streaming
`,
        },
    }

    return [
        headerSlide,
        slide01
    ]
}
