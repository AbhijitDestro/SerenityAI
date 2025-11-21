"use client"

import {useState, useEffect} from "react"
import {motion} from "framer-motion"
import {Bell, User} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Container} from "@/components/ui/container"


export default function DashboardPage(){

    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(()=>{
      const timer= setInterval(()=>setCurrentTime(new Date()), 1000);
      return ()=>{
        clearInterval(timer)
      }
    },[]);

    return(
        <div className="min-h-screen bg-background">
       <Container className="pt-20 pb-8 space-y-6">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-2"
          >
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, {user?.name || "there"}
            </h1>
            <p className="text-muted-foreground">
              {currentTime.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
        </Container>
        </div>
    )
}