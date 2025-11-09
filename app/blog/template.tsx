export default function BlogTemplate({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>Cabeçalho do Template do Blog</header>
      {children}
      <footer>Rodapé do Template do Blog</footer>
    </div>
  );
}
