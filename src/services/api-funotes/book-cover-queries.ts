import { axiosInstance } from "../axios/axios-instance";

class BookCoverQueries {
  private base_url: string;

  constructor() {
    this.base_url = "book-cover";
  }

  async getBookCovers(): Promise<any> {
    try {
      const response = await axiosInstance.get(`${this.base_url}`);
      console.log('response', response);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const bookCoverQueries = new BookCoverQueries();

export { bookCoverQueries };
