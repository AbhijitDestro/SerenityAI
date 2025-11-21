"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Brain,
  TrendingUp,
  Calendar,
  Activity,
  Medal,
  Target,
  Smile,
  Frown,
  Meh,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const moodData = {
  daily: [
    {
      day: "Mon",
      value: 65,
      activities: [
        { name: "Exercise", duration: "30min", impact: "positive" },
        { name: "Meditation", duration: "15min", impact: "positive" },
      ],
      energy: 70,
      sleep: 7.5,
    },
    {
      day: "Tue",
      value: 75,
      activities: [
        { name: "Therapy", duration: "1hr", impact: "positive" },
        { name: "Reading", duration: "45min", impact: "neutral" },
      ],
      energy: 75,
      sleep: 8,
    },
    // ... other days with similar structure
  ],
  weekly: [
    { week: 1, average: 72, peak: 85, low: 60 },
    { week: 2, average: 78, peak: 90, low: 65 },
    { week: 3, average: 75, peak: 88, low: 62 },
    { week: 4, average: 82, peak: 95, low: 70 },
  ],
  monthly: [
    { month: 1, average: 75, peak: 88, low: 62 },
    { month: 2, average: 82, peak: 95, low: 70 },
    { month: 3, average: 78, peak: 90, low: 65 },
  ],
  insights: [
    {
      title: "Weekly Progress",
      description: "Your mood stability has improved by 15% this week",
      trend: "up",
    },
    {
      title: "Activity Impact",
      description: "Exercise and meditation show the most positive impact",
      trend: "up",
    },
  ],
};

const getMoodEmoji = (value: number) => {
  if (value >= 80) return { icon: Smile, color: "text-green-500" };
  if (value >= 60) return { icon: Meh, color: "text-yellow-500" };
  return { icon: Frown, color: "text-red-500" };
};

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "positive":
      return "bg-green-500/10 text-green-500";
    case "negative":
      return "bg-red-500/10 text-red-500";
    default:
      return "bg-yellow-500/10 text-yellow-500";
  }
};

export function MoodTracker(){
    const [selectedDay, setSelectDay] = useState <number | null>(null);

    return(
        <Card className="border-primary/10">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="space-y-1">
                        <CardTitle className="text-xl font-semibold flex items-center gap-2">
                            <Brain className="h-5 w-5 text-primary" />
                            Mood Insights
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                           Your emotional journey over time
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                            Daily
                        </Button>
                        <Button variant="outline" size="sm">
                            Week
                        </Button>
                        <Button variant="outline" size="sm">
                            Month
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
               <div>Hi</div>
            </CardContent>
        </Card>
    )
}