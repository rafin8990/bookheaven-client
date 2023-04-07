import React from 'react';
import BannerPage from './BannerPage';
import BannerPage2 from './BannerPage2';
import BestSellingBooks from './BestSellingBooks';
import NewReleaseBooks from './NewReleaseBooks';
import MostPopularAuthors from './MostPopularAuthors';
import OpenDiscount from './OpenDiscount';
import Comments from './Comments';
import Categories from './Categories';

const HomePage = () => {
    return (
        <div>
            <BannerPage/>
            <BannerPage2/>
            <Categories></Categories>
            <BestSellingBooks/>
            <OpenDiscount/>
            <NewReleaseBooks/>
            <Comments/>
            <MostPopularAuthors/>
        </div>
    );
};

export default HomePage;