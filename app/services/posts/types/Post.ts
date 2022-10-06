export type Post = {
  slug: string;
  title: string;
  spoilerImageLink: string;
  publishedAt: string;
  body: string;
  description: string;
  categories: string[];
};

export type PostAttributes = {
  title: string;
  spoilerImageLink: string;
  publishedAt: string;
  description: string;
  categories: string;
};
