import { Component } from "react";
import Artist from "./Artist";

export default class ArtistsList extends Component {
    constructor() {
        super();
        this.state = {
            artistsList: [],
            errorMessage: ""
        }
    }

    ShowArtists = ({ artistsList, errorMessage }) => {
        if (artistsList.length > 0) {
            return artistsList.map((artist) => {
                return <Artist key={artist.id} artistInfo={artist} />
            }
            )
        } else if (errorMessage.length !== 0) {
            return (
                <div>{errorMessage}</div>
            )
        }
        else {
            return (
                <div>No Artists Right Now!!</div>
            )
        }
    }

    render() {
        return (
            <div>
                {
                    this.ShowArtists(this.state)}
                {/* <StudentDetails/> */}
            </div>
        )
    }

    componentDidMount() {
        fetch('https://music-db.onrender.com/artists')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // console.log(data);
                this.setState({ artistsList: data });
                this.setState({ errorMessage: "" });
            })
            .catch((err) => { this.setState({ errorMessage: "Check ur Internet Connection" }) })
    }
}