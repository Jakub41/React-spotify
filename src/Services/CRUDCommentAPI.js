import { createCommentAPIQUery } from "./BaseCommentAPI";
import { COMMENT_URL } from "./ConstAPI";

// export const getAllComments = createCommentAPIQUery(
//   asin => `${COMMENT_URL}/comments/${asin}`
// );

// export const addComment = createCommentAPIQUery(body => {
//   `${COMMENT_URL}/comments`, (this.credentials.method = "POST");
//   this.credentials.body = JSON.stringify(body);
// });

// export const updateComment = createCommentAPIQUery((id, body) => {
//   `${COMMENT_URL}/comments/${id}`, (this.credentials.method = "PUT");
//   this.credentials.body = JSON.stringify(body);
// });

// export const deleteComment = createCommentAPIQUery(id => {
//   `${COMMENT_URL}/comments/${id}`, (this.credentials.method = "DELETE");
// });

export const getAllComments = createCommentAPIQUery(asin => {
  return `${COMMENT_URL}/comments/${asin}`;
});
//calling, pass null as no body is needed, and 'theAsin' will become part of 'params'
//getAllComments(null,theAsin).then(...);

export const addComment = createCommentAPIQUery(() => {
  return `${COMMENT_URL}/comments`;
}, "POST");
//calling, pass in body, and no other arguments are needed for 'params'
//addComment(JSON.stringify(body)).then(...);

export const updateComment = createCommentAPIQUery(id => {
  return `${COMMENT_URL}/comments/${id}`;
}, "PUT");
//calling, pass in body, and 'theId' will end up as part of 'params'
//updateComments(JSON.stringify(body),theId);

export const deleteComment = createCommentAPIQUery(id => {
  return `${COMMENT_URL}/comments/${id}`;
}, "delete");

getAllComments(null, "tt2488496");
