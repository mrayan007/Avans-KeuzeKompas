export default function Layout({ children }: { children: any }) {
  return (
    <div className="h-screen w-screen relative">
      {children}
    </div>
  );
}
