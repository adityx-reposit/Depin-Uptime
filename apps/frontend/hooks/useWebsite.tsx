"use client";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_BACKEND_URL } from "../config";
import { Token } from "@clerk/nextjs/server";

interface Website {
    id:string;
    name:string;
    url:string;
     ticks:{
        id:string;
        createdAt:string;
        status:string;
        latency:number;
     }[];


    }



export default function useWebsite() {


   async function refreshWebsites() {
        const {getToken}=useAuth();
        const token = await getToken();
        const [websites,setWebsites]=useState<Website[]>([]);
         
          const response = await axios.get(`${API_BACKEND_URL}/api/v1/websites`,{
            headers:{
               Authorization:token,
            },
            });
        setWebsites[response.data.websites];
    }

   useEffect(() => {
     
        refreshWebsites();

        const interval = setInterval(() => {
          refreshWebsites();
        }, 1000*60*1);
      return () => clearInterval(interval);

    }, []);

}