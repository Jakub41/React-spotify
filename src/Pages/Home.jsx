import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Card, Button, Form, FormControl} from 'react-bootstrap';
import Slider from "react-slick";
import { getSearch } from "../Services/BaseDeezerAPI.js";
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer.jsx';
import { FaPlay } from "react-icons/fa";
import {getAllComments} from "../Services/CRUDCommentAPI";

const App = () =>  {
  const [artists, setArtists] = useState({});
  const [artistsTwo, setArtistsTwo] = useState({});
  const [artistsThree, setArtistsThree] = useState({});
  const [search, setSearch] = useState(null);
  const [playing, setPlaying] = useState({});
  const [playingImage, setPlayingImage] = useState({});
  const [playingDesc, setPlayingDesc] = useState(null);
  const [playingArtist, setPlayingArtist] = useState(null);

  useEffect( () => {

    const fetchAsync = async () => {
      await getSearch('the beatles').then((data) => 
      setArtists(data)
      )
    }
    const fetchAsyncTwo = async () => {
      await getSearch('the smiths').then((data) => 
      setArtistsTwo(data)
      )
    }
    const fetchAsyncThree = async () => {
      await getSearch('the wallflowers').then((data) => 
      setArtistsThree(data)
      )
    }
  fetchAsync();
  fetchAsyncTwo();
  fetchAsyncThree();

   }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  

  return (
    <div>

    <Container style={{paddingTop: '30px'}}>
      
    <getAllComments/>
    <Form inline>
      <FormControl type="text" placeholder="Filter" className="mr-sm-2" />
      <Button variant="outline-success">Filter</Button>
    </Form>
        <div style={{marginBottom: '80px', marginTop: '20px'}}>
<h3>The Beatles</h3>
          <Slider {...settings}>
            {artists.data
              && artists.data.map(O => (
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title> {O.artist.name}      <img className="borderImg" src={O.album.cover}></img></Card.Title>
                      <Card.Text>
                        <Link to={`/pages/album/${O.album.id}`}><p><b>Album:</b> {O.album.title}</p></Link>
                        <Button onClick={() => {
                          setPlaying(O.preview)
                          setPlayingImage(O.album.cover)
                          setPlayingDesc(O.album.title)
                          setPlayingArtist(O.artist.name)
                        }} variant="outline-warning">Play preview <FaPlay/></Button>
                      </Card.Text>
                      <Link to={`/pages/artist/${O.artist.id}`}>  <Button variant="warning">Go to artist</Button></Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Slider>
        </div>
        <div style={{ marginBottom: '80px', marginTop: '20px' }}>
          <h3>The Smiths</h3>
          <Slider {...settings}>
            {artistsTwo.data
              && artistsTwo.data.map(O => (
                <Col><Card>
                  <Card.Body>
                    <Card.Title> {O.artist.name}      <img className="borderImg" src={O.album.cover}></img></Card.Title>
                    <Card.Text>
                      <Link to={`/pages/album/${O.album.id}`}><p><b>Album:</b> {O.album.title}</p></Link>
                      <Button onClick={() => {
                        setPlaying(O.preview)
                        setPlayingImage(O.album.cover)
                        setPlayingDesc(O.album.title)
                        setPlayingArtist(O.artist.name)
                      }} variant="outline-warning">Play preview <FaPlay/></Button>
                    </Card.Text>
                    <Link to={`/pages/artist/${O.artist.id}`}>  <Button variant="warning">Go to artist</Button></Link>
                  </Card.Body>
                </Card>
                </Col>
              ))}
          </Slider>
        </div>

        <div style={{ marginBottom: '180px', marginTop: '20px' }}>
          <h3>The Wallflowers</h3>
          <Slider {...settings}>
            {artistsThree.data
              && artistsThree.data.map(O => (
                <Col><Card>
                  <Card.Body>
                    <Card.Title> {O.artist.name}      <img className="borderImg" src={O.album.cover}></img></Card.Title>
                    <Card.Text>
                      <Link to={`/pages/album/${O.album.id}`}><p><b>Album:</b> {O.album.title}</p></Link>
                      <Button onClick={() => {
                        setPlaying(O.preview)
                        setPlayingImage(O.album.cover)
                        setPlayingDesc(O.album.title)
                        setPlayingArtist(O.artist.name)
                      }} variant="outline-warning">Play preview <FaPlay/></Button>
                    </Card.Text>
                    <Link to={`/pages/artist/${O.artist.id}`}>  <Button variant="warning">Go to artist</Button></Link>
                  </Card.Body>
                </Card>
                </Col>
              ))}
          </Slider>
        </div>
   


</Container>
<Footer artist={playingArtist} desc={playingDesc} img={playingImage} src={playing}/>
  </div>
  
  );
}

export default App;
