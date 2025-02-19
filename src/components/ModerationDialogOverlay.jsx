import ModerationDialogCard from './ModerationDialogCard';

function ModerationDialogOverlay({ isVisible, onClose, onConfirm, onReject }) {
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

export default ModerationDialogOverlay;
