import React from 'react';
import Carousel from 'react-simply-carousel';

const CONTENT = [
  {
    date: '2010/09/01 – 2014/02/01',
    content: <div><p>I'm an engineer living in Kyiv <span role='img'>🇺🇦</span>.</p><p>I <a href="https://www.linkedin.com/in/yukifartlek">work</a> for a startup that focuses on electric cars.</p></div>
  },
  {
    date: '2014/02/01 – 2017/11/15',
    content: <div><p>I'm an engineer living in Berlin <span role='img'>🇩🇪</span>.</p><p>I <a href="https://www.linkedin.com/in/yukifartlek">work</a> for SoundCloud, and I'm mostly into <a href="https://www.strava.com/athletes/yukifartlek">running</a>.</p></div>
  },
  {
    date: '2015/01/01',
    content: <div>Today I went for my first ever run, not knowing how much this will completely change my life: <a href="https://www.strava.com/activities/235204211">https://www.strava.com/activities/235204211</a></div>
  },
  {
    date: '2017/11/15 – 2020/06/07',
    content: <div><p>I'm an engineer living in London <span role='img'>🇬🇧</span>.</p><p>I <a href="https://www.linkedin.com/in/yukifartlek">work</a> for Twitter, and I'm into <a href="https://www.strava.com/athletes/yukifartlek">running</a> and <a href="https://www.goodreads.com/user/show/6328696-george-leontiev">reading</a>.</p></div>
  },
  {
    date: '2020/06/07 – 2020/08/23',
    content: <div><p>I've just fled to Reykjavik <span role='img'>🇮🇸</span> for the summer to escape COVID-19.</p><p>I <a href="https://www.linkedin.com/in/yukifartlek">work</a> for Twitter, and I'm into <a href="https://www.strava.com/athletes/yukifartlek">running</a> and <a href="https://www.goodreads.com/user/show/6328696-george-leontiev">reading</a>.</p></div>
  },
  {
    date: '2020/08/23',
    content: <div><p>I'm an engineer living in Edinburgh <span role='img'>🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>.</p><p>I <a href="https://www.linkedin.com/in/yukifartlek">work</a> for Twitter, and I'm into <a href="https://www.strava.com/athletes/yukifartlek">running</a> and <a href="https://www.goodreads.com/user/show/6328696-george-leontiev">reading</a>.</p></div>
  },
];

export default class Timeline extends React.Component {
  state = {
    activeSlideIndex: CONTENT.length - 2,
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex
    });
  };

  render() {
    return (
      <div>
        <Carousel
          activeSlideIndex={this.state.activeSlideIndex}
          onRequestChange={this.setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            children: '➡',
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center",
              background: 'transparent',
              border: 'none',
              color: 'white'
            }
          }}
          backwardBtnProps={{
            children: '⬅',
            style: {
              width: 60,
              height: 60,
              minWidth: 60,
              alignSelf: "center",
              background: 'transparent',
              border: 'none',
              color: 'white'
            }
          }}
        >
        {CONTENT.map((elem) =>
          <div style={{ width: "100vh" }}>
            {elem.content}
            {elem.date}
          </div>
        )}
        </Carousel>
      </div>
    );
  }
}
