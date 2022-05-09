import React from 'react'
import { Card } from 'react-bootstrap'

export const GifGridItem = ({url, title}) => {
    // console.log(img)
    return (
        <Card className="p-2 mx-2 my-2 animate__animated pulse" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}
