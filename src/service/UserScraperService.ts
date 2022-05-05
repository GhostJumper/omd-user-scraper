import axios from "axios"

export default class UserScraperService {

  static async getUserByID(id: string, apiKey: string, authcookie: string) {
    var config = {
      method: 'get',
      url: `https://api.vrchat.cloud/api/1/users/${id}`,
      headers: {
        'Cookie': `apiKey=${apiKey}; auth=${authcookie}`
      }
    }

    const response = await axios(config)
    return response.data
  }

  static async searchUsers(searchTerm: string, numberOfResults: number, offset: number, apiKey: string, authcookie: string) {
    var config = {
      method: 'get',
      url: `https://api.vrchat.cloud/api/1/users?search=${searchTerm}&n=${numberOfResults}&offset=${offset}`,
      headers: {
        'Cookie': `apiKey=${apiKey}; auth=${authcookie}`
      }
    }

    const response = await axios(config)
    return response.data
  }

  static async getFriends(numberOfResults: number, offset: number, offline: boolean, apiKey: string, authcookie: string) {
    var config = {
      method: 'get',
      url: `https://api.vrchat.cloud/api/1/auth/user/friends?offline=${offline}&n=${numberOfResults}&offset=${offset}`,
      headers: {
        'Cookie': `apiKey=${apiKey}; auth=${authcookie}`
      }
    };

    const response = await axios(config)
    return response.data
  }

  static async onlineUserCount(): Promise<number> {
    var config = {
      method: 'get',
      url: 'https://api.vrchat.cloud/api/1/visits',
      headers: {}
    }

    const response = await axios(config)
    return response.data
  }
}