import profilepic from './assets/profile.jpg'
function Card(){
    return(
        <div className="card-container">
            <img src={profilepic} alt="profile picture" className="card-image"></img>
            <h1 className="card-title">Neima Alemu</h1>
            <p className="card-text">A front end developer and now studying back end</p>
        </div>
    );
}

export default Card