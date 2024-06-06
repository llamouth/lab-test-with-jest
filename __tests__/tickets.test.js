const {getTicketByName, calculateTotalFromTicketNames} = require("../src/tickets")
const ticketData = require("../data/tickets")
const ticketNames = ticketData.map((ticket) => ticket.name)
const [adultMatinee, seniorMatinee, childMatinee, adultRegular, seniorRegular, childRegular] = ticketData

describe("Tickets", () => {

    describe("getTicketByName()", () => {

        it("should return the correct name if found in the data", () => {
            const actual = getTicketByName(ticketData, "Adult Regular")
            const expected = adultRegular
            expect(actual).toBe(expected)
        })
    
        it("should return null if given Name can not be found", () => {
            const actual = getTicketByName(ticketData, "Woman Regular")
            expect(actual).toBe(null)
        })
    })

    describe("calculateTotalFromTicketNames()", () => {
        
        it("should return correct total price of tickets", () => {
            const actual = calculateTotalFromTicketNames(ticketData, ticketNames)
            const expected = 6114;
            expect(actual).toBe(expected)
        })

        it("should return 0 if ticket equals null", () => {
            const theseTicketNames = ticketData.map((ticket) => ticket.name + "s")
            const actual = calculateTotalFromTicketNames(ticketData, theseTicketNames)
            const expected = 0;
            expect(actual).toBe(expected)
        })
    })
})