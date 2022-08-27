import React from "react";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import useAuth from "../../hooks/useAuth";
import { KEY } from '../../localKey';


const HomePage = () => {


  
  const [videoId, setVideoId] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [relatedVideos, setRelatedVideos] = useState([]);
  

  useEffect(() => {
    getSearchResults();
    
  }, [])


async function getSearchResults(searchTerm = 'Disney Vacation'){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=${KEY}`);
  setVideoId(response.data.items[0].id.videoId)
  console.log(response.data.items[0].id.videoId)
  setDescription(response.data.items[0].snippet.description)
  setTitle(response.data.items[0].snippet.title)
  

}




  return (
    <div className="homepage-contain">
      <div><SearchBar getSearchResults={getSearchResults}/></div>
      <div className = 'home-flex-contain'>
        <div>
          <div className='home-video-player'><VideoPlayer videoId = {videoId} description = {description} title = {title}/></div>
          {/* <div className='home-comment-form'><CommentForm postComment = {postComment}/></div>
          <div><CommentList allComments = {allComments} postReply = {postReply} postLike = {postLike} postDislike = {postDisLike}/></div> */}
        </div>
        {/* <div>
          <div className='home-related'><RelatedVideos relatedVideos={relatedVideos} setVideoId={setVideoId} setTitle = {setTitle} setDescription = {setDescription}/></div>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;


