import AccountForm from "./components/AccountForm";
AccountForm;

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-20 bg-white">
			<AccountForm />
		</main>
	);
}
