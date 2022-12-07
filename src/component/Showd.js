const Showd = (props) => {
     return (<>
          <div className="profile">
               <img src={require('../public/uploads/' + props.data.Profile)} atr="no" width={100} height="100"></img>
               <h3 style={{ "textAlign": "center" }}>Painter Name={props.data.FirstName}</h3>
          </div>
     </>)
}

export default Showd;