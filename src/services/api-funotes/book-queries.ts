import { axiosInstance } from "../axios/axios-instance";

class BookQueries {
  private base_url: string;

  constructor() {
    this.base_url = "book";
  }

  async get(): Promise<any> {
    try {
      const response = await axiosInstance.get(`${this.base_url}`);
      console.log('response', response);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const bookQueries = new BookQueries();

export { bookQueries };
