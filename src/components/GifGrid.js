import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { GifGridItem } from './GifGridItem'
// import { GetGifGrid } from './helpers/GetGifGrid'
import { useFetchGifs } from './hooks/useFetchGifs'

export const GifGrid = ({ category }) => { // dentro del paramentro esta el props ahorita esta destructurada
    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     GetGifGrid(category).then(setImages)

    // }, [category])

    // console.log(images)

    const {data:images, loading} = useFetchGifs(category)

    return (

        <>
            {loading && <p className='animate__animated animate__flash'>cargando...</p>}
            <h3 className='animate__animated animate__bounceIn'>{category}</h3>
            <Container className="d-grid gap-3 mx-auto" >
                <Row className="p-2">

                    {
                        images.map(img => (
                            <GifGridItem
                                // img={img} // es uno de las props
                                {...img} //tambien se puede usar el operador spread
                                key={img.id} /> // key debe se unica es necesario poner su atributo id o clave unica
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}
