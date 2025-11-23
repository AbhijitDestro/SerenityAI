// Mock API functions for chat functionality

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  metadata?: {
    technique?: string;
    goal?: string;
  };
}

export interface ChatSession {
  sessionId: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

// Create a new chat session
export async function createChatSession(): Promise<string> {
  // In a real app, this would make an API call
  return Promise.resolve(`session_${Date.now()}`);
}

// Get chat history for a session
export async function getChatHistory(sessionId: string): Promise<ChatMessage[]> {
  // In a real app, this would make an API call
  return Promise.resolve([
    {
      role: "assistant",
      content: "Hello! I'm Serenity, your AI therapist. How can I help you today?",
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
    },
  ]);
}

// Send a message and get a response
export async function sendMessage(
  sessionId: string,
  message: string
): Promise<ChatMessage> {
  // In a real app, this would make an API call
  return Promise.resolve({
    role: "assistant",
    content: `I understand you're saying: "${message}". This is a mock response from the AI therapist.`,
    timestamp: new Date(),
  });
}

// Get all chat sessions for a user
export async function getAllChatSessions(): Promise<ChatSession[]> {
  // In a real app, this would make an API call
  return Promise.resolve([
    {
      sessionId: "session_1",
      messages: [],
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 23),
    },
    {
      sessionId: "session_2",
      messages: [],
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
      updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 1),
    },
  ]);
}