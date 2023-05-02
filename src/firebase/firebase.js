import { initializeApp } from "firebase/app";

import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDrjMkM-jxWyUhEtW_Xx2JZQhZQe27yjgU",
  authDomain: "tienda-click-derecho.firebaseapp.com",
  projectId: "tienda-click-derecho",
  storageBucket: "tienda-click-derecho.appspot.com",
  messagingSenderId: "63102289783",
  appId: "1:63102289783:web:b965999ae12a112ee44372"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Consultar DB
const db = getFirestore()

export const createProducts = async () => {
    const query = await fetch('./json/db.json')
    const items = await query.json()

    items.forEach(async (item) => {
        await addDoc(collection(db, 'products'), {
            name: item.name,
            vendor: item.vendor,
            value: item.value,
            img: item.img,
            category: item.category,
            stock: item.stock
        })
    });
}

export const getProducts = async () => {
    const query = await getDocs(collection(db, 'products'))
    const items = query.docs.map(item => {
        return {...item.data(), id: item.id}
    })
    return items
}

export const getProduct = async (id) => {
    const query = await getDoc(doc(db, 'products', id))
    const item = { ...query.data(), id: query.id }
    return item
}

 
//Funciones para trabajar con Firebase
