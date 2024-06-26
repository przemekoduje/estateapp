import Slider from "../../components/slider/Slider";
import "./singlePage.scss";
import Map from "../../components/map/Map";
import { useLoaderData, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import { useContext, useState } from "react";
import { AuthContext} from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";

export default function SinglePage() {
  const post = useLoaderData();
  const [saved, setSaved] = useState(post.isSaved);
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleSave = async () => {
    setSaved((prev) => !prev)
    if(!currentUser){
      navigate("/login");
    }
    try{

      await apiRequest.post("/users/save", { postId: post.id });
      
    }catch(err) {
      console.log(err)
      setSaved((prev) => !prev)
    }
  }
  return (
    <div className="singlepage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className="bottom" dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.postDetail.desc),
            }}>
              
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">

          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <i class="fa-solid fa-screwdriver-wrench"></i>
              <div className="featuresText">
                <span>Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p> ) : (
                    <p>Tenant is responsible</p>
                  )
                }
              </div>
            </div>
            <div className="feature">
              <i class="fa-solid fa-paw"></i>
              <div className="featuresText">
                <span>Pet Policy</span>
                {post.postDetail.pets === "allowed" ? (
                  <p>Pets Allowed</p> ) : (
                    <p>Pets not Allowed</p>
                  )
                }
              </div>
            </div>
            <div className="feature">
              <i class="fa-regular fa-money-bill-1"></i>
              <div className="featuresText">
                <span>Income Policy</span>
                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>

          <p className="title">Room Sizes</p>
          <div className="sizes">
            <div className="size">
              <i class="fa-solid fa-expand"></i>
              <span>{post.postDetail.size} sqft</span>
            </div>
            <div className="size">
              <i class="fa-solid fa-bed"></i>
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <i class="fa-solid fa-restroom"></i>
              <span>{post.bathroom} bathrooms</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <i class="fa-solid fa-school"></i>
              <div className="featuresText">
                <span>School</span>
                <p>{post.postDetail.school} m away</p>
              </div>
            </div>
            <div className="feature">
              <i class="fa-solid fa-bus"></i>
              <div className="featuresText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus} m away</p>
              </div>
            </div>
            <div className="feature">
              <i class="fa-solid fa-utensils"></i>
              <div className="featuresText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant} m away</p>
              </div>
            </div>
          </div>
          
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>

          
          <div className="buttons">
            <button>
              <i class="fa-brands fa-rocketchat"></i>
              Send a Message
            </button>


            <button 
              onClick={handleSave}
              style={{
                backgroundColor: saved ? "#fece51" : "white"
              }}
            >
              <i class="fa-solid fa-bookmark"></i>
              {saved ? "Place Saved" : "Save the Place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
