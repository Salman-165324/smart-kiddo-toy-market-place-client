import React from 'react';

const Blog = () => {
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


        </div>
    );
};

export default Blog;