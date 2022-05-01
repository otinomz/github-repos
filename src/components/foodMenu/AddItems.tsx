import {useEffect, useState} from "react"
import classes from './index.module.css'
import { addMenuItems, FormInputValues } from "redux/slices/menuSlice"
import { useDispatch, useSelector} from "react-redux"
import FoodForm from "./FoodForm"
import { addFoodMenu, getFoodMenu } from "packages/api/foodmenu"
import { selectAllState } from "redux/slices/authenticationSlice"
import { IMenu } from "entities/menu"


interface AddButtonProps {
    addItems: () => void,
}


const AddItems = ({ addItems }: AddButtonProps) => {
    const [values, setValues] = useState<FormInputValues>(getFormValues);
    const {user, brandData} = useSelector(selectAllState)

    console.log("this is the vendor", brandData?._id)
    console.log(user?._id)

    function getFormValues() {
        const storedValues = localStorage.getItem('form');

        if (!storedValues)
            return {
                // userId: `${user?._id}`,
                // vendorId: `${brandData?.userId}`,
                // vendorId: "62634fe99f4e52f5608dedea" ,
                categoryId: "6253e46b64d276eab41595b6",
                name: "",
                price: "",
                description: "mangooo",
                category: "",
                currency: "NGN",
                image: "nnnn",
                quantity: "",
                isAvailable: true,
                logo: "yeah",
            };

        return JSON.parse(storedValues)
    }


    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('form', JSON.stringify(values));
    }, [values]);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {

            const data = {...values,
                userId: brandData?.userId,
                vendorId: brandData?._id,
                price : Number(values.price),
                quantity : Number(values.quantity),
            }
            
            console.log({data})

            const resp = await addFoodMenu(data)

            alert("food submitted")
            console.log("resp is", resp)

            dispatch(addMenuItems(resp))
            addItems()
            localStorage.removeItem('form')

            const vendorId = data.vendorId
            await getFoodMenu(vendorId)

        } catch (e: any) {
            alert(e.message)
        }

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setValues((values) => ({
			...values,
			[e.target.name]: e.target.value,
		}))
	}


    const handleClick = (e: React.MouseEvent<HTMLElement> ) => {
        e.stopPropagation()
    }


    return (
        <div className={classes.popup} onClick = {addItems}>

            {/* this component contains the form fields for the popup food-menu */}
            <FoodForm
                handleSubmit={handleSubmit}
                handleClick={handleClick}
                handleChange={handleChange}
                values={values}
            />


        </div>
    )
}

export default AddItems
