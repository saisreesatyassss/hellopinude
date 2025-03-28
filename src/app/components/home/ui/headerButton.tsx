'use client'

import React, { useState,ReactNode } from 'react';
import Dialog from '../QrCodePopup';
import axios from 'axios';
interface HeaderButtonProps {
    children: ReactNode;
    className?: string; // optional, if className might not always be passed
  }


  export default function HeaderButton({ children, className }: HeaderButtonProps) {



    const [isDialogOpen, setDialogOpen] = useState(false);

    const closeDialog = () => setDialogOpen(false);

    const handleClick = async () => {
        try {
              setDialogOpen(true);  
            // Sending the POST request to track button click analytics
            await axios.post('https://api.reportzai.com/api/call-analytics');
            // // alert('Button click recorded successfully!');
  
        } catch (error) {
            // console.error('Error recording button click:', error);
            // alert('Failed to record button click');
        }
    };

    return (
        <>
            {/* <a
                onClick={handleClick}
                onTouchStart={handleClick}  
                className={className}
                >
                 {children}
                </a> */}
          
          <button onClick={handleClick} className={className}
          data-umami-event="miss call button" >
            {children}
            </button>
            {/* Popup Dialog */}
            {isDialogOpen && <Dialog isOpen={isDialogOpen} onClose={closeDialog} />}
        </>
    );
}
