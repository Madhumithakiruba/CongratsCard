const element = (
  // Write your code here.
  <div className="bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="container">
      <div className="img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="image"
        />
        <div className="content-container">
          <h1 className="title">Kiran V</h1>
          <p className="para">
            Vishnu Institute of Computer Education and technology, Bhimavaram
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
            className="image"
          />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
