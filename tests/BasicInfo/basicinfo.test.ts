import { expect } from "chai"
import { API_ENDPOINTS } from "../../src/API/API_EndPoints"
import { UserDataService } from "../../src/API/services/UserDataService"

describe('Card-holder Overview - Basic info', async () => {
    const userDataService = new UserDataService()
    it('Sanity: Verify Basic info from auto-suggestions', async () => {
        const autoSuggestRes = await userDataService.userOverview(API_ENDPOINTS.CUSTOMER_SERVICE.SEARCH_AUTOSUGGESTION)
        expect(autoSuggestRes).to.have.status(201)
    })
})
