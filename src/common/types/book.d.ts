import {IBookCover} from "../types";

interface IBook {
    id_book: number;
    name_book: string;

    id_cover: number;
    bookcover?: IBookCover;
}

interface IPostBook {
    id_book?: number;
    name_book: string;

    id_cover: number;
    bookcover?: IBookCover;
}

export {IBook, IPostBook};