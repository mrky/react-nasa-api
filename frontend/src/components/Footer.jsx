import FooterButton from "./FooterButton";
const { formatDate } = require('../utils.js');

export default function Footer(props) {
    const { data, handleToggleModal, displayTodaysPic, displayRandomPic } = props;

    return (
        <footer className="apod-footer d-flex flex-column flex-sm-row align-items-center justify-content-between p-3 position-absolute bottom-0 start-0 w-100">
            <div className='text-center text-sm-start'>
                <h2 className='fs-6 fw-normal'>{formatDate(data?.date)}</h2>
                <h1 className='fs-4'>{data?.title}</h1>
            </div>
            <div className='text-end'>
                <FooterButton onclick={displayTodaysPic} title="Display today's picture" icon="fa-solid fa-calendar-day" />
                <FooterButton onclick={displayRandomPic} title="Display a random picture" icon="fa-solid fa-shuffle" />
                <FooterButton onclick={handleToggleModal} title="Show more information about this picture" icon="fa-solid fa-circle-info" />
            </div>
        </footer>
    );
}