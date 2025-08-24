const { formatDate } = require('../utils.js');

export default function Footer(props) {
    const { data, handleToggleModal, displayTodaysPic, displayRandomPic } = props;

    return (
        <footer className="apod-footer d-flex flex-column flex-sm-row align-items-center justify-content-between gap-2 gap-sm-3 p-3 position-absolute bottom-0 start-0 w-100">
            <div className='text-center text-sm-start'>
                <h2 className='fs-6 fw-normal'>{formatDate(data?.date)}</h2>
                <h1 className='fs-4'>{data?.title}</h1>
            </div>
            <div className='text-end'>
                <button className='px-3 py-2 px-sm-2 px-md-3' onClick={displayTodaysPic} title="Display today's picture">
                    <i className="fa-solid fa-calendar-day fa-lg"></i>
                </button>
                <button className='px-3 py-2 px-sm-2 px-md-3' onClick={displayRandomPic} title="Display a random picture">
                    <i className="fa-solid fa-shuffle fa-lg"></i>
                </button>
                <button className='px-3 py-2 px-sm-2 px-md-3' onClick={handleToggleModal} title="Show more information about this picture">
                    <i className="fa-solid fa-circle-info fa-lg"></i>
                </button>
            </div>
        </footer>
    );
}