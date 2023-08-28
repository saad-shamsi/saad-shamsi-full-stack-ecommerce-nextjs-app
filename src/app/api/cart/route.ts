import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/drizzle";
import { cartColumns } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";

// POST API request
export const POST = async (request: NextRequest) => {
  const req = await request.json();

  try {
    const res = await db
      .insert(cartColumns)
      .values({
        user_id: req.user_id,
        product_id: req.product_id,
        product_title: req.product_title,
        image_url: req.image_url,
        product_price: req.product_price,
        product_quantity: req.product_quantity,
      })
      .onConflictDoUpdate({
        target: [cartColumns.product_title, cartColumns.user_id],
        set: {
          product_quantity: req.product_quantity,
          product_price: req.product_price,
        },
      })
      .returning();
    return NextResponse.json({ res });
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
};
// GET API request
export async function GET(request: NextRequest) {
  const uid = request.nextUrl.searchParams.get("user_id") as string;
  try {
    const res = await db
      .select()
      .from(cartColumns)
      .where(eq(cartColumns.user_id, uid));
    return NextResponse.json(res);
  } catch (error: any) {
    return NextResponse.json({ message: error.message });
  }
}

// PUT API request
export async function PUT(request: NextRequest) {
  const data = await request.json();
  try {
    if (data) {
      const res = await db
        .update(cartColumns)
        .set({
          product_quantity: data.product_quantity,
          product_price: data.product_price,
        })
        .where(
          and(
            eq(cartColumns.user_id, data.user_id),
            eq(cartColumns.product_title, data.product_title)
          )
        );
      return NextResponse.json({ message: "data updated successfully" });
    } else {
      return NextResponse.json({ message: "data not updated" });
    }
  } catch (error: any) {
    console.log("error occured ", error);
    return NextResponse.json({ message: error.message, status: error.status });
  }
}

// DELETE API request
export async function DELETE(request: NextRequest) {
  const req = await request.json();
  try {
    const res = await db
      .delete(cartColumns)
      .where(
        and(
          eq(cartColumns.user_id, req.user_id),
          eq(cartColumns.product_title, req.product_title)
        )
      )
      .returning();
    console.log("res: " + res);
    return NextResponse.json(res); // Return the response data directly
  } catch (error: any) {
    console.log("error occured ", error);
    return NextResponse.json({ message: error.message, status: error.status });
  }
}
// import { NextRequest, NextResponse } from "next/server";
// import { db, cartTable } from "@/lib/drizzle";
// import { v4 as uuid } from "uuid";
// import { cookies } from "next/headers";
// export async function GET(request: NextRequest) {
//   // const cookieStore = cookies();
//   try {

//     const res = await db.select().from(cartTable);

//     return NextResponse.json({ res });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "something went wrong" });
//   }
// }

// export const POST = async (request: NextRequest) => {
//   const req = await request.json();
//   const uid = uuid();
//   const setcookies = cookies();
//   const user_id = cookies().get("user_id")?.value;
//   if (!user_id) {
//     setcookies.set("user_id", uid);
//   }

//   try {
//     const res = await db
//       .insert(cartTable)
//       .values({
//         product_id: req.product_id,
//         quantity: 1,
//         user_id: cookies().get("user_id")?.value as string,
//       })
//       .returning();
//     return NextResponse.json({ res });
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json({ message: "something went wrong" });
//   }
// };
