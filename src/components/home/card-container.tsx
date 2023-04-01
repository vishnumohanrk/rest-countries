type CardContainerProps = {
  isPending: boolean;
  children: React.ReactNode;
};

export function CardContainer({ children, isPending }: CardContainerProps) {
  return (
    <section
      className={`transition-opacity ${
        isPending ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <h2 className="sr-only">Country List</h2>
      <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:gap-10 xl:grid-cols-4">
        {children}
      </ul>
    </section>
  );
}
