import React from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import {CommentWidget} from '../../components/comment-widget';

export default function DocPaginatorWrapper(props) {
  return (
    <>
      <DocPaginator {...props} />
      <div style={{marginTop: "3em"}}>
        <CommentWidget/>
      </div>
    </>
  );
}
