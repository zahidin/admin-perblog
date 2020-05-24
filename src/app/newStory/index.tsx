import React, { useState, useCallback } from 'react';
import debounce from 'lodash/debounce';
import Dante from 'Dante2';
import Metabar from './fragments/metabar';
import './styles/index.scss';
import { convertToHTML as stateToHTML } from 'draft-convert';
import Router from 'next/router';
import { NewStoryProps } from '@/types/app/newStory';

function NewStory(props: NewStoryProps) {
  const { requestAddPost } = props;
  const [content, setContent] = useState();
  const [contentHtml, setContentHtml] = useState('');
  const [statusSave, setStatusSave] = useState<string>('Saved');

  // const toHtml = (data) => {
  //   const result = stateToHTML({
  //     styleToHTML: (style) => {
  //       if (style.startsWith('CUSTOM_COLOR_')) {
  //         return <span style={{ color: style.substr(style.length - 7) }} />;
  //       }
  //     },
  //     blockToHTML: (block) => {
  //       if (block.type === 'image') {
  //         return <img src={block.data.url} alt={block.text} />;
  //       }
  //     },
  //   })(data);
  //   setContentHtml(result);
  // };
  const debounced = useCallback(
    debounce((dataBlock, dataHtml) => {
      setStatusSave('Saved');
      setContent(dataBlock);
      // toHtml(dataHtml);
    }, 2000),
    []
  );
  const handleChange = (dataBlock, dataHtml) => {
    setStatusSave('Saving...');
    debounced(dataBlock, dataHtml);
  };

  const hadleSubmit = () => {
    setStatusSave('Saving...');
    requestAddPost(content);
    Router.back();
  };

  return (
    <>
      <Metabar statusSave={statusSave} onSubmit={hadleSubmit} />
      <div className="my-5 py-5 is-hidden-mobile">
        <div className="container px-3">
          <div className="editor">
            {process.browser && (
              <Dante
                content={content}
                body_placeholder="Tell your story..."
                onChange={(editor) => {
                  handleChange(
                    editor.emitSerializedOutput(),
                    editor.getEditorState()._immutable.currentContent
                  );
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default NewStory;
