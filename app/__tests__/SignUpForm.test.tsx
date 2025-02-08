import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SignUpForm from "@/app/components/form/SignUpForm";
import { registerUser } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

// Mock the registerUser function
jest.mock("@/app/actions/auth.ts", () => ({
	registerUser: jest.fn(),
}));

// Mock the next/navigation useRouter hook
jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}));

describe("SignUpForm", () => {
	const mockPush = jest.fn();

	beforeEach(() => {
		(useRouter as jest.Mock).mockReturnValue({
			push: mockPush,
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders the form fields and submit button", () => {
		render(<SignUpForm />);

		expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /sign up/i })
		).toBeInTheDocument();
	});

	it("shows an error message when the registration fails", async () => {
		(registerUser as jest.Mock).mockResolvedValueOnce(null);

		render(<SignUpForm />);

		fireEvent.change(screen.getByLabelText(/username/i), {
			target: { value: "testuser" },
		});
		fireEvent.change(screen.getByLabelText(/e-mail/i), {
			target: { value: "test@example.com" },
		});
		fireEvent.change(screen.getByLabelText(/password/i), {
			target: { value: "password" },
		});

		fireEvent.click(screen.getByRole("button", { name: /sign up/i }));

		await waitFor(() =>
			expect(screen.getByText(/error during registration/i)).toBeInTheDocument()
		);
	});

	it("redirects to the home page on successful registration", async () => {
		(registerUser as jest.Mock).mockResolvedValueOnce({ user: { id: 1 } });

		render(<SignUpForm />);

		fireEvent.change(screen.getByLabelText(/username/i), {
			target: { value: "testuser" },
		});
		fireEvent.change(screen.getByLabelText(/e-mail/i), {
			target: { value: "test@example.com" },
		});
		fireEvent.change(screen.getByLabelText(/password/i), {
			target: { value: "password" },
		});

		fireEvent.click(screen.getByRole("button", { name: /sign up/i }));

		await waitFor(() => expect(mockPush).toHaveBeenCalledWith("/"));
	});
});
