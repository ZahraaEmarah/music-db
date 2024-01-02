import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let ArtistDetails = () => {
    // console.log(useParams());
    let { id } = useParams();
    let [artist, setArtist] = useState({})
    let imgURL = "/covers/" + artist.cover + ".jpg";


    useEffect(() => {
        fetch(`https://music-db.onrender.com/artists/${id}`)
            .then((response) => { return response.json() })
            .then((data) => {
                setArtist(data);
            })
            .catch((err) => { })
    }, [])
    if (artist.cover) {
        return (
            <div className="p-4 text-center">
                <img className="details" src={imgURL} alt=".."></img>
                <h1 className="m-3">{artist.name}</h1>
                <div className="text-center">
                    <p className="bio">{artist.bio}</p>
                </div>
                <div>
                    {
                        artist.albums.map((alb) => {
                            return <img className="covers" src={"/albums/" + alb.cover + ".jpg"}></img>
                        })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="alert alert-danger text-center">No artist Now</div>
        )
    }

}

export default ArtistDetails;