const {
  GraphQLInt,
  GraphQLBoolean,
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
} = require("graphql");



const allbooks = require("../sampledata")


const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    BookTitle: { type: GraphQLString },
    BookAuthor: { type: GraphQLString },
    BookPrice: { type: GraphQLString },
    BookLink: { type: GraphQLString },
    BookIsbn: { type: GraphQLString },
    imageLink: { type: GraphQLString },
    BookStore: { type: GraphQLString },
    

  })
})


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => (
    {
      books: {
        type: new GraphQLList(BookType),
        resolve(root) {
          return allbooks
          
        }
      },
      byBookstore: {
        type: new GraphQLList(BookType),
        args: {
          BookStore: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve(root, args) { 
          return allbooks.filter(book => book.BookStore === args.BookStore)
        }

      },
      byBookTitle: {
        type: new GraphQLList(BookType),
        args: {
          BookTitle: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve(root, args) { 
          return allbooks.filter(book => book.BookTitle.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().includes(args.BookTitle.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()))
        }

      }
    }
  )
})










const mySchema = new GraphQLSchema({
  query: RootQuery
})


module.exports = mySchema;  
