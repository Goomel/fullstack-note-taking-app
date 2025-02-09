import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SignInForm from "@/app/components/form/SignInForm";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

// Mock the next-auth signIn function
jest.mock("next-auth/react", () => ({
	signIn: jest.fn(),
}));

// Mock the next/navigation useRouter hook
jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}));

describe("SignInForm", () => {
	const mockPush = jest.fn();
	const mockRefresh = jest.fn();

	beforeEach(() => {
		(useRouter as jest.Mock).mockReturnValue({
			push: mockPush,
			refresh: mockRefresh,
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it("renders the form fields and submit button", () => {
		render(<SignInForm />);

		expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /sign in/i })
		).toBeInTheDocument();
	});

	it("shows correct validation messages", async () => {
		render(<SignInForm />);

		const signInButton = screen.getByRole("button", { name: /sign in/i });

		fireEvent.click(signInButton);

		await waitFor(() => {
			expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
			expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
		});

		fireEvent.change(screen.getByLabelText(/password/i), {
			target: { value: "short" },
		});

		await waitFor(() => {
			expect(
				screen.getByText(/Password must be at least 6 characters long/i)
			).toBeInTheDocument();
		});

		fireEvent.change(screen.getByLabelText(/e-mail/i), {
			target: { value: "test@example.com" },
		});
		fireEvent.change(screen.getByLabelText(/password/i), {
			target: { value: "password" },
		});
		fireEvent.click(signInButton);

		await waitFor(() => {
			expect(
				screen.queryByText(/invalid email address/i)
			).not.toBeInTheDocument();
			expect(
				screen.queryByText(/password is required/i)
			).not.toBeInTheDocument();
			expect(
				screen.queryByText(/Password must be at least 6 characters long/i)
			).not.toBeInTheDocument();
		});
	});

	it("shows an error message when the sign-in fails", async () => {
		(signIn as jest.Mock).mockResolvedValueOnce({ ok: false });

		render(<SignInForm />);

		fireEvent.change(screen.getByLabelText(/e-mail/i), {
			target: { value: "test@example.com" },
		});
		fireEvent.change(screen.getByLabelText(/password/i), {
			target: { value: "password" },
		});

		fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

		await waitFor(() =>
			expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument()
		);
	});

	it("redirects to the home page on successful sign-in", async () => {
		(signIn as jest.Mock).mockResolvedValueOnce({ ok: true });

		render(<SignInForm />);

		fireEvent.change(screen.getByLabelText(/e-mail/i), {
			target: { value: "test@example.com" },
		});
		fireEvent.change(screen.getByLabelText(/password/i), {
			target: { value: "password" },
		});

		fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

		await waitFor(() => expect(mockPush).toHaveBeenCalledWith("/"));
		expect(mockRefresh).toHaveBeenCalled();
	});
});
