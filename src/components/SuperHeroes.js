import React from "react";
import Banner from "../images/banner.png"



class SuperHeroes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loadedCharacter: false,
            name: null,
            fullName: null,
            publisher: null,
            image: null,
            height: [],
        }
    }

    
    getNewCharacter() {
        const randomNumber = Math.floor(Math.random() * 731)
        const url = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomNumber}.json`
        function CheckError(response) {
            if (response.status >= 200 && response.status <= 299) {
                return response.json()
            } else {
                throw Error(response.statusText)
            }
        }
        fetch(url) 
            .then(CheckError)
            .then(data => {
                this.setState({
                    name: data.name,
                    fullName: data.biography.fullName,
                    publisher: data.biography.publisher,
                    image: data.images.md,
                    height: data.appearance.height[1],
                    loadedCharacter: true,
                })
            })
            .catch((error) => {
                console.log(`${error} was detected`)
                this.getNewCharacter()
            })
    }


    render() {


        return (
            <div className="container">
                {
                    this.state.loadedCharacter &&
                    <div className="character">
                        <img src={this.state.image} className="character--img" alt={this.state.name} />
                        <div className="character--text">
                            <h1 className="character--text_name">
                                {this.state.name}
                            </h1>
                            <h2 className="character--text_fname">
                                {this.state.fullName}
                            </h2>
                            <p  className="character--text_height">
                                • Height: {this.state.height}
                            </p>
                            <p  className="character--text_pub">
                                • Publisher: {this.state.publisher}
                            </p>
                        </div>
                    </div>
                }
                {
                    !this.state.loadedCharacter &&
                    <img src={Banner} className="banner" alt="banner" />
                }
                <button 
                    type="button" 
                    onClick={() => this.getNewCharacter()} className="btn">
                        WHAM!!!
                </button>
            </div>
        )
    }
}

export default SuperHeroes