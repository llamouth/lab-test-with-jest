const {getConcessionByID, calculateTotalFromIDs} = require("../src/concessions");
const concessionsArr = require("../data/concessions")
const [smallPopcorn, largePopcorn, smallSoda, largeSoda, candy] = concessionsArr
const arrayOfIds = concessionsArr.map((item) => item.id)

describe("Concessions", () => {

    describe("getConcessionByID()", () => {
        
        it("should find the correct ID from given ID", () => {
            const actual = getConcessionByID(concessionsArr, "g9sZdG1hI")
            const expected = smallPopcorn
            expect(actual).toBe(expected)
        })
    
        it("should return null if given ID can not be found", () => {
            const actual = getConcessionByID(concessionsArr, "g9sZfr1hI")
            expect(actual).toBe(null)
        })
    }) 
    describe("calculateTotalFromIDs()", () => {

        it("should return total price of concessions purchased", () => {
            const actual = calculateTotalFromIDs(concessionsArr, arrayOfIds)
            const expected = 3975
            expect(actual).toBe(expected)
        })
    
        it("should return number if the total is a valid number", () => {
            const actual = typeof calculateTotalFromIDs(concessionsArr, arrayOfIds)
            expect(actual).toBe("number")
        })
    }) 
})