import classes from "./index.module.css"
import Image from 'next/image'
import {useSelector } from "react-redux"
import { selectAllMenu } from "redux/slices/menuSlice"

const Menus = () => {
    const { menus } = useSelector(selectAllMenu) 
    
    return (
        // items are mapped from the list of menus and displayed
        // to the user.
        <div className={classes.cardContainer}>
            {
                menus.map((item:any) =>  (
                    <div key={item.userId} className={classes.foodCard}>
                        <div className={classes.cardImg}>
                            {/* <img className={classes.cardImg} src={item.img} alt="foodPicture" /> */}
                        </div>
                        
                        <div className={classes.cardItems}>
                            <p className={classes.cardTitle}>{item.name}</p>
                            <p className={classes.cardCategory}>{item.category}</p>
                            <p className={classes.cardPrice}>₦{item.price}</p>
                            <p className={classes.cardQuantity}>Quantity: <span className={classes.quantity}>{item.quantity}</span></p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Menus
