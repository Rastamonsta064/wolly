import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <div>
                ReDesign precious things!
                    <Link to="/gallery">
                        To the shop >>
                    </Link>
            </div>

            <div><h2>Features</h2>
                <p>Seamless and fast transaction with client connect people around the world</p>
                <div>Predictable budget</div>
                <div>Develop your own shape at each stage</div>
                <div>Direct tracking in the manufacturing process</div>
                <button>Sing Up</button>
            </div>
            <div>
                <h3>Now, also on App!</h3>
                <div>App photo</div>
                <div>
                    <div>google</div>
                    <div>Apple</div>
                </div>
            </div>

        </div>
    );
};

export default HomePage;