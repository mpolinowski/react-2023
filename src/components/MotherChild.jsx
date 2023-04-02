// content projection
function Card(props) {
    return (
    <div className="card">
        { props.children }
    </div>
    )
}


function Image() {
    const image = { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Diana_of_Versailles.jpg/314px-Diana_of_Versailles.jpg" }
    
    return (
        
      <Card>
        <img src={ image.url } />
      </Card>
    );
  }

export default Image