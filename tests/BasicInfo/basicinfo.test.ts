import { expect } from "chai"
import { UserDataService } from "../../src/API/services/UserDataService"

describe('Card-holder Overview - Basic info', async () => {
    const userDataService = new UserDataService()
    // Request body has to send to userOverview method is you have payLoad
    //    const userData = {
    //           user: {
    //               userNumber: '176673676',
    //               userName: 'ABC',
    //               UserEmailID: 'abc.pqr@xyz.com'
    //          }
    //    }
    // this object can be passed as patLoad instaed of this to the userOverview method

    it('Sanity: Verify Basic info from auto-suggestions', async () => {
        const autoSuggestRes = await userDataService.userOverview(this)
        expect(autoSuggestRes).to.have.status(201)
    })
})
