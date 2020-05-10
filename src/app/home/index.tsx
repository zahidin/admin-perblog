import React, { useEffect, useState, useCallback } from 'react';
import './styles/index.scss';
import Tabs from './fragments/tabs';
import StoryList from './fragments/darftList';
import Header from './fragments/header';
import PublishList from './fragments/publishList';
import Login from '@app/login';

interface Props {
  isLoading: boolean;
  post: [];
  isError: boolean;
  getPostAction: Function;
}

function Home(props: Props) {
  const { isLoading, post, isError, getPostAction } = props;
  const [typeTab, setTypeTab] = useState<string>('drafts');
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);

  const getDataPost = useCallback(async () => {
    await getPostAction();
  }, []);

  useEffect(() => {
    getDataPost();
  }, []);

  return (
    <>
      <Header />
      <Tabs lengthStory={post.length} typeTab={typeTab} setTypeTab={setTypeTab} />
      {typeTab === 'drafts' ? <StoryList dataPost={post} /> : <PublishList />}
    </>
  );
}

export default Home;
