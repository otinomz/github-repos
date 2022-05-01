import { useState } from 'react';
import classes from './index.module.css'
import Image from "next/image"
import MenuItems from './Menus';
import AddIcon from "../../assets/add.svg"
import EmptyPage from './Empty';
import AddItems from './AddItems';
import { selectAllMenu } from "redux/slices/menuSlice"
import { useSelector } from 'react-redux';

const FoodMenu = () => {
    
    const [trigger, setTrigger] = useState(false)

    // this function actually powers the add icon button
    // it is passed to the onClick mouse event function in react
    const addItems = () => {
        setTrigger(() => !trigger)
    }

    const { menus } = useSelector(selectAllMenu) 
   
    return (        
        <>
            {/* if the length of the array is zero, return the empty page 
                where users are prompt to add items or if otherwise,
                the menu Page is actually shown to the users
             */}
            
            {   menus.length === 0 ? <EmptyPage /> : <MenuItems/>  } 
             
            {/* this is the add Icon button on the bottom page 
                when it is clicked and trigger is true, AddItems
                component (which is the popup form to add items) 
                is displayed above
            */}
            <button onClick={addItems} className={classes.add} >
                <Image src={AddIcon} alt="add items icon" />
            </button>
            
            {   trigger && <AddItems addItems={addItems}  /> }
            

        </>

    )
};

export default FoodMenu;