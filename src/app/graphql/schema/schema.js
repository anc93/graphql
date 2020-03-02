const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;
const _ = require('lodash');

var books = [
  { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '3', sales: 5 },
  { name: 'Final Countdown', genre: 'Fantasy', id: '2', authorId: '1', sales: 2  },
  { name: 'Star Wars', genre: 'Sci-Fi', id: '3', authorId: '2', sales: 12 },
  { name: 'The Rock', genre: 'Fantasy', id: '4', authorId: '3', sales: 53 },
  { name: 'Avatar', genre: 'Fantasy', id: '5', authorId: '1', sales: 100 },
  { name: 'Doraemon', genre: 'Sci-Fi', id: '6', authorId: '3', sales: 0 }
];

var authors = [
  { name: 'Patrick Hemson', age: 24, id: '1' },
  { name: 'David Kluivert', age: 45, id: '2' },
  { name: 'Satoshi Tanaka', age: 1, id: '3' }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    sales: { type: GraphQLInt },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        console.log(parent);
        return _.find(authors, { id: parent.authorId });

      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    bookList: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // code to fetch data
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
