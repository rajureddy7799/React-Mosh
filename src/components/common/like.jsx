import React from 'react';

const Like = (props) => {
    
    let classes = 'fa fa-heart-o'
    if(props.liked === true)
    classes = 'fa fa-heart'

    return ( 
        <i onClick={props.onLikeClick} className={classes} style={{cursor:'pointer'}}aria-hidden="true"></i>
     );

}
 

export default Like;