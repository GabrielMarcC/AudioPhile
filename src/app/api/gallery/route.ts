import { getGallery } from "@/firebase/getGallery";

export async function GET() {
  const res = await fetch(`https://audiophile-api.firebaseapp.com/gallery`, {
    headers: {
      "Content-Type": "application/json",
      "API-KEY": `${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });
  const data = await res.json();
  console.log(data);

  return Response.json({ data });
}
