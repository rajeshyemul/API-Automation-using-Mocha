
require('dotenv').config()
export class Config {

  public static domainHost () {
    if (process.env.API_GATEWAY) {
      return process.env.API_GATEWAY.trim()
    } else {
      throw new Error('ENV setup error: Please define value of DOMAIN_API_GATEWAY in the environment properties.')
    }
  }

  public static getAuthToken () {
    if (process.env.AUTH_TOKEN) {
      return process.env.AUTH_TOKEN.trim()
    } else {
      throw new Error('ENV setup error: Please define value of AUTH_TOKEN in the environment properties.')
    }
  }
}
