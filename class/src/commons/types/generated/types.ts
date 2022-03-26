export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type IBoardReturn = {
  __typename?: "BoardReturn";
  contents?: Maybe<Scalars["String"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  like?: Maybe<Scalars["Int"]>;
  number?: Maybe<Scalars["Int"]>;
  title?: Maybe<Scalars["String"]>;
  writer?: Maybe<Scalars["String"]>;
};

export enum ICacheControlScope {
  Private = "PRIVATE",
  Public = "PUBLIC",
}

export type ICreateProductInput = {
  detail?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Int"]>;
};

export type IMutation = {
  __typename?: "Mutation";
  createBoard?: Maybe<IReturn>;
  createProduct?: Maybe<IReturn>;
  createProfile?: Maybe<IReturn>;
  deleteBoard?: Maybe<IReturn>;
  deleteProduct?: Maybe<IReturn>;
  deleteProfile?: Maybe<IReturn>;
  updateBoard?: Maybe<IReturn>;
  updateProduct?: Maybe<IReturn>;
  updateProfile?: Maybe<IReturn>;
};

export type IMutationCreateBoardArgs = {
  contents?: InputMaybe<Scalars["String"]>;
  title?: InputMaybe<Scalars["String"]>;
  writer?: InputMaybe<Scalars["String"]>;
};

export type IMutationCreateProductArgs = {
  createProductInput: ICreateProductInput;
  seller?: InputMaybe<Scalars["String"]>;
};

export type IMutationCreateProfileArgs = {
  age?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  school?: InputMaybe<Scalars["String"]>;
};

export type IMutationDeleteBoardArgs = {
  number?: InputMaybe<Scalars["Int"]>;
};

export type IMutationDeleteProductArgs = {
  productId?: InputMaybe<Scalars["ID"]>;
};

export type IMutationDeleteProfileArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type IMutationUpdateBoardArgs = {
  contents?: InputMaybe<Scalars["String"]>;
  number?: InputMaybe<Scalars["Int"]>;
  title?: InputMaybe<Scalars["String"]>;
  writer?: InputMaybe<Scalars["String"]>;
};

export type IMutationUpdateProductArgs = {
  productId?: InputMaybe<Scalars["ID"]>;
  updateProductInput: IUpdateProductInput;
};

export type IMutationUpdateProfileArgs = {
  age?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  school?: InputMaybe<Scalars["String"]>;
};

export type IProductReturn = {
  __typename?: "ProductReturn";
  _id?: Maybe<Scalars["ID"]>;
  createdAt?: Maybe<Scalars["Date"]>;
  detail?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["Int"]>;
  seller?: Maybe<Scalars["String"]>;
};

export type IProfileReturn = {
  __typename?: "ProfileReturn";
  age?: Maybe<Scalars["Int"]>;
  name?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Int"]>;
  school?: Maybe<Scalars["String"]>;
};

export type IQuery = {
  __typename?: "Query";
  fetchBoard?: Maybe<IBoardReturn>;
  fetchBoards?: Maybe<Array<IBoardReturn>>;
  fetchBoardsCount: Scalars["Int"];
  fetchProduct?: Maybe<IProductReturn>;
  fetchProducts?: Maybe<Array<IProductReturn>>;
  fetchProductsCount: Scalars["Int"];
  fetchProfile?: Maybe<IProfileReturn>;
  fetchProfiles?: Maybe<Array<IProfileReturn>>;
  fetchProfilesCount: Scalars["Int"];
};

export type IQueryFetchBoardArgs = {
  number?: InputMaybe<Scalars["Int"]>;
};

export type IQueryFetchBoardsArgs = {
  page?: InputMaybe<Scalars["Int"]>;
};

export type IQueryFetchProductArgs = {
  productId?: InputMaybe<Scalars["ID"]>;
};

export type IQueryFetchProductsArgs = {
  page?: InputMaybe<Scalars["Int"]>;
};

export type IQueryFetchProfileArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type IQueryFetchProfilesArgs = {
  page?: InputMaybe<Scalars["Int"]>;
};

export type IReturn = {
  __typename?: "Return";
  _id?: Maybe<Scalars["String"]>;
  message?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Int"]>;
};

export type IUpdateProductInput = {
  detail?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["Int"]>;
};
