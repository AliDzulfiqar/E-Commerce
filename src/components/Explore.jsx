import React from 'react';

const Explore = () => {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2>Explore More <span className="crimson">Books</span></h2>
                    <Link to="/books">
                        <button className="btn">Explore Books</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};


export default Explore;