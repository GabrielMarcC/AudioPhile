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
      gallery: {
        Row: {
          id: number;
          img_1: string;
          img_2: string;
          img_3: string;
          img_home: string;
          img_product: string;
          img_tablet: string;
          img_desktop:string;
          name: string;
          category: string;
        };
        Insert: {
          id?: number;
          img_1?: string;
          img_2?: string;
          img_3?: string;
          img_home: string;
          img_product?: string;
          name?: string;
          category?: string;
          img_tablet?: string;
          img_desktop:string;
        };
        Update: {
          id?: number;
          img_1?: string;
          img_2?: string;
          img_3?: string;
          img_home?: string;
          img_product?: string;
          name?: string;
          category?: string;
          img_tablet?: string;
          img_desktop:string;
        };
        Relationships: [];
      };
      products: {
        Row: {
          category: string 
          description: string 
          features: string 
          id: number;
          includes: Json 
          name: string 
          new: boolean 
          price: number 
        };
        Insert: {
          category?: string | null;
          description?: string | null;
          features?: string | null;
          id?: number;
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
