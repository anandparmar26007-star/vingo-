import { useEffect } from 'react'
import { serverUrl } from "../src/App";
import {useDispatch} from 'react-redux'
//import { current } from '@reduxjs/toolkit'
//import { linkWithCredential } from 'firebase/auth'//
import axios from 'axios'
//import { useAsyncError } from 'react-router-dom'
import { setMyShopData } from '../src/redux/ownerSlice'

function useGetMyShop(){
    const dispatch=useDispatch()
    useEffect(()=>{
        const fetchShop=async()=>{
            try{
               const result = await axios.get(
  `${serverUrl}/api/shop/getmy`,
  {
    withCredentials: true,
  }
);
                dispatch(setMyShopData(result.data))



            }catch(error){
                console.log(error)

            }
        }
        fetchShop()
    },[dispatch])
}
export default useGetMyShop