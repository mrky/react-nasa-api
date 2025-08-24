export default function Loading(props) {
    const { message, retry } = props;

    return (
        <div className="d-flex flex-column align-items-center justify-content-center m-auto">
            <div className="mb-3">
                <i className="fa-regular fa-face-frown fa-3x"></i>
            </div>
            <p className="font-orbitron text-center">
                Houston, we have a problem...<br />
                {message ? message : "An unexpected error occurred."}
            </p>
            {retry && <button type="button" className="btn btn-light" onClick={retry}>Retry</button>}
        </div>
    );
}