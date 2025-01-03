import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
	try {
		const userRecord = await prisma.user.findFirst();

		if (userRecord) {
			console.log(userRecord);
			return new Response(JSON.stringify(userRecord), { status: 200 });
		} else {
			return new Response("No records", { status: 404 });
		}
	} catch (error) {
		console.error(error);
		return new Response("Error", { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
}
