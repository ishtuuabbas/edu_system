import React, { useState } from 'react';
import './Index.css';
import Footer from "../components/Footer/Footer";

const successStoriesData = [
  {
    id: 1,
    name: "Lorem ipsum",
    education: 'BSc (Hons) in Economics from Lahore School of Economics (LSE)',
    story: 'During my bachelors... financial support...',
    fullStory: 'During my bachelors, I faced numerous challenges, especially in balancing academics and managing the financial aspects. However, with hard work and persistence, I was able to achieve my goals and obtain financial support.',
  },
  {
    id: 2,
    name: 'Lorem ipsum',
    education: 'BSc in Software Engineering',
    story: 'When I arrived...to higher education...',
    fullStory: 'When I arrived at university, I was overwhelmed with the new environment and the fast-paced learning style. Over time, I adapted and excelled in my studies, finding support from peers and faculty.',
  },
  {
    id: 3,
    name: "Lorem ipsum",
    education: 'BSc (Hons) in Economics from Lahore School of Economics (LSE)',
    story: 'During my bachelors... financial support...',
    fullStory: 'During my bachelors, I faced numerous challenges, especially in balancing academics and managing the financial aspects. However, with hard work and persistence, I was able to achieve my goals and obtain financial support.',
  },
  {
    id: 4,
    name: 'Lorem ipsum',
    education: 'BSc in Software Engineering',
    story: 'When I arrived...to higher education...',
    fullStory: 'When I arrived at university, I was overwhelmed with the new environment and the fast-paced learning style. Over time, I adapted and excelled in my studies, finding support from peers and faculty.',
  },
  {
    id: 5,
    name: "Lorem ipsum",
    education: 'BSc (Hons) in Economics from Lahore School of Economics (LSE)',
    story: 'During my bachelors... financial support...',
    fullStory: 'During my bachelors, I faced numerous challenges, especially in balancing academics and managing the financial aspects. However, with hard work and persistence, I was able to achieve my goals and obtain financial support.',
  },
  {
    id: 6,
    name: 'Lorem ipsum',
    education: 'BSc in Software Engineering',
    story: 'When I arrived...to higher education...',
    fullStory: 'When I arrived at university, I was overwhelmed with the new environment and the fast-paced learning style. Over time, I adapted and excelled in my studies, finding support from peers and faculty.',
  },
  {
    id: 7,
    name: "Lorem ipsum",
    education: 'BSc (Hons) in Economics from Lahore School of Economics (LSE)',
    story: 'During my bachelors... financial support...',
    fullStory: 'During my bachelors, I faced numerous challenges, especially in balancing academics and managing the financial aspects. However, with hard work and persistence, I was able to achieve my goals and obtain financial support.',
  },
  {
    id: 8,
    name: 'Lorem ipsum',
    education: 'BSc in Software Engineering',
    story: 'When I arrived...to higher education...',
    fullStory: 'When I arrived at university, I was overwhelmed with the new environment and the fast-paced learning style. Over time, I adapted and excelled in my studies, finding support from peers and faculty.',
  },
  // Ensure each story has a unique ID and full story details
];

const Index = () => {
  const [expandedStoryId, setExpandedStoryId] = useState(null); // Track the expanded story ID

  const toggleReadMore = (id) => {
    setExpandedStoryId(expandedStoryId === id ? null : id); // Toggle story expansion
  };

  return (
    <>
      <div className="success-stories">
        <h2>Our Success Stories</h2>
        <div className="stories-container">
          {successStoriesData.map((story) => (
            <div key={story.id} className="story-card">
              <div className="story-content">
                <div className="avatar"></div>
                <h3>{story.name}</h3>
                <p className="education">{story.education}</p>
                <p className="story-text">
                  {expandedStoryId === story.id ? story.fullStory : `${story.story}...`}
                </p>
                <button
                  onClick={() => toggleReadMore(story.id)}
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {expandedStoryId === story.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
