import React from 'react'
import EmptyIcon from "../../assets/emptyIcon.svg"
import classes from './index.module.css'
import Image from "next/image"

const EmptyPage = () => {
    return (
        // this page is returned if the items on the array list are actually empty
        // it is prompt for users to add items to the menu
        // by clicking the add icon button
        <div className={classes.emptyContainer}>
            
            {/* this displays the empty image icon */}
            <div className={classes.empty}>
                <Image src={EmptyIcon} alt="empty field icon" />
            </div>

            <h3 className={classes.emptyTitle}>Empty Menu</h3>
            <p className={classes.emptyText}>
                You currently do not have an item on your menu. Tap on the icon below to add.
            </p>
        </div>   
    )
}

export default EmptyPage