import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config'

const useFireStore = (collection, condition) => {
    const [ documents, setDocuments ] = useState([]);

    React.useEffect(() => {

        let collectionRef = db.collection(collection).orderBy('createdAt');

        if (condition) {
            if (!condition.compareValue || !condition.compareValue.length) {
                return;
            }
            collectionRef = collectionRef.where(
                condition.filedName, 
                condition.operator, 
                condition.compareValue
            );
        }


        const unsubcribed = collectionRef.onSnapshot((snapshot) => {
            const documents = snapshot.docs.map(doc => ({
                ...doc.data,
                id: doc.id
            }))

            setDocuments(documents);
        });

        return unsubcribed;
    }, [collection, condition]);

    return documents;
}

export default useFireStore;
