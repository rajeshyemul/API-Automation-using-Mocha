import { API_ENDPOINTS } from "../API_EndPoints";
import { Base } from "./Base";

export class UserDataService extends Base {
    public async userOverview(request: any) {
        return await this.post(API_ENDPOINTS.CUSTOMER_SERVICE.SEARCH_AUTOSUGGESTION, request, {})
    }
}