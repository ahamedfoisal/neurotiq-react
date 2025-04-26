import axios from 'axios';
import { BrainWaveData, AnalysisReport } from '../types';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const analyzeData = async (data: BrainWaveData): Promise<AnalysisReport> => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, data);
    return response.data;
  } catch (error) {
    console.error('Error analyzing data:', error);
    // Return mock data for now
    return {
      report: "Based on the analysis, there are signs of mild anxiety with some attention-related challenges. The data suggests implementing regular mindfulness practices and organizational strategies would be beneficial.",
      recommendations: [
        "Practice deep breathing exercises for 5 minutes daily",
        "Maintain a consistent sleep schedule",
        "Break tasks into smaller, manageable chunks",
        "Take regular breaks during focused work",
        "Consider speaking with a mental health professional",
      ],
    };
  }
}; 