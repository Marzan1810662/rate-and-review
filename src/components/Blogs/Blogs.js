import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h2><span className='blogs-title'>Blogs</span></h2>
            <div className='container d-flex flex-column flex-lg-row px-4'>
            <div className='qna-div'>
                <h4>Q1. What is context Api?</h4>
                <p>The Context API allows us to send data between components in our tree, allowing them to communicate and share data at different levels. This is a better option than "prop drilling," which involves passing props from grandma to child to parent. The Context API's main goal is to efficiently generate global variables that may be passed around. For things like theming, user language, and authentication, the Context API is fantastic. React.create Context() is the only method required. It will give you a customer and a provider. Provider is a component that supplies the state to its children, as its name suggests. It will contain the "store" and serve as the parent of all components that may require it. As it happens, a consumer is a component that consumes and uses the state.</p>
            </div>
            <div className='qna-div'>
                <h4>Q2. What is Semantic Tag?</h4>
                <p></p>
            </div>
        </div>
        </div>
    );
};

export default Blogs;