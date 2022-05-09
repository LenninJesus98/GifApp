import { useState } from 'react'
import {  FormControl, InputGroup } from 'react-bootstrap'
import { PropTypes } from "prop-types";

const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handleChange = (e) => {
        setinputValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('correcto')

        if (inputValue.trim().length > 2) {
            setCategories(categories => [inputValue,...categories ])
            setinputValue('')
        }



    }


    return (
        <>
 
                <form onSubmit={handleSubmit}>
                    <InputGroup size="sm" className="mb-3">
                        <FormControl aria-label="Small" value={inputValue} onChange={handleChange} />
                    </InputGroup>

                </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
export default AddCategory
