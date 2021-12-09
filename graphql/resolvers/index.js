const postsResolvers = require("./posts");
const usersResolvers = require("./users");
const commentResolver = require("./comments");

module.exports = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...postsResolvers.Mutation,
    ...commentResolver.Mutation,
  },
  Subscription: {
    ...postsResolvers.Subscription,
  },
};
