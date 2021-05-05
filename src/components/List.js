import React, { useState } from 'react';

const List = props => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  const [count, setCount] = useState([]);

  console.log("count",count)
  
  return (
    <ul>
   
      <h2 className="list-head">Your virtual shopping assistant
      
    
     <a href='/cart'> <img className="cart_img" src="https://cdn.icon-icons.com/icons2/1369/PNG/512/-shopping-cart_90604.png" /> </a>
      </h2>
   
      {repos.map(repo => {
        return (
      
      
          <div key={repo.id} className="gallery">
            <div className="repo-title">{repo.title} </div>
            <span className="repo-text">{repo.catogory} </span>
            <div className="main__div">
            <div >
              <img className="div_img"
                src={repo.image}
              ></img>
            </div>
            
            <span data-text={repo.description} className="tooltip">Hover </span>
            <div>
  <ul className="list">
  <li>   </li>
  <br />
    <li>{repo.price}</li>
    <addCart title = {repo.title} price = {repo.price}/>
    <li><a href="#" class="button" onClick={() => setCount([...count,{"title":repo.title , "price" : repo.price}])}>Add to Cart</a></li>
  </ul>
</div>
</div>

          </div>
        );
      })}
    </ul>
  );
};
export default List;
