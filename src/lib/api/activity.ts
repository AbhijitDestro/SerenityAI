// Mock API functions for activity logging

export interface Activity {
  id: string;
  userId: string | null;
  type: string;
  name: string;
  description: string | null;
  timestamp: Date;
  duration: number | null;
  completed: boolean;
  moodScore: number | null;
  moodNote: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface LogActivityParams {
  type: string;
  name: string;
  description?: string;
  duration?: number;
}

// Log a new activity
export async function logActivity(params: LogActivityParams): Promise<Activity> {
  // In a real app, this would make an API call
  const activity: Activity = {
    id: `activity_${Date.now()}`,
    userId: null,
    type: params.type,
    name: params.name,
    description: params.description || null,
    timestamp: new Date(),
    duration: params.duration || null,
    completed: true,
    moodScore: null,
    moodNote: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Promise.resolve(activity);
}

// Get all activities for a user
export async function getActivities(): Promise<Activity[]> {
  // In a real app, this would make an API call
  return Promise.resolve([]);
}