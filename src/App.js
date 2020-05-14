import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <article className='bb' data-name="article-full-bleed-background">
        <div className="cf" style={{background: 'url(https://preview.redd.it/f0mpjw4ddzv41.png?width=640&crop=smart&auto=webp&s=8b864c269c99f14e65d2c5aa71b9bb08b3c91600) no-repeat center center fixed', backgroundSize: 'cover'}}>
          <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
            <header className="bb b--black-70 pv4">
              <h1 className="f-headline lh-solid fw7 ttu tracked mt0 mb3 times">Prasat Suor Prat</h1>
              <h4 className="f3 fw4 i lh-title mt0">Siem Reap, Cambodia</h4>
            </header>
            <section className="pt5 pb4">
              <p className="times lh-copy measure f4 mt0">
                Prasat Suor Prat (Khmer: ប្រាសាទសួព្រ័ត) is a series of twelve towers spanne
                north to south lining the eastern side of royal square in Angkor Thom,
                near the town of Siem Reap, Cambodia. The towers are made from rugged
                laterite and sandstone. The towers are located right in front of
                Terrace of the Elephants and Terrace of the Leper King, flanking the
                start of the road leading east to the Victory Gate, on either side of
                which they are symmetrically arranged. Their function remains unknown.
              </p>
            </section>
          </div>
        </div>
      </article>
      <div className='cf fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times'>
        <p className='times lh-copy measure f4 mt0'>
          Following Geralt of Rivia's battle with a kikimora 
          in 1231, 
          he enters the town of Blaviken and 
          meets Renfri,
          a cursed princess-turned-bandit hunted by 
          the wizard Stregobor, 
          who thinks her evil for her birth during 
          an eclipse. 
          Stregobor lures Geralt to his hideout seeking to hire him to 
          kill Renfri, but Geralt refuses. 
          Renfri later offers Geralt a counter-proposal, 
          but he refuses with an ultimatum: leave or die.
          She feigns agreement, but upon waking up the next morning, 
          Geralt realizes Renfri will not stop until Stregobor is dead, 
          and he rushes to stop her. 
          After killing her men, he fights and fatally wounds Renfri, 
          and her dying words told him of a girl in the forest 
          who is his destiny forever. 
          Stregobor arrives to take Renfri's body for autopsy. 
          When Geralt opposes, 
          the townsfolk force him to leave, urged on by Stregobor. 
          In 1263, The kingdom of Cintra is conquered by southern neighbor Nilfgaard, 
          and Princess Cirilla, also known as Ciri,
          is sent away by her grandmother, Queen Calanthe, 
          to escape and find Geralt. Cirilla is captured by Nilfgaardian officer Cahir, 
          but the sight of the burning city and castle trigger her powers,
          allowing her to escape.
        </p>  
      </div>
    </div>
  );
}

export default App;
