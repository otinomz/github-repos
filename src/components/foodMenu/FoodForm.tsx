import React, { useState } from 'react'
import classes from "./index.module.css"
import AddButton from "../../assets/camera.svg"
import Image from 'next/image'
import {FormInputValues, getCategories, updateCategories} from 'redux/slices/menuSlice'
import {fetchAllCategories, fetchCategories} from "../../packages/api/menu";
import {useDispatch} from "react-redux";

interface FoodFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>)=> void,
    handleClick: (e: React.MouseEvent<HTMLElement> )=> void,
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> void,
    values: FormInputValues,
}


const FoodForm = ({
        handleSubmit,
        handleClick,
        handleChange,
        values,
    }: FoodFormProps) => {


    const dispatch = useDispatch();

    const [category, setCategory] = useState( "")

    const storeCategory = (event:any) => {
        setCategory(event.target.value);
    };

    const handleCategory = async (e: any) => {
        e.preventDefault()

       // fetch from endpoint
       const categories =  await fetchAllCategories()
        console.log({categories})

        //save to redux
        dispatch(updateCategories(categories))

    }

    return (
        <>



            {/* // this is actually rendering the forms needed for adding
            // items to the food menus */}
        <form className={classes.popupItem} onSubmit={handleSubmit} onClick={handleClick}>

                {/* this form is separate from the down one */}
                <h2>Form one</h2>
            <form className={classes.categoryForm} onSubmit={handleCategory}>
                <div className={classes.inputSection}>
                    <p>Name of Category:</p>
                    <input
                        required
                        type="text"
                        placeholder="create Category"
                        onChange={storeCategory}
                        value={category}
                    />
                </div>

                <button onClick={handleCategory} className="btn" >
                    <p>Create Catgeory</p>
                </button>

            </form>



                <h3>FOrm two</h3>
            <h5>Add Food Item To Menu</h5>

            <div className={classes.inputSection}>
                <p>Name:</p>
                <input
                    required
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Rice and chicken"
                    onChange={handleChange}
                    value={values.name}
                />
            </div>

            <div className={classes.inputSection}>
                <p>Category:</p>
                <select
                    required
                    className={classes.select}
                    name="category"
                    id="category"
                    // @ts-ignore
                    onChange={handleChange}
                    value={values.category}
                >
                    <option className={classes.option} value="African">African</option>
                    <option className={classes.option} value="Snacks">Snacks</option>
                    <option className={classes.option} value="Drinks">Drinks</option>
                    <option className={classes.option} value="Veggies">Veggies</option>
                </select>
            </div>

            <div className={classes.inputSection}>
                <p>Price:</p>
                <input
                    required
                    type="number"
                    name="price"
                    id="price"
                    placeholder="₦4,500"
                    onChange={handleChange}
                    value={values.price}
                />
            </div>

            <div className={classes.inputSection}>
                <p>Quantity:</p>
                <input
                    required
                    type="number"
                    name="quantity"
                    id="price"
                    placeholder="no of items"
                    onChange={handleChange}
                    value={values.quantity}
                />
            </div>

            <div className={classes.uploadSection}>
                <p>Add image of Dish</p>
                <label className={classes.label}>
                    <Image src={AddButton} alt="add-button" />
                    <input id="file-upload"  type="file" style={{display:'none'}}/>
                </label>
            </div>

            <button type="submit" className="btn" >
                <p>Add Food</p>
            </button>

            <p className={classes.footer}>
                Trofira {(new Date().getFullYear())}
            </p>
            </form>
        </>
    )
}

export default FoodForm
