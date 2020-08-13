import React from 'react';
import Carousel from 'react-simply-carousel';

const CONTENT = [
  {
    date: '2010/09/01 – 2014/02/01',
    content: <div><p>I'm an engineer living in Kyiv <span role='img'>🇺🇦</span>.</p><p>I <a href="https://www.linkedin.com/in/yukifartlek">work</a> for a startup that focuses on electric cars.</p></div>
  },
  {
    date: '2014/02/01 – 2017/11/15',
    content: <div><p>I'm an engineer living in Berlin <span role='img'>🇩🇪</span>.</p><p>On the first day of 2015 I <a href="https://www.strava.com/activities/235204211">went for my first run</a>, not realizing how much it will change my life. That same year I've finished <a href="https://www.strava.com/activities/433168211">my first marathon</a>, and in the next three years went on to <a href="https://www.strava.com/activities/1199206700">steadily improve my time</a>.</p><p>I <a href="https://www.linkedin.com/in/yukifartlek">work</a> for SoundCloud, and I'm mostly into <a href="https://www.strava.com/athletes/yukifartlek">running</a>.</p></div>
  },
  {
    date: '2017/11/15 – 2020/06/07',
    content: <div><p>I'm an engineer living in London <span role='img'>🇬🇧</span>.</p><p>In 2018 I raced three World Majors Marathons in a span of less than two months: <a href="https://www.strava.com/activities/1844986783/">Berlin</a>, <a href="https://www.strava.com/activities/1890384566">Chicago</a>, <a href="https://www.strava.com/activities/1946467133">New York</a>.</p><p>I <a href="https://www.linkedin.com/in/yukifartlek">work</a> for Twitter, and I'm into <a href="https://www.strava.com/athletes/yukifartlek">running</a> and <a href="https://www.goodreads.com/user/show/6328696-george-leontiev">reading</a>.</p></div>
  },
  {
    date: '2020/06/07 – 2020/08/23',
    content: <div><p>I've fled to Reykjavik <span role='img'>🇮🇸</span> for the summer to escape COVID-19.</p><p>While here, I've <a href="https://twitter.com/yukifartlek/status/1281563610758742017">cycled around Iceland</a> and <a href="https://twitter.com/yukifartlek/status/1284361299728764929">ran my first ultramarathon</a>.</p><p>Speaking of crazy things to do in Iceland, last year I became the fastest non-Icelander (and the first Ukrainian) <a href="https://twitter.com/yukifartlek/status/1126594523256090624">Landvættur</a>.</p><p>I <a href="https://www.linkedin.com/in/yukifartlek">work</a> for Twitter, and I'm into adventures – both happening <a href="https://www.strava.com/athletes/yukifartlek">in the outside world</a> as well as <a href="https://www.goodreads.com/user/show/6328696-george-leontiev">in my head</a>.</p></div>
  },
  {
    date: '2020/08/23',
    content: <div><p>I'm an engineer living in Edinburgh <span role='img'>🏴󠁧󠁢󠁳󠁣󠁴󠁿</span>.</p><p>I <a href="https://www.linkedin.com/in/yukifartlek">work</a> for Twitter, and I'm into adventures – both happening <a href="https://www.strava.com/athletes/yukifartlek">in the outside world</a> as well as <a href="https://www.goodreads.com/user/show/6328696-george-leontiev">in my head</a>.</p></div>
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
