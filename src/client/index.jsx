import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from 'tweets';
import User from "user";
import Post from "tweetpost";

class App extends React.Component {
  render() {
    console.log(Post);
var allTweets = Tweets.map(tweet=>{
  console.log(tweet)
  return(
  <div>
      <p>{tweet.user.name}</p>
      <p>{tweet.user.screen_name}</p>
      <br/>
      <br/>
      <hr></hr>
      <h2>Message</h2>
      <Post content={tweet.text}  />
  </div>
  )
});

    return (
      <div>
        {allTweets}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");
