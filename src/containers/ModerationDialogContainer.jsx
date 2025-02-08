import React, { useState } from 'react';
import ModerationDialogCard from '../components/ModerationDialogCard';

function ModerationDialogContainer({ isVisible, onClose, onConfirm, onReject }) {
    return (
        <>
            {isVisible && (
                <ModerationDialogCard 
                    onClose={onClose} 
                    onConfirm={onConfirm} 
                    onReject={onReject} 
                />
            )}
        </>
    );
}

export default ModerationDialogContainer;
