export default function Footer() {
  return (
    <footer className="mt-50 border-t border-white/10">
      <div className="mx-auto max-w-6xl text-center text-sm text-white/60 px-6 py-10">
        <p>&copy; {new Date().getFullYear()} Martine Kongsrud</p>
      </div>
    </footer>
  );
}
