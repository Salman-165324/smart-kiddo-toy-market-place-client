import React from 'react';
import useTitle from '../../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='primary-container'>
            <h1 className='section-title'>Important Concepts</h1>
            {/* Question 1 */}
            <div>
                <h2 className='mt-10 font-semibold text-2xl'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>

                <div className='mt-5 p-2'>
                    <p>
                        <span className='font-semibold'>Access Token:</span> An access token is a credential that is used to authenticate a client to access protected resources. It is typically obtained by the client after successfully authenticating with the server using their username and password.
                    </p>
                    <br />
                    <p>
                        <span className='font-semibold'>Refresh Token:</span> A refresh token is a special type of token that is used to obtain a new access token without requiring the user to re-enter their credentials. It is usually issued alongside the access token and has a longer expiration time.
                    </p>
                    <br />
                    <p>
                        Access tokens are short-lived and are used to authenticate and authorize requests made by the client to the server. They are usually stored in the client-side memory or local storage temporarily. Refresh tokens, on the other hand, are typically stored securely on the client-side, such as in an HTTP-only cookie or secure storage, to prevent unauthorized access.
                    </p>
                </div>
            </div>

            {/* Question 2 */}
            <div>
                <h2 className='mt-10 font-semibold text-2xl'>2. Compare SQL and NoSQL databases</h2>

                <div className='mt-5 p-2'>
                    <p>
                        <span className='font-semibold'>SQL Databases:</span> SQL (Structured Query Language) databases are relational databases that store and manage data in structured tables. They use predefined schemas to define the structure of the data and enforce relationships between tables. Examples of SQL databases include MySQL, PostgreSQL, and Oracle.
                    </p>
                    <br />
                    <p>
                        <span className='font-semibold'>NoSQL Databases:</span> NoSQL (Not only SQL) databases are non-relational databases that provide a flexible way to store and retrieve data. They do not rely on predefined schemas and can handle unstructured, semi-structured, and structured data. NoSQL databases offer high scalability and performance. Examples of NoSQL databases include MongoDB, Cassandra, and Redis.
                    </p>
                    <br />
                    <p>
                        SQL databases are suitable for applications that require complex queries, strict consistency, and transactions. They are widely used for traditional enterprise applications. NoSQL databases, on the other hand, are well-suited for applications that require high scalability, flexible data models, and rapid development. They are commonly used in web applications, real-time analytics, and IoT applications.
                    </p>
                </div>
            </div>
            {/* Question 3 */}
            <div>
                <h2 className='mt-10 font-semibold text-2xl'>3. What is Express.js? What is Nest.js?</h2>
                <div className='mt-5 p-2 space-y-5'>
                    <p>
                        {
                            `Express.js and Nest.js both are framework for building server side web application and APIs. `
                        }
                    </p>
                    <p>
                        {
                            `
                            Compared to Nest.js, Express.js is a simple, lightweight and flexible Node.js framework. It is easy to set up and use. It provides a robust set of features for handling HTTP requests, routing, middleware, and rendering views. 
                            Express.js is known for its unnopinionated approach which allows developers to have more control over the structure and components of their application. Express.js also has a large community of developers which makes it easy to find help and resources when needed. `
                        }
                    </p>
                    <p>
                        {
                            `Nest.js is built on top of Express.js and provides an opinionated and more structured way of building applications with TypeScript. Nest.js uses modular architecture which makes it easy to maintain and scale applications as they grow. Nest.js comes with several built-in features such as authentication, caching and validation. This reduces the time required to build large applications.`
                        }
                    </p>
                    <p>
                        {
                            `Compared to express.js nest.js is more complex which makes it difficult to learn and use, especially for beginners. Also because of its opinionated structure, it's difficult to deviate from the framework's defaults. For highly customizable applications nest.js may not be the best choice. Express.js on the other hand is more flexible and can be used to build a wider variety of applications. 
`
                        }
                    </p>
                </div>
            </div>
            {/* Question 4 */}
            <div>
                <h2 className='mt-10 font-semibold text-2xl'>What is MongoDB aggregate and how does it work ?</h2>
                <div className='mt-5 p-2 space-y-5'>
                    <p>
                        {
                            `MongoDb aggregate is a powerful way to process data in MongoDB. It allows us to group data together, run some operation to it and finally get the desired results.`
                        }
                    </p>
                    <p>
                        {
                            `MongoDb aggregate works by using pipeline of multiple stages.Each stage of the document performs an operation on the data. For example in a stage we can filter, group documents and calculate values. The documents that are output from a stage are forwarded to the next stage.`
                        }
                    </p>
                    <p>
                        {
                            `The following is an example of a mongoDB aggregate pipeline: `
                        }
                    </p>
                    <pre className='bg-primary p-5 rounded-lg'>
                        <code>
                            {
`db.collection.aggregate([
  { "$match": { "age": { "$gt": 18 } } },
  { "$group": {
    "_id": "$city",
    "count": { "$sum": 1 }
  }}
]) 
                                `
                            }
                        </code>
                    </pre>
                    <p>
                        {
                            `The following is an example of a mongoDB aggregate pipeline: `
                        }
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;