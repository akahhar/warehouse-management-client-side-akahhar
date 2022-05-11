import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="container col-xl-6 mt-5 ">
      <h4>1. Difference between JavaScript and Node js</h4>
      <table style={{ width: "90%" }}>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Javascript</th>
            <th>Node js</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>
              Javascript is a programming language that is used for writing
              scripts on the website.
            </td>
            <td>NodeJS is a Javascript runtime environment.</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Javascript can only be run in the browsers.</td>
            <td>
              We can run Javascript outside the browser with the help of NodeJS.
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td> Javascript is used in frontend development.</td>
            <td>Nodejs is used in server-side development.</td>
          </tr>
        </tbody>
      </table>
      <br /> <br />
      <h4>3. Difference between SQL and NoSql</h4>
      <table style={{ width: "90%" }}>
        <thead>
          <tr>
            <th>S.no</th>
            <th>SQL</th>
            <th>NoSql</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
            <td>Non-relational or distributed database system.</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>These databases have fixed.</td>
            <td>These databases have fixed.</td>
          </tr>
          <tr>
            <td>3.</td>
            <td> They have dynamic schema.</td>
            <td>These databases are not so good for complex queries.</td>
          </tr>
        </tbody>
      </table>
      <br />
      <h4 className="mt-4">
        4.What is the purpose of jwt and how does it work
      </h4>
      <p>
        Answer : JSON Web Token (JWT) is an open standard (RFC 7519) that
        defines a compact and self-contained way for securely transmitting
        information between parties as a JSON object.
        <br /> <br />
        It works this way: the server generates a token that certifies the user
        identity, and sends it to the client. The client will send the token
        back to the server for every subsequent request, so the server knows the
        request comes from a particular identity.
      </p>
    </div>
  );
};

export default Blog;
