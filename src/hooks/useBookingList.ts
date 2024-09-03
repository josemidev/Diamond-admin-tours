import { useAuthorizationState } from "@/store/authorization";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { io } from "socket.io-client";


const URL = 'https://tours-be.fly.dev/api/v1/ws/booking'
const access_token = useAuthorizationState.getState().access_token;


export default function useReactQuerySubscription() {
  const queryClient = useQueryClient()
  React.useEffect(() => {
    const socket = io(URL, {
      autoConnect: true,
      extraHeaders: {
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`
      }
      
    });

    socket.connect()
    socket.on('update', (data: unknown) => {  
      console.log("🚀 ~ React.useEffect ~ data:", data);
    })

    return () => {
      socket.off('update')
    }
  }, [queryClient])
}