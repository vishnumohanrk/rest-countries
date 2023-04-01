export function FormContainer({ children }: { children: React.ReactNode }) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="justify-between py-6 max-md:text-sm md:flex md:py-8 xl:py-10"
    >
      {children}
    </form>
  );
}
