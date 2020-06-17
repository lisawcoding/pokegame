import React from 'react';

    const music='<iframe width="0" height="0" src="https://www.youtube.com/embed/vX1xq4Ud2z8?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

    const Music=()=>{
        return(
            <div dangerouslySetInnerHTML={{ __html: music}}></div>
        )
    }


    export default Music;
    
    
        
    