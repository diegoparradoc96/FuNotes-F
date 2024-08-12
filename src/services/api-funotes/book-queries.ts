import { axiosInstance } from "../axios/axios-instance";

import { IBook, IPostBook } from "../../common/types";

class BookQueries {
  constructor() {}

  async getAll(): Promise<any> {
    try {
      const response = await axiosInstance.get(`book`);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post(newData: IPostBook): Promise<any> {
    try {
      const response = await axiosInstance.post(`book`, newData);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async delete(book: IBook): Promise<any> {
    try {
      const response = await axiosInstance.delete(`book/${book.id_book}`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

const bookQueries = new BookQueries();

export { bookQueries };
