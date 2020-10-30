import { HEADER_CONST } from '../Header_Const'
import { Config } from '../../../config'
import chai = require('chai');
import chaiHttp = require('chai-http');
chai.use(chaiHttp)

export class Base {
  public async getAuthToken () {
    return Config.getAuthToken()
  }

  public async post (endpoint:string, body:any, query:any = {}) {
    const response = await chai.request(Config.domainHost())
      .post(endpoint)
      .set(HEADER_CONST.key.AUTHORIZATION, await this.getAuthToken())
      .query(query)
      .send(body)
    return response
  }

  public async put (endpoint:string, body:any, query:any = {}) {
    const response = await chai.request(Config.domainHost())
      .put(endpoint)
      .set(HEADER_CONST.key.AUTHORIZATION, await this.getAuthToken())
      .query(query)
      .send(body)
    return response
  }

  public async get (endpoint:string, query:any = {}) {
    const response = await chai.request(Config.domainHost())
      .get(endpoint)
      .set(HEADER_CONST.key.AUTHORIZATION, await this.getAuthToken())
      .query(query)
    return response
  }
}
