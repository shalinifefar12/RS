import React from "react";
import ReactDOM from "react-dom";
import './rs.css';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import gif from './images/gif1.gif';
import question from './images/propose1.gif';


class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false}
    }

    QuestionClicked(props) {
        this.setState({show: true});
    }

    render() {
        return <div>
            <div className="Happy">
                <h1>Happy Anniversary Love</h1>
                <img src={gif} alt="loading...."/>
            </div>

            <div className="Ekvis">
                <h1>The day when it started..!! </h1>
                <h2>On 21st January 2014, I took the best decision to say "I Love you" to you. </h2>
                   <h2> I did not know where our relationship will go but at that time I just listened to my heart.
                </h2>
            </div>

            <div className="FirstYear"> 
            <h1>The Firsts...!!!!</h1>
                <h2>The first year that we spent together was very special and will be special forever. </h2>
                <h2>We had our firsts..!!</h2>
                <h2>First HUG, first KISS, first TOUCH, first FIGHT...</h2>
                <h2>I don't know when I felt that I want to spend rest of my life with you and you felt that too.</h2>
            </div>

            <div className="LongDist">
                <h1>The Long Distance</h1>
                <h2>Then we were in long distance relationship.</h2>
                <h2>That time was difficult for both of us and for our relationship.</h2>
                <h2>We learned so much, somwhere our relationship became weak and at the same time it became strong too.</h2>
            </div>

            <div className="LiveIn">
                <h1>The Live-In phase</h1>
                <h2>A new phase added to our relationship - live-in.</h2>
                <h2>It was totally new phase. It felt like it was new birth of our relationship.</h2>
                <h2>We fully enjoyed this new phase.</h2>
            </div>

            <div className="final">
                <h1>The ups and downs</h1>
                <h2>In these 6 years, there were many ups and downs in our relationship.</h2>
                <h2>I have done many mistakes but I will not do those mistakes again.</h2>
                <h2>I know I am not perfect. But I will try my best to make our relationship perfect.</h2>
                <h2>You make me happier always.!! I can not be more happier with anyone else except you.</h2>

                <button onClick={this.QuestionClicked.bind(this)} >Click me..!!</button>
                <br></br>
                {
                    this.state.show ?
                    <div>
                        <br></br>
                        <h1>Will you marry me??????</h1>
                        <img src={question}/>
                    </div> 
                    :
                    <div> </div>
                }
                
            </div>
        </div>
    }
}

ReactDOM.render(<Portfolio />, document.getElementById("root"));
