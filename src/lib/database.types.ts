export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          category: string;
          description: string;
          features: string;
          id: number;
          img_1: string;
          img_2: string;
          img_3: string;
          img_desktop: string;
          img_home: string;
          img_product: string;
          img_tablet: string;
          includes: Json;
          name: string;
          new: boolean;
          price: number;
        };
        Insert: {
          category?: string | null;
          description?: string | null;
          features?: string | null;
          id?: number;
          img_1?: string | null;
          img_2?: string | null;
          img_3?: string | null;
          img_desktop?: string | null;
          img_home?: string | null;
          img_product?: string | null;
          img_tablet?: string | null;
          includes?: Json | null;
          name?: string | null;
          new?: boolean | null;
          price?: number | null;
        };
        Update: {
          category?: string | null;
          description?: string | null;
          features?: string | null;
          id?: number;
          img_1?: string | null;
          img_2?: string | null;
          img_3?: string | null;
          img_desktop?: string | null;
          img_home?: string | null;
          img_product?: string | null;
          img_tablet?: string | null;
          includes?: Json | null;
          name?: string | null;
          new?: boolean | null;
          price?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
