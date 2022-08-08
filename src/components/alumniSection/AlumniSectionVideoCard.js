const AlumniSectionVideoCard = (props) => {
    const { name, posterSrc, videoSrc, jobtitel} = props
    return (
        <div className="alumniSection__videoArea__card">
            <video controls poster={posterSrc} >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <h5>{name}</h5>
            <p>{jobtitel}</p>
        </div>
    );
};

export default AlumniSectionVideoCard;