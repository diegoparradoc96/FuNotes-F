interface IBookCover {
  id_cover: number;
  url_cover: string;
  is_public_cover: boolean;

  id_user?: number;
}

interface IPostBookCover {
  id_cover?: number;
  url_cover: string;
  is_public_cover: boolean;

  id_user?: number;
}

export { IBookCover, IPostBookCover };
