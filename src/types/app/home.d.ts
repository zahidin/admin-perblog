export interface HomeProps {
  isLoading: boolean;
  post: [];
  isError: boolean;
  getPostAction: Function;
}

export interface DraftListProps {
  dataPost?: [];
}

export interface TabsProps {
  setTypeTab: Function;
  typeTab: string;
  lengthStory: number;
}
