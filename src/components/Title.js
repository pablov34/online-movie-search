import React from 'react'

export const Title = function Title(props)
{
    return(
    <h1 className="title">{props.children}</h1>
    )
}

//<Title title='Search Movies' /> uso de prop title
//<Title>Search Movies</Title>    uso de prop especial children

//export default Title