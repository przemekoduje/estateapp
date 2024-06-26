import { useContext } from "react";
import SearchBar from "../../components/search/SearchBar";
import "./home.scss";
import { AuthContext } from "../../context/AuthContext";

export default function Home() {
  
  
  const { currentUser } = useContext(AuthContext)

  console.log(currentUser )
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Embark on your real estate journey today. Discover a plethora of
            ideal homes and properties waiting to be explored. Your dream place
            is within reach. Find it now and turn your vision into reality!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
                <h1>10+</h1>
                <h2>Years of experience</h2>
            </div>
            <div className="box">
                <h1>15</h1>
                <h2>Awards Gained</h2>
            </div>
            <div className="box">
                <h1>1000+</h1>
                <h2>Property Ready</h2>

            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg3.jpeg" alt="" />
      </div>
    </div>
  );
}
