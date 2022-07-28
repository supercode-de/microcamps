const AlumniSectionReviewCard = (props) => {
    const { name, jobtitel, bewertung } = props
    return (
        <div className="alumniSection__reviewGrid__card">
            <h5>{name}</h5>
            <p>{jobtitel}</p>
            <p>{bewertung}</p>
        </div>
    );
};

export default AlumniSectionReviewCard;
