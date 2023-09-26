import { NextResponse } from "next/server";
import product from "@/product.json";

export async function GET() {
  return NextResponse.json(product);
}
