import { NextResponse } from "next/server";
import product from "@/product.json";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const productRes = product.filter((p) => p.id.toString() === id);

  if (!productRes || product.length === 0) {
    let error_reponse = {
      status: "fail",
      message: "product not found with the id provided",
    };

    return new NextResponse(JSON.stringify(error_reponse), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  let json_response = {
    status: "sucess",
    data: {
      productRes,
    },
  };

  return NextResponse.json(json_response);
}
