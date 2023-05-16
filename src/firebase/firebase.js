import { initializeApp } from "firebase/app";

import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY, // key escondida en Vercel
  authDomain: "tienda-click-derecho.firebaseapp.com",
  projectId: "tienda-click-derecho",
  storageBucket: "tienda-click-derecho.appspot.com",
  messagingSenderId: "63102289783",
  appId: "1:63102289783:web:b965999ae12a112ee44372"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export const initDB = async () => { // primera inicializacion, si ya existe la base de datos no hay que llamar a esta funcion o se duplicaran los productos.
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
    const products = query.docs.map(item => {
        return {...item.data(), id: item.id}
    })
    return products
}

export const getProduct = async (id) => {
    const query = await getDoc(doc(db, 'products', id))
    const product = { ...query.data(), id: query.id }
    return product
}

export const createOrder = async (client, total, cart, date) => {
    const order = await addDoc(collection(db, 'orders'), {
        client: client,
        items: cart,
        total: total,
        date: date
    })
    return order
}

export const getOrder = async (id) => {
    const query = await getDoc(doc(db, 'orders', id))
    const order = { ...query.data(), orderID: id}
    return order
}

export const updateProduct = async (id, info) => {
    await updateDoc(doc(db, 'products', id), info)
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(db, 'products', id))
}