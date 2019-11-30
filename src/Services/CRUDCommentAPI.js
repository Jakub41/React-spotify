import { createCommentAPIQUery } from "./BaseCommentAPI";
import { COMMENT_URL } from "./ConstAPI";

export const getAllComments = createCommentAPIQUery(
  asin => `${COMMENT_URL}/comments/${asin}`
);

export const addComment = createCommentAPIQUery(body => {
  `${COMMENT_URL}/comments`, (this.credentials.method = "POST");
  this.credentials.body = JSON.stringify(body);
});

export const updateComment = createCommentAPIQUery((id, body) => {
  `${COMMENT_URL}/comments/${id}`, (this.credentials.method = "PUT");
  this.credentials.body = JSON.stringify(body);
});

export const deleteComment = createCommentAPIQUery(id => {
  `${COMMENT_URL}/comments/${id}`, (this.credentials.method = "DELETE");
});

deleteComment("5dd7e757e600b70017b58a5c");
