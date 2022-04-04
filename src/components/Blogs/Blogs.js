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
                <p>Semantic HTML elements are those that represent their meaning in a way that is both human and machine readable. Tags such as "div" and "span" aren't semantic because they provide no information about the content. However, there are various semantic components in HTML that can be used to designate different areas of a web page. "header" refers to the website's header area, whereas "nav" refers to the page's navigation section, which allows us to reach other portions of the page, among other things. When semantic tags are used in code, it becomes easier to read and understand. Overall, semantic elements result in more consistent code.</p>
            </div>
        </div>
        </div>
    );
};

export default Blogs;