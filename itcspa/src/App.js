import itcImg from './itc.png';
import './App.css';

const iWords = [{"word":"incoherent","score":90801,"tags":["syn","adj"]},{"word":"illogical","score":74820,"tags":["adj"]},{"word":"insane","score":71617,"tags":["adj"]},{"word":"irresponsible","score":70271,"tags":["adj"]},{"word":"impulsive","score":70022,"tags":["adj"]},{"word":"incomprehensible","score":68452,"tags":["adj"]},{"word":"inadvisable","score":64213,"tags":["adj"]},{"word":"inequitable","score":63119,"tags":["adj"]},{"word":"ill-considered","score":51225,"tags":["adj"]},{"word":"idiotic","score":51213,"tags":["adj"]},{"word":"inexplicable","score":51192,"tags":["adj"]},{"word":"indefensible","score":51186,"tags":["adj"]},{"word":"inefficacious","score":51172,"tags":["adj"]},{"word":"illiberal","score":51169,"tags":["adj"]},{"word":"imprudent","score":51167,"tags":["adj"]},{"word":"intemperate","score":51165,"tags":["adj"]},{"word":"ignorant","score":51161,"tags":["adj"]},{"word":"infantile","score":51142,"tags":["adj"]},{"word":"irreligious","score":51137,"tags":["adj"]},{"word":"immoral","score":51136,"tags":["adj"]},{"word":"implausible","score":51135,"tags":["adj"]},{"word":"inapt","score":51126,"tags":["adj"]},{"word":"irrational number","score":51117,"tags":["adj"]},{"word":"ipsedixitism","score":51111,"tags":["adj"]},{"word":"ignorantness","score":51110,"tags":["adj"]},{"word":"idiotish","score":51108,"tags":["adj"]},{"word":"insipience","score":51102,"tags":["adj"]},{"word":"ignorantism","score":51093,"tags":["adj"]},{"word":"insipient","score":51087,"tags":["adj"]},{"word":"ideophobia","score":51084,"tags":["adj"]},{"word":"iracund","score":51075,"tags":["adj"]},{"word":"ideas","score":41398,"tags":["n"]},{"word":"impulses","score":41396,"tags":["n"]},{"word":"impulse","score":41382,"tags":["n"]},{"word":"instincts","score":41333,"tags":["n"]},{"word":"instinct","score":41330,"tags":["n"]},{"word":"ism","score":41327,"tags":["n"]},{"word":"intuition","score":41289,"tags":["n"]},{"word":"infatuate","score":6424,"tags":["v"]},{"word":"incommensurable","score":6364,"tags":["adj"]},{"word":"inconsequential","score":6364,"tags":["adj"]},{"word":"infatuated","score":6364,"tags":["adj"]},{"word":"insensate","score":6364,"tags":["adj"]},{"word":"irrational impulse","score":6364,"tags":["n"]},{"word":"irrationalism","score":6364,"tags":["n"]},{"word":"insanity","score":5304,"tags":["n"]},{"word":"irony","score":5304,"tags":["n"]},{"word":"irrationalness","score":5304},{"word":"ignorance","score":5060,"tags":["n"]},{"word":"instinctive","score":5060,"tags":["adj"]}]
const tWords = [{"word":"tragic","score":48751,"tags":["adj"]},{"word":"terrifying","score":48289,"tags":["adj"]},{"word":"terrific","score":46769,"tags":["adj"]},{"word":"tough","score":45063,"tags":["adj"]},{"word":"tremendous","score":43955,"tags":["adj"]},{"word":"tired","score":40096,"tags":["adj"]},{"word":"terrorist","score":35934,"tags":["adj"]},{"word":"traumatic","score":30979,"tags":["adj"]},{"word":"tragic flaw","score":30952,"tags":["adj"]},{"word":"thing","score":21415,"tags":["n"]},{"word":"things","score":21413,"tags":["n"]},{"word":"tragedy","score":21402,"tags":["n"]},{"word":"truth","score":21385,"tags":["n"]},{"word":"toll","score":21382,"tags":["n"]},{"word":"trouble","score":21375,"tags":["n"]},{"word":"temper","score":21362,"tags":["n"]},{"word":"twos","score":21341,"tags":["n"]},{"word":"thirst","score":21297,"tags":["n"]},{"word":"temptation","score":21282,"tags":["n"]},{"word":"torture","score":21262,"tags":["n"]},{"word":"tortures","score":21254,"tags":["n"]},{"word":"tragedies","score":21250,"tags":["n"]},{"word":"thunderstorm","score":21202,"tags":["n"]},{"word":"trap","score":21178,"tags":["n"]},{"word":"tempest","score":21164,"tags":["n"]},{"word":"tasted","score":21154,"tags":["v"]},{"word":"tastes","score":21149,"tags":["v"]},{"word":"taste","score":21146,"tags":["v"]},{"word":"trembling","score":21140,"tags":["v"]},{"word":"think","score":11420,"tags":["v"]},{"word":"time","score":11112,"tags":["n"]},{"word":"throne","score":11098,"tags":["n"]},{"word":"times","score":11096,"tags":["n"]},{"word":"treblinka","score":11093,"tags":["n","prop"]},{"word":"two","score":6424,"tags":["n","adj"]},{"word":"tantrum","score":6364,"tags":["n"]},{"word":"terrify","score":6364,"tags":["v"]},{"word":"thick","score":6364,"tags":["adj"]},{"word":"thunderbolt","score":6364,"tags":["n"]},{"word":"thunderstrike","score":6364},{"word":"thunderstruck","score":6364,"tags":["adj"]},{"word":"tnt","score":6364,"tags":["n","prop"]},{"word":"toad","score":6364,"tags":["n"]},{"word":"tot","score":6364,"tags":["n"]},{"word":"tragical","score":6364,"tags":["adj"]},{"word":"tsar","score":6364,"tags":["n"]},{"word":"twp","score":6364,"tags":["n","prop"]},{"word":"tyrant","score":6364,"tags":["n"]},{"word":"taunt","score":5304,"tags":["n","v"]},{"word":"terrifically","score":5304,"tags":["adv"]}]
const cWords = [{"word":"children","score":47233,"tags":["n"]},{"word":"childrens","score":24835,"tags":["n"]},{"word":"caregivers","score":24811,"tags":["n"]},{"word":"crib","score":24806,"tags":["n"]},{"word":"childcare","score":24775,"tags":["n"]},{"word":"cria","score":24763,"tags":["n"]},{"word":"care","score":14965,"tags":["v","n"]},{"word":"caring","score":14963,"tags":["v"]},{"word":"climb","score":14955,"tags":["v"]},{"word":"clinging","score":14952,"tags":["v"]},{"word":"chasing","score":14949,"tags":["v"]},{"word":"crying","score":14943,"tags":["v"]},{"word":"comprehend","score":14942,"tags":["v"]},{"word":"cry","score":14940,"tags":["v"]},{"word":"consume","score":14939,"tags":["v"]},{"word":"curious","score":14924,"tags":["adj"]},{"word":"chinese","score":14922,"tags":["adj","prop"]},{"word":"checklist","score":14889,"tags":["n"]},{"word":"crawlers","score":14865,"tags":["n"]},{"word":"campers","tags":["n"]},{"word":"chil","tags":["n"]},{"word":"child","tags":["n"]},{"word":"crayon","tags":["n"]},{"word":"cub","tags":["n"]}]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={itcImg} className="App-logo" alt="logo" />
        <p>
          {iWords[Math.floor(Math.random() * iWords.length)].word} {tWords[Math.floor(Math.random() * tWords.length)].word} {cWords[Math.floor(Math.random() * cWords.length)].word}
        </p>
      </header>
    </div>
  );
}

export default App;
