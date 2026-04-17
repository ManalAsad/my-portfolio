import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Blog() {
  return (
    <div className="blog-page">
      <Navbar />

      <div className="blog-hero-banner">
        <div className="blog-hero-overlay"></div>
        <div className="blog-hero-content">
          <div className="blog-tag">Travel Journal</div>
          <h1 className="blog-headline">
            Trip to Yellowstone<br /><em>2025</em>
          </h1>
          <p className="blog-sub">
            A week-long adventure through geysers, hot springs, wildlife, and mountain trails
          </p>
          <div className="blog-meta">
            <span>Wyoming, USA</span>
            <span>September 2024</span>
            <span>7 days</span>
          </div>
        </div>
      </div>

      <div className="blog-content">
        <Link to="/" className="blog-back">← Back to portfolio</Link>

        {/* Grand Prismatic */}
        <div className="travel-entry">
          <div className="polaroid-large">
            <img src="/images/grandprismatic.jpg" alt="Grand Prismatic Geyser" className="polaroid-img" />
          </div>
          <div className="travel-description">
            <div className="travel-label">Day 2</div>
            <h2 className="travel-title">Grand Prismatic <em>Geyser</em></h2>
            <p className="travel-p">
              The colors here are unreal, vibrant oranges, yellows, and deep blues created by 
              thermophilic bacteria that thrive in the extreme heat.
            </p>
            <p className="travel-p">
              It was very cold there, and the steam was so thick that we could barely see the geyser itself. But the colors were still stunning.
            </p>
          </div>
          <div className="video-container">
            <video controls className="video-player video-player-landscape">
              <source src="/videos/grandprismatic.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Old Faithful */}
        <div className="travel-entry">
          <div className="polaroid-large">
            <img src="/images/oldfaithful.jpg" alt="Old Faithful Geyser" className="polaroid-img" />
          </div>
          <div className="travel-description">
            <div className="travel-label">Day 3</div>
            <h2 className="travel-title">Old Faithful <em>Geyser</em></h2>
            <p className="travel-p">
              The most famous geyser in the world, and it lived up to the hype. It shoots boiling water 130 feet into the air.
            </p>
            <p className="travel-p">
              It enrupted every 90 minutes like clockwork, and we were lucky to catch it twice in one day.
            </p>
          </div>
          <div className="video-container">
            <video controls className="video-player video-player-landscape">
              <source src="/videos/Oldfaithfull.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* ATV Adventure */}
        <div className="travel-entry">
          <div className="polaroid-large">
            <img src="/images/yellowston 1.jpg" alt="ATV adventure" className="polaroid-img" />
          </div>
          <div className="travel-description">
            <div className="travel-label">Day 4</div>
            <h2 className="travel-title">ATV <em>Mountain Adventure</em></h2>
            <p className="travel-p">
              This day was the most adventurous of the trip. We rented ATVs and explored the backcountry trails.
              Mud pits, small streams, rocky trails, and panoramic views, we got dirty and loved it.
            </p>
            <p className="travel-p">
              There were no signals in the mountains, and had to rely on maps. We actually got lost for a bit, but it was part of the fun. 
              We found our way back just as the sun was setting.
            </p>
          </div>
          <div className="video-container">
            <video controls className="video-player video-player-landscape">
              <source src="/videos/atv.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Mammoth Hot Springs*/}
        <div className="travel-entry">
          <div className="polaroid-large">
            <img src="/images/4.jpg" alt="Mammoth Hot Springs" className="polaroid-img" />
          </div>
          <div className="travel-description">
            <div className="travel-label">Day 5-6</div>
            <h2 className="travel-title">Mammoth Hot Springs <em>Terraces</em></h2>
            <p className="travel-p">
              This one was unique.
              The terraces are constantly changing, hot water deposits calcium carbonate, 
              building white and gold staircases that cascade down the hillside.
            </p>
            <p className="travel-p">
              We walked the boardwalks at sunrise when the steam was thickest.
            </p>
          </div>
          <div className="video-container">
            <video controls className="video-player-portrait-fill">
              <source src="/videos/Mammoth.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Lamar Valley */}
        <div className="travel-entry">
          <div className="polaroid-large">
            <img src="/images/lamarvalley.jpg" alt="Lamar Valley wildlife" className="polaroid-img" />
          </div>
          <div className="travel-description">
            <div className="travel-label">Day 7</div>
            <h2 className="travel-title">Lamar Valley <em>Wildlife Safari</em></h2>
            <p className="travel-p">
              Known as "America's Serengeti," we woke up at 4:30 AM to get there at dawn.
            </p>
            <p className="travel-p">
              We saw so many bisons. The valley was filled with their grunts and snorts, and they were just roaming freely. </p>
          </div>
          <div className="video-container">
            <video controls className="video-player video-player-landscape">
              <source src="/videos/lamarvalley.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="back-to-portfolio">
          <Link to="/" className="btn-secondary">Back to portfolio →</Link>
        </div>
      </div>

      <footer>
        <span className="footer-copy">2025 · Yellowstone memories</span>
      </footer>
    </div>
  )
}