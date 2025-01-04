import { prisma } from "@/lib/prisma";

export default async function NotesPage() {
	const notes = await prisma.note.findMany();
	return (
		<div>
			<h1>Your notes</h1>
			{notes.length === 0 ? (
				<p>No notes found.</p>
			) : (
				<ul>
					{notes.map((note) => (
						<li key={note.id}>
							<a href={`/notes/${note.id}`}>
								<p>{note.title}</p>
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
