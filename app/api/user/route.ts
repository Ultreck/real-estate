import { NextRequest, NextResponse } from "next/server";


let mockedData = {
    name: "Emma",
    role: "admin", // Default role
};

export async function GET(req: NextRequest) {
    const name = req.headers.get("x-name") || mockedData.name;
    const role = req.headers.get("x-role") || mockedData.role;

    return NextResponse.json({name, role});
};

export async function PUT(req: NextRequest) {
    const data = await req.json();
    const { name, role } = data;

    if(!role && !["admin", "landlord", "renter", "public"].includes(role)) {
        return NextResponse.json({ error: "Invalid role" }, { status: 400 });
    }
    if (name) {
        mockedData.name = name;
    }

    if (role && ["admin", "landlord", "renter", "public"].includes(role)) {
        mockedData.role = role;
    };


    return NextResponse.json({ message: "User updated successfully", user: mockedData });
}