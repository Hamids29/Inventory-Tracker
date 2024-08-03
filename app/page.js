'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { Box, Typography } from "@mui/material";
import { firestore } from "@/firebase";

export default function Home() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')

  const updateInventory = async () =>{
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc)=> {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      })
    })
    setInventory(inventoryList)
    console.log(inventoryList)
    }
    useEffect(() =>{
      updateInventory()
    }, [])
  return(
    //hi
   <Box> 
   <Typography variant = "h1">Inventory Management</Typography>
   {
    inventory.forEach((item) =>{
      console.log(item)
      return(
      <Box>
      {item.name}
      {item.count}
      </Box>)
    })
   }
  </Box>
  )
}