import { prisma } from "@/lib/prisma";

interface Params {
	params: {
		id: string;
	};
}

export default async function NotePage({ params }: Params) {
	const note = await prisma.note.findUnique({
		where: {
			id: await params.id,
		},
	});
	return (
		<div>
			<h1>Note: {note?.title}</h1>
			<p>{note?.content}</p>
		</div>
	);
}
