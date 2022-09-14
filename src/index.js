import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare, } from '@fortawesome/free-solid-svg-icons'


function Hi(props) {
  return <div className='post'>

    <div className='postHeader'>

      <img className='profilePhoto' src={props.profilePhoto} alt="profile" />

      <div>
        {props.name} <br />
        {moment(props.postTime).fromNow()}
      </div>

    </div>

    <div className='postText'>
      {props.postText}
    </div>


    <img className='postImage' src={props.postImage} alt="postImage" />

    <hr />
    <div className='postFooter'>
      <div> <FontAwesomeIcon icon={faThumbsUp} /> Like  </div>
      <div>  <FontAwesomeIcon icon={faComment} /> Comment </div>
      <div> <FontAwesomeIcon icon={faShare} /> Share </div>
    </div>
    <hr />


  </div>;
}

ReactDOM.render(<div>
  <Hi
    name="Hassaan"
    profilePhoto="https://news.microsoft.com/wp-content/uploads/prod/sites/133/2018/07/sayed11-215x215.jpg"
    postTime="12 Apr 22"
    postText="Hi Anlainlb. I am using es6 along with webpack. If I use node modules , webpack can build the front end code. So I want to do in that way"
    postImage="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/306561711_1818377708554043_4399908861609575153_n.jpg?stp=dst-jpg_p600x600&_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEWTR0EJI9pO5-XjeE61twrzFinnaVKNPjMWKedpUo0-Iu201Lfc2nYkkHNIQWlh328VHwy-zdJhDut4PaPpLMa&_nc_ohc=Rqa-hzokZ7YAX8cri2b&_nc_ht=scontent.fkhi22-1.fna&oh=00_AT8MjezfpMmNQVme7-WD7R6vLqr2rR2-N87aDc4HBJIoaA&oe=6326C0C8"
  />
  <Hi
    name="Taha"
    profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtT0qHIHkUd7ldDm9B5J4Bs13zWJybgIslMQ&usqp=CAU"
    postTime="12 Jan 22"
    postText="Hi Anlainlb. I am using es6 along with webpack. If I use node modules , webpack can build the front end code. So I want to do in that way"
    postImage="https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/306831936_1818377711887376_3229971550915012041_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeE1bL7yps20LybWdHKShXgktngonH44WG22eCicfjhYbb3t7fUFA37l7SeJhLy5dDTGORhmpIYmM3864oRYClLY&_nc_ohc=VLgXpRerXTwAX_ZVKZv&tn=ifBEzjC9uXJa2EWA&_nc_ht=scontent.fkhi22-1.fna&oh=00_AT_gxt82hLtGrQ-TkAQy9O6Oaoz70LQeD9SkLM_Ji6G_yg&oe=6327BB08"
  />

</div>, document.querySelector('#root'));