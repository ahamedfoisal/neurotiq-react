export interface BrainWaveData {
  depression: number;
  anxiety: number;
  schizophrenia: number;
  adhd: number;
}

export interface DiseaseClassification {
  value: number;
  severity: string;
}

export interface AnalysisReport {
  report: string;
  recommendations: string[];
} 