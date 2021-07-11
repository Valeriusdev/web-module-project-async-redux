import React, { Fragment }  from 'react';
import { connect } from 'react-redux';

const FoxList = props => {
    return(
      <Fragment>
        {props.error? (
           <div className='alert'> {props.error}  </div> 
        ) : (
           
           <div className='card all-center'>
               <img src= {props.foxes.image} alt = 'fox or foxes' /> 
               <p className = 'btn'>
                   <a href= {props.foxes.link}>Image Link</a>
               </p>
           </div>
        )}
      </Fragment>
    );
};

const mapStatetoProps = (state) => {
    return {
        foxes: state.foxes,
        error: state.error,
    };
};

export default connect (mapStatetoProps, {})(FoxList);