import React, { useEffect, useState, useCallback } from 'react';
import './styles/index.scss';
import Tabs from './fragments/tabs';
import StoryList from './fragments/draftList';
import Header from './fragments/header';
import PublishList from './fragments/publishList';
import { HomeProps } from '@/types/app/home';

function Home(props: HomeProps) {
  const { isLoading, post, isError, getPostAction } = props;
  const [typeTab, setTypeTab] = useState<string>('drafts');

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
