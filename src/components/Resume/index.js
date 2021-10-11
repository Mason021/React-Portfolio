import React from 'react'; 

function Resume() {

return(
<section class="mb-5">
    <h1 className="resume">Resume: Mason Cain</h1>
        <hr></hr>
        <div class="row justify-content-center" id="resume">
            <div class="mt-5 pl-5 pr-5">
                Former financial investment representative changing track and currently studying full stack web development through Case Western Reserve University 

                <p class="mt-5">
                <a href="https://www.linkedin.com/in/masoncain021/"><img src="https://img.icons8.com/color/48/000000/linkedin-2.png" alt="Mason Cain LinkedIn Profile"/></a>
                </p>
                <p>
                Download my full <a href="" class="link">resume</a>
                <br></br>
                </p>
            </div>
        </div>

        <div class="justify-content-center mt-5">
            <div id="front-back">
                <h2>Front end experience</h2>
                <p>HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, Angular.js, IndexedDB</p>
            </div>
    
            <div id="front-back" class="mt-5">
                <h2>Back end experience</h2>
                <p>
                Node.js, Express.js, SQL (sqlite, mySQL), Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)
                </p>
            </div>
        </div>
</section>
);
}

export default Resume;