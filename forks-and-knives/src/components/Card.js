import React from 'react';

const Card = props => (
    <div className=" dib ma3 br2 ba dark-gray b--washed-green mv4 w-100 w-50-m w-25-l mw5 shadow-3">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1280px-Good_Food_Display_-_NCI_Visuals_Online.jpg " alt="kitdishty"></img>
        <div className="pa2 ph3-ns pb3-ns">
        <div className=" dt w-100 mt1">
          <div className="dtc">
            <h1 className=" tc f5 f4-ns mv0">Pasta</h1>
          </div>
       
        </div>
        <p className="f6 lh-copy measure mt2 mid-gray">
          Yummy tasty good for nothing pasta. We noodles
        </p>
        <label  className="ma3">❤</label>
        <button className="f6 grow ma1 br-pill pv2 white bg-dark-green ">Ingredients</button>
        </div>
    </div>
);


export default Card;