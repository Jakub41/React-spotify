import {Container, Card, Button } from 'react-bootstrap';
import { getAlbum } from "../Services/BaseDeezerAPI.js";
import React, { Component } from 'react';
import Footer from '../Components/Footer/Footer.jsx';
import { FaPlay } from "react-icons/fa";

class Album extends Component {

  constructor(props){
    super(props);
    this.state = {
      Albums: [],
      AlbumTracks: [],
      AlbumArtist: [],
      playing: '',
      playingImage: '',
      playingDesc: '', 
      playingAlbum: '',
      playingSong: '',
    }
  }

  deezerAlbumData(){
    setTimeout(() => {
        getAlbum(window.location.pathname.split("/").pop()).then((data) => ( this.setState({
          Albums: data,
          AlbumTracks: data.tracks.data,
          AlbumArtist: data.artist
        }) )
        )
    }, 100)
  }

  componentDidMount(){
    this.deezerAlbumData();
  }

  render() {

    const {Albums, AlbumTracks, AlbumArtist, playing, playingImage, playingDesc, playingAlbum, playingSong} = this.state;

    return(
      <div>
      <Container style={{textAlign: 'center'}}> <br/><br/>
      <Card>
      <Card.Body>
      <Card.Title>Album: <b><font color="#e84e0f">{Albums.title}</font></b>     </Card.Title>
    <img className="borderImg" src={Albums.cover}></img>
      
      <Card.Text>
      <h4>Artist: <b>{ AlbumArtist.name}</b></h4>
  {AlbumTracks.map(O => (
    <div style={{margin:'10px'}}>
    <p>{O.title}</p>
    <Button onClick={() => {
      this.setState({        
      playing: (O.preview),
      playingSong: (O.title),
      playingImage: (Albums.cover),
      playingDesc: (Albums.title),
      playingArtist: (AlbumArtist.name) 
    })

      }} variant="outline-warning">Play preview <FaPlay/> </Button>
    </div>

   ) )}

      </Card.Text>
    </Card.Body>
  </Card>
  </Container>
  <Footer desc={`Song: ${playingSong}`} img={playingImage} src={playing}/>
  </div>
    )
  }
}

export default Album;