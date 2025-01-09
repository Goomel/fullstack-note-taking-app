import { prisma } from "@/lib/prisma";

interface Params {
	params: Promise<{
		id: string;
	}>;
}

export default async function NotePage(props: Params) {
    const params = await props.params;
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
