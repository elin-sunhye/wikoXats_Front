export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div style={{ position: 'relative', zIndex: '999' }}>{children}</div>;
}
