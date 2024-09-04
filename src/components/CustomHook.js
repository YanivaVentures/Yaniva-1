import { useEffect } from 'react';

export const useDocTitle = (title) => {
    useEffect(() => {
        const logo = '🚀 '; // You can change this to any appropriate emoji or character
        document.title = `${logo}${title}`;
    }, [title]);
};