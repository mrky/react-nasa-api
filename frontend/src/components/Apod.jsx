import { useEffect, useState } from "react";
import Loading from "./Loading";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Error from "./Error";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080/";

export default function Apod() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        displayTodaysPic();
    }, []);

    /**
     * Toggle displaying the information modal
     */
    function handleToggleModal() {
        setShowModal(!showModal);
    }

    /**
     * Call the endpoint that loads today's pic, cache the data, and display
     * the pic
     */
    async function displayTodaysPic() {
        // Reset so the loading element is displayed
        setData(null);
        setError(false);

        const today = new Date().toDateString();
        const todaysPicKey = `nasa-apod-${today}`;

        if (localStorage.getItem(todaysPicKey)) {
            const apiData = JSON.parse(localStorage.getItem(todaysPicKey));
            setData(apiData);

            return;
        }

        localStorage.clear();

        try {
            const res = await fetch(`${BACKEND_URL}apod`);

            if (!res.ok) {
                throw new Error("Error getting today's picture");
            }

            const apiData = await res.json();

            // Caching today's picture so we don't eat into our hourly API limit
            localStorage.setItem(todaysPicKey, JSON.stringify(apiData));

            setData(apiData);
        } catch (err) {
            console.error(err.message);

            setError({
                message: "There was an error loading today's picture.",
                retry: displayTodaysPic
            });
        }
    }

    /**
     * Call the endpoint that retrieves a random pic and display it
     */
    async function displayRandomPic() {
        // Reset so the loading element is displayed
        setData(null);
        setError(false);

        try {
            const res = await fetch(`${BACKEND_URL}apod?random=1`);

            if (!res.ok) {
                throw new Error("Error getting random picture");
            }

            const apiData = await res.json();
            setData(apiData);
        } catch (err) {
            console.error(err.message);

            setError({
                message: "There was an error loading a random picture.",
                retry: displayRandomPic
            });
        }
    }

    return (
        <div className="d-flex position-relative" style={{ minHeight: '100vh' }}>
            {data
                ? (
                    <div className="d-flex flex-column w-100 apod-media-container">
                        {
                            // Using the URL instead of the HD URL because there was a case where the HD URL pointed
                            // to a mpg (video) file even though the media type was set to image. The video also wouldn't
                            // load in the iframe because the URL pointed to NASA's API
                            data.media_type === 'image'
                                ? <img src={data.url} alt={data.title || "An out of this world image"} className="apod-bg-image" />
                                : <iframe src={data.url} className="h-100 w-100" title={data.title || "An out of this world video"}></iframe>
                        }

                    </div>
                )
                : error
                    ? (<Error retry={error.retry} message={error.message} />)
                    : (<Loading />)
            }
            {showModal && (
                <Sidebar data={data} handleToggleModal={handleToggleModal} />
            )}
            {data && <Footer data={data} handleToggleModal={handleToggleModal} displayTodaysPic={displayTodaysPic} displayRandomPic={displayRandomPic} />}
        </div>
    );
}