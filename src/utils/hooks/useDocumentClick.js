import { useEffect } from "react";

export function useDocumentClick() {
    useEffect(() =>{
        console.log('Use Document Click')
        const handleDocumentClick = (e) => {
            console.log('Clicked Document')
        }

        document.addEventListener('click', handleDocumentClick)

        return () => {
            document.removeEventListener('click', handleDocumentClick)
        }
    })
}