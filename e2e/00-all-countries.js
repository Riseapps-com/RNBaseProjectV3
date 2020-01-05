import { byId, sleep } from './utils'
import { testIDs } from './testIDs'

describe('All Countries', () => {
    beforeEach(async () => {
        // await device.reloadReactNative()
        await sleep(2500)
    })

    it('should open country details', async () => {
        await byId(testIDs.menu.allCountries).tap()
        await byId(testIDs.countries.back).tapAtPoint({ x: 15, y: 10 })
        await byId(testIDs.menu.allCountries).tap()
        await byId(`${testIDs.countries.country}${0}`).tap()
        await byId(testIDs.countryDetails.back).tapAtPoint({ x: 15, y: 10 })
        await byId(`${testIDs.countries.country}${1}`).tap()
        await byId(testIDs.countryDetails.back).tapAtPoint({ x: 15, y: 10 })
        await byId(testIDs.countries.back).tapAtPoint({ x: 15, y: 10 })
    })
})
