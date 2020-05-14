import React from 'react';
import Dropdown from './dropdown';
import { Post } from '@/types/redux/post';
import { DraftListProps } from '@/types/app/home';

function storyList(props: DraftListProps) {
  const { dataPost } = props;
  return <PostList dataPost={dataPost} />;
}

const PostList = (props: DraftListProps) => {
  const { dataPost } = props;

  if (!dataPost) {
    return <div>Loading....</div>;
  }

  if (dataPost && dataPost.length === 0) {
    return (
      <div className="is-flex flex-1 flex-column align-items-center justify-content-center">
        <span className="h4 section-not-found-post">You haven’t drafts any draft stories yet.</span>
      </div>
    );
  }
  return (
    <div>
      {dataPost.map((val: Post) => (
        <div className="section-content is-flex flex-column" key={val.id}>
          <span className="h4 font-weight-600 has-text-black">{val.title}</span>
          <div className="is-flex flex-row align-items-center">
            <span className="subtitle-3 font-weight-400 has-text-grey">
              Created {val.id} day ago
            </span>
            <Dropdown />
          </div>
        </div>
      ))}
    </div>
  );
};
export default React.memo(storyList);
