import React from 'react'

const Comment = ({comment}) => {
  return (
        <div className="card p-3 mt-2">
            <div className="d-flex justify-content-between align-items-center">
                <div className="user d-flex flex-row align-items-center">
                    <span>
                        <p className="font-weight-bold text-primary">
                            {comment.author.name} {comment.author.surname}
                        </p>
                        <small className="font-weight-bold">
                            {comment.content}
                        </small>
                    </span>
                </div>
                <small>{comment.creationTime}</small>
            </div>
        </div>
  )
}

export default Comment;