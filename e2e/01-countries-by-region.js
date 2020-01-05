import { byId, sleep } from './utils'
import { testIDs } from './testIDs'

describe('Countries By Region', () => {
    it('should open africa', async () => {
        await device.reloadReactNative()
        await sleep(2500)
        await byId(testIDs.menu.countriesByRegion).tap()
        await byId(testIDs.selectRegion.back).tapAtPoint({ x: 15, y: 10 })
        await byId(testIDs.menu.countriesByRegion).tap()
        await byId(testIDs.selectRegion.africa).tap()
        await byId(`${testIDs.countries.country}${0}`).tap()
        await byId(testIDs.countryDetails.back).tapAtPoint({ x: 15, y: 10 })
        await byId(`${testIDs.countries.country}${1}`).tap()
        await byId(testIDs.countryDetails.back).tapAtPoint({ x: 15, y: 10 })
        await byId(testIDs.countries.back).tapAtPoint({ x: 15, y: 10 })
    })

    it('should open americas', async () => {
        await byId(testIDs.selectRegion.americas).tap()
        await byId(`${testIDs.countries.country}${0}`).tap()
        await byId(testIDs.countryDetails.back).tapAtPoint({ x: 15, y: 10 })
        await byId(`${testIDs.countries.country}${1}`).tap()
        await byId(testIDs.countryDetails.back).tapAtPoint({ x: 15, y: 10 })
        await byId(testIDs.countries.back).tapAtPoint({ x: 15, y: 10 })
    })

    it('should open asia', async () => {
        await byId(testIDs.selectRegion.asia).tap()
        await byId(`${testIDs.countries.country}${0}`).tap()
        await byId(testIDs.countryDetails.back).tapAtPoint({ x: 15, y: 10 })
        await byId(`${testIDs.countries.country}${1}`).tap()
        await byId(testIDs.countryDetails.back).tapAtPoint({ x: 15, y: 10 })
        await byId(testIDs.countries.back).tapAtPoint({ x: 15, y: 10 })
    })

    it('should open europe', async () => {
        await byId(testIDs.selectRegion.europe).tap()
        await byId(`${testIDs.countries.country}${0}`).tap()
        await byId(testIDs.countryDetails.back).tapAtPoint({ x: 15, y: 10 })
        await byId(`${testIDs.countries.country}${1}`).tap()
        await byId(testIDs.countryDetails.back).tapAtPoint({ x: 15, y: 10 })
        await byId(testIDs.countries.back).tapAtPoint({ x: 15, y: 10 })
    })

    it('should open oceania', async () => {
        await byId(testIDs.selectRegion.oceania).tap()
        await byId(`${testIDs.countries.country}${0}`).tap()
        await byId(testIDs.countryDetails.back).tapAtPoint({ x: 15, y: 10 })
        await byId(`${testIDs.countries.country}${1}`).tap()
        await byId(testIDs.countryDetails.back).tapAtPoint({ x: 15, y: 10 })
        await byId(testIDs.countries.back).tapAtPoint({ x: 15, y: 10 })
        await byId(testIDs.selectRegion.back).tapAtPoint({ x: 15, y: 10 })
    })
})
