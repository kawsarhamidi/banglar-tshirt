import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData();

    return (
        <div>
            <p>{tShirts.length}</p>
        </div>
    );
};

export default Home;