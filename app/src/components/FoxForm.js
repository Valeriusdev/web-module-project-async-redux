import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getFoxes } from  '../actions';

const FoxForm = props => {

    let handleFetch = (e) => {
        e.preventDefault();
        props.getFoxes();
    }


    return(
        <Fragment>
            <h2> Click the button to get foxes </h2>
          
          {props.isFetchingData ? (
              <div className='loading'> . . . fetching foxes   </div>
          ) : (
            <button onClick={handleFetch} className = 'btn'> Foxes Here </button>

          )}       
        
        

        </Fragment>
    )
}


const mapStatetoProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
  };
};



export default connect(mapStatetoProps, { getFoxes })(FoxForm);