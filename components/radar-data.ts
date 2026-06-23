import radar from "@/data/radar.json";

export type RadarItem = {
  tag: string;
  title: string;
  summary: string;
  why?: string;
  source_name: string;
  source_url: string;
  date?: string;
};

export type RadarData = {
  generated_at: string;
  generated_by: string;
  method: string;
  note?: string;
  items: RadarItem[];
};

export const radarData = radar as RadarData;
