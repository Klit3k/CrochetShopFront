import React from 'react'
import { COMMENTS_PER_PAGE } from '../../../utils/constants';
import Comment from './Comment';

const comments = ({comments, page}) => {
  const startIndex = (page -1 ) * COMMENTS_PER_PAGE;
  const selectedComments = comments.slice(startIndex, startIndex+COMMENTS_PER_PAGE );

  return selectedComments.map(comment => (<Comment key={comment.id} comment={comment}/>))
  
}

export default comments