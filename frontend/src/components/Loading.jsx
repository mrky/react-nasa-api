export default function Loading() {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center m-auto p-3">
            <div className="mb-3">
                <i className="fa-solid fa-satellite-dish fa-fade fa-3x" style={{ "--fa-animation-duration": "1.5s" }}></i>
            </div>
            <p className="font-orbitron text-center">
                Satellites enabled...<br />
                Hold on while we load an out of this world image!
            </p>
        </div>
    );
}