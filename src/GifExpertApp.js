import { useState } from "react";
import { Container } from "react-bootstrap";
import React from 'react';
import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'Hunter'])
    // }

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    return (
        <>
            <Container>

                <h2>GifExpertApp</h2>
                <hr />
                {/* agregando input */}
                <AddCategory setCategories={setCategories} />
                {/* lista de  categories */}
                <ol>
                    {
                        categories.map(category => (
                            <GifGrid
                                category={category} // es uno de las props
                                key={category} //Clave unica
                            />


                        ))
                    }
                </ol >
            </Container>
        </>
    )
}

export default GifExpertApp

