export default function BlogLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>Cabeçalho do Blog</header>
      {children}
      <footer>Rodapé do Blog</footer>
    </div>
  );
}
