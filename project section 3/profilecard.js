function ProfileCard ({title,handle,image,descrition}){
    return(
        <div className="card">
            <div className="card-images">
                <figure className="image is-1by1">
                    <img src={image} alt="prem logo"/>
                </figure>
            </div>
            <div className="card contain">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <p className="content">{descrition}</p>

            </div>
        </div>
    );
}

export default ProfileCard;
