


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Banner = () => {
    const [banners, setBanners] = useState({});
    const [loading, setLoading] = useState(true);
    const [toogleVisiblity, setToogleVisiblity] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/banner/get')
            .then(response => {
                // Initialize banners with data from the API
                const initialBanners = response.data.map(banner => ({
                    ...banner,
                    isVisible: true,
                }));
                setBanners(initialBanners);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to load banner data');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        // Only start countdowns after banners are fetched
        if (!loading) {
            const countdownIntervals = banners.map((banner, index) => {
                if (banner.timer > 0) {
                    // const updatedBanners = prevBanners.map((b, i) => {
                    //     if (i === index) {
                    //         // Decrease the timer and update visibility
                    //         const updatedBanner = { ...b };
                    //         if (updatedBanner.timer > 0) {
                    //             updatedBanner.timer -= 1;
                    //         }
                    //         if (updatedBanner.timer <= 0) {
                    //             updatedBanner.isVisible = false;
                    //         }
                    //         return updatedBanner;
                    //     }
                    //     return b;
                    // });

                    return setInterval(() => {
                        setBanners(prevBanners => {
                            const updatedBanner = { ...banner };
                            if (updatedBanner.timer > 0) {
                                updatedBanner.timer -= 1;
                            }
                            if (updatedBanner.timer <= 0) {
                                updatedBanner.isVisible = false;
                            }
                            banners[index] = updatedBanner;
                            // Return the updated banners array, filtering out invisible ones
                            return prevBanners.filter(b => b.isVisible);
                            // Create a copy of the current state
                        });
                        
                    }, 1000);
                }
                return null;
            });

            // Clear intervals when component unmounts or banners change
            return () => {
                countdownIntervals.forEach(timerId => {
                    if (timerId) clearInterval(timerId);
                });
            };
        }
    }, [loading, banners]);

    const handleVisiblity = (index, bool) => {
        // setToogleVisiblity(!toogleVisiblity);  
        banners[index].visiblity = !banners[index].visiblity;
        console.log(index, banners[index]); 
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="banner-container">
            {banners.map((banner, index) => (
                <div key={index} className="banner">
                    <div className="banner-content">
                        <h2>{banner.description}</h2>
                        <button onClick={() => handleVisiblity(index)}>Toggle</button>
                        {/* <input value="checkbox" onChange={handleVisiblity}></input> */}
                        {!banner.visiblity && 
                        <div>
                            <p>Disappearing in {banner.timer} seconds</p>
                            {banner.link && <a href={banner.link} target="_blank" rel="noopener noreferrer">Click Here</a>}
                        </div>
                            }
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Banner;
