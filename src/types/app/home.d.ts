export interface HomeProps {
  postIsLoading: boolean;
  post: [];
  postIsError: boolean;
  getPostAction: Function;
}

export interface DraftListProps {
  postIsLoading: boolean;
  dataPost?: [];
}

export interface TabsProps {
  setTypeTab: Function;
  typeTab: string;
  lengthStory: number;
}
