import React, { Fragment } from "react";
import Image from "next/image";
import { Icomment } from "@/store/apps/students/types";
import { formatDate } from "@/utils/format";

type Props = {
  comments: Icomment[] | undefined;
};

const CommentView = ({ comments }: Props) => {
  return (
    <Fragment>
      {comments !== undefined ? (
        <>
          {comments.map((comment, i) => (
            <div className="flex mt-4" key={i}>
              <div className="w-14 h-14 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
                <Image className="h-12 w-12 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/43.jpg" alt="" />
              </div>

              <div className="ml-3">
                <div className="font-medium text-purple-800">{comment.name}</div>
                <div className="text-gray-600">Posted on {formatDate(comment.comment_time)}</div>
                <div className="mt-2 text-purple-800">{comment.text}</div>
              </div>
            </div>
          ))}
        </>
      ) : null}
    </Fragment>
  );
};

export default CommentView;
