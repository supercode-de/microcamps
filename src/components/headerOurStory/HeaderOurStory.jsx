import "./headerOurStory.scss"

const HeaderOurStory = () => {
    return (  <header className="our-story-wrapper">
        <div className="img-sergio">
          <img src="/img/sergio03.png" alt="sergio say hi" />
        </div>
        <div className="info">
          <h1>Hey, I’m Sergio! Founder of SuperCamp</h1>
          <p>
            If you've got a couple of minutes I'd love to share the story of how
            Memorisely has grown as a bootstrapped startup. It's been an awesome
            journey as a solo founder and I couldn't have done it without the
            support of Memorisers around the world ✌️
          </p>
        </div>
      </header>
    )
}
 
export default HeaderOurStory;