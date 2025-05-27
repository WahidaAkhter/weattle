import React from 'react';

const Blogs = () => {
    return (
        <div id='blogs'>
           <h1 className='text-center mt-5 mb-5 text-success'>Question & Answer</h1>
           <h2 className='text-dark'>Question 1:Difference between authorization and authentication?</h2>
           <h4>Answer:if we want to verify a user that is authentication,whereas if we want verify a specific applicantions that is authorization,files,data user has access to.</h4>
           <h2 className='text-dark'>Question 2:Why are you using firebase? What other options do you have to implement authentication?</h2>
           <h4>Answer:firebase is backend application development software that gives deelopers to develop many android and ios application.Actually in authentication process a server needs user name and password,there are others ways authentication can be done through cards,finger prints and retina scan.</h4>
           <h2 className='text-dark'>Question 3:What other services does firebase provide other than authentication?</h2>
           <h4>Answer: there are many service firebase provides like cloud storage,google analytics,hosting,cloud messaging and many more.</h4>

        </div>
    );
};

export default Blogs;