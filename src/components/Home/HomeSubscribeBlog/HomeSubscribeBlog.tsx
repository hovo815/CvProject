import React, {ChangeEvent} from 'react';
import "./homesubscribeblog.scss"



const HomeSubscribeBlog:React.FC = () => {
    const [email,setEmail] = React.useState("")

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    }

    return (
        <>
            <div className="home-subscribe-blog">
                <div className="home-subscribe-blog-content">
                    <h1 className='home-subscribe-blog-content-title'>Subscribe to our product newsletter.</h1>
                    <p className='home-subscribe-blog-content-text'>Keep current on all things Syinkd</p>
                </div>
                <div className="home-subscribe-blog-input">
                    <input
                        placeholder="Enter your email address..."
                        className='home-subscribe-blog-input-email'
                        value={email}
                        onChange={handleChange}
                        type="email"
                    />
                    <button className='home-subscribe-blog-input-btn'>Subscribe</button>
                </div>
            </div>
        </>
    );
};


export default HomeSubscribeBlog;