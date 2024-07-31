import { axiosInstance } from "../axios/axios-instance";

class BookCoverQueries {
  private base_url: string;

  constructor() {
    this.base_url = "book-cover";
  }

  async getBookCovers(): Promise<any> {
    try {
      console.log("this.base_url: ", "book-cover");
      const response = await axiosInstance.get(`book-cover`);
      console.log("response", response);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const bookCoverQueries = new BookCoverQueries();

export { bookCoverQueries };

/* 
  convertir a programacion funcional sin herencias ni clases ya que a react-query
  no parecen gustarle las clases. (investigar el tema)
*/
