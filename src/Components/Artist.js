import { NavLink } from "react-router-dom";

let Artist = (props)=>{
    console.log(props.artistInfo);
    let artist = props.artistInfo;
    let imgURL = "/covers/" + artist.cover + ".jpg";
    console.log(imgURL)
    return (
        <div className="card text-center m-3">
            <img src={imgURL} className="card-img-top" alt=".."/>
            <div className="card-body">
                <p className="card-text"><NavLink to={`/artists/${artist.id}`}>{artist.name}</NavLink></p>
            </div>
        </div>
    )
}

export default Artist;