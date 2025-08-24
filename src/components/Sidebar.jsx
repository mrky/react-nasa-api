const { formatDate } = require('../utils.js');

export default function Sidebar(props) {
    const { handleToggleModal, data } = props;
    const formattedCopyright = data.copyright ? formatCopyright(data.copyright) : null;

    /**
     * Format the copyright, so multiple copyright owners are separated by a pipe
     * @param {string} copyright 
     * @returns {string} Copyright in the format "Owner1 | Owner2"
     */
    function formatCopyright(copyright) {
        return copyright;

        copyright = copyright.trim();

        // Fixes cases like " / \n", ", \n", "\n"
        copyright = copyright.replace(/\W*\n/g, " | ");

        return copyright;
    }

    /**
     * If the HD URL does not equal the URL, return a link to the HD URL
     * @returns Link to the HD URL
     */
    function displayHdUrl() {
        if (data.hdurl && data.url && data.hdurl !== data.url) {
            return <a href={data.hdurl} target='_blank'>HD version</a>;
        }
    }

    return (
        <div className="d-flex flex-column sidebar">
            <div onClick={handleToggleModal} className="bg-overlay"></div>
            <div className="py-4 sidebar-content overflow-hidden">
                <h2 className='fs-4 fw-normal'>{data?.title}</h2>
                <h3 className="fs-6 fw-normal">{formatDate(data?.date)}</h3>
                <p className='overflow-auto pe-3 mb-0'>{data?.explanation}</p>
                {displayHdUrl()}
                {formattedCopyright && <h6 className="fw-normal wrap-break-word" title={"Picture Copyright " + formattedCopyright}><i className="fa-regular fa-copyright opacity-90"></i> {formattedCopyright}</h6>}
                <button className="mt-auto" title="Close" onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}