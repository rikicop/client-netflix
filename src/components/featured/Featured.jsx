import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "./featured.scss";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="featured"
      />
      <div className="info">
        {/*  <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABYLaue0-NxlC-jOdl0Qgbf8Y4noc_GcnbwhtPtLTIoFTw8FUG1ozagD6NGm7gPi-_dBmTUUF9lIxeamyfezi4AgbHNVMTpwAUmC-.png?r=31e" alt="" /> */}
        <img
          src="https://vignette.wikia.nocookie.net/international-entertainment-project/images/0/08/Rick_and_Morty_-_logo_(English).png/revision/latest?cb=20170408193423"
          alt="robot"
        />

        <span className="desc">
          Serie de animación para adultos creada por Justin Roiland para Adult
          Swim. La Serie sigue las desventuras de un científico, Rick, y su
          influenciable nieto, Morty, quienes pasan el tiempo entre la vida
          doméstica y los viajes temporales e intergalácticos.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
