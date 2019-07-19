import { observable, action } from 'mobx';
import ApiService from '../services/ApiService';

export default class UserStore {
  @observable userId: Number;
  @observable firstName: string;
  @observable lastName: string;
  @observable userSession: Object;
  @observable emailAddress: string;

  constructor() {
    this.userId = null!;
    this.firstName = '';
    this.lastName = '';
    this.emailAddress = '';
    this.userSession = {};
  }

  @action
  authenticateUser(data: Object) {
    // Url needed for authentication endpoint
    const url = '';

    // Map out data from authentication form being passed in to send to endpoint

    // Pass any additional options, like headers
    const options = {

    };

    ApiService.post(url, data, options)
      .then((response) => {
        // If successful response, set returned user values as store values
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      })
  }

  @action
  clearUserSession() {
    this.userId = null!;
    this.firstName = '';
    this.lastName = '';
    this.emailAddress = '';
    this.userSession = {};
  }

}

export const userStore = new UserStore();