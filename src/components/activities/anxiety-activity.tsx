"use client"

import {useState} from "react"
import {motion} from "framer-motion"
import {Gamepad2, Flower2, Wind, TreePine, Waves, Music2} from "lucide-react"
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter} from "@/components/ui/dialog"
import { BreathingActivity } from "./breathing-activity"
import { ZenGarden } from "./zen-garden"
import { OceanWaves } from "./ocean-waves"
import { ForestActivity } from "./forest-activity"

const games = [
  {
    id: "breathing",
    title: "Breathing Patterns",
    description: "Follow calming breathing exercises with visual guidance",
    icon: Wind,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    duration: "5 mins",
  },
  {
    id: "garden",
    title: "Zen Garden",
    description: "Create and maintain your digital peaceful space",
    icon: Flower2,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    duration: "10 mins",
  },
  {
    id: "forest",
    title: "Mindful Forest",
    description: "Take a peaceful walk through a virtual forest",
    icon: TreePine,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    duration: "15 mins",
  },
  {
    id: "waves",
    title: "Ocean Waves",
    description: "Match your breath with gentle ocean waves",
    icon: Waves,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    duration: "8 mins",
  },
];

interface AnxietyGamesProps {
  onGamePlayed?: (gameName: string, description: string) => Promise<void>;
}

export const AnxietyActivity = ({onGamePlayed}: AnxietyGamesProps)=>{
  const [showGame, setShowGame] = useState(false);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const handleGmaeStart = async(gameId:string)=>{
    if(onGamePlayed){
        try{
            await onGamePlayed(
                gameId,
                games.find((g)=>g.id === gameId)?. description || ""
            );
        } catch(error){
            console.error("Error logging game activity:", error)
        }
    }
  }

const renderGame = ()=>{
    switch(selectedGame){
        case "breathing":
            return <BreathingActivity />
        case "garden":
            return <ZenGarden />
        case "forest":
            return <ForestActivity />
        case "waves":
            return <OceanWaves />
        default:
            return null;
    }
}

return(
        <>
         <Card className="border-primary/10">
         <CardHeader>
          <CardTitle className="text-xl font-semibold flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-primary" />
            Anxiety Relief Activities
          </CardTitle>
          <CardDescription>
            Interactive exercises to help reduce stress and anxiety
          </CardDescription>
         </CardHeader>
         </Card>       
        </>
)
}