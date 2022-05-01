import React from 'react';
import CatCard1 from './images/cat_card1.jpeg'
import Phone from './images/phone-call.png'
import Message from './images/comments.png'
import contact from './contact.css';
import binance from './images/binance.png'
import objects from './Objects.js'

const Contact = () => {
    // let names=['Ivan 1','Nazar 2','Roman 3'];
    // function newArray(){
    //     let newNames=`Names ${names.length+1}`;
    //     names.push(newNames);
    //     console.log(names)
    // }
    let [memeImage,setArray]=React.useState("")
    // let thingsArray=names.map((name)=> <p>{name}</p>);
    function getArray(){
       let memesArray=objects.data.memes;
       let randomNumber= Math.floor(Math.random()* memesArray.length);
       setArray(memesArray[randomNumber].url);

    }
    function onMouseOver(){
        console.log('On Mouse')
    }
    return (
        <main>
            <form className={'form'}>
                <div className={'form--inputs'}>
                    <input className={'form--input'} type='text' placeholder={'Shut Up'} required/>
                    <input className={'form--input'} type='text' placeholder={'And take my money'} required/>
                </div>
                <div>
                    <button onClick={getArray} className={'form--button'}>Get a new meme image</button>
                </div>
                <div className={'binance--icon--position'} onMouseOver={onMouseOver}>
                    <img src={binance} className={'binance--icon'} alt={'binance'}/>
                </div>
                <img src={memeImage} className={'meme--image'}/>
            </form>
        </main>
    );
};

export default Contact;