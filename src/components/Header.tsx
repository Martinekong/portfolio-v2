import {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

type NavItem = {label: string; hash: string};

const nav: NavItem[] = [
  {label: 'Projects', hash: '#projects'},
  {label: 'Skills', hash: '#skills'},
  {label: 'About', hash: '#about'},
  {label: 'Contact', hash: '#contact'},
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  function goToHash(hash: string) {
    if (location.pathname !== '/') {
      navigate('/' + hash);
      return;
    }

    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function handleLogoClick() {
    if (location.pathname !== '/') {
      navigate('/');
      window.scrollTo({top: 0, behavior: 'smooth'});
      return;
    }

    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <div className="rounded-full border border-white/12 bg-white/6 backdrop-blur-md shadow-md">
          <div className="flex items-center justify-between px-5 py-3">
            <button
              type="button"
              onClick={handleLogoClick}
              className="font-medium tracking-wider text-white/90 hover:text-white transition cursor-pointer"
              aria-label="Go to home"
            >
              Martine Kongsrud
            </button>

            <nav className="hidden md:flex items-center gap-2">
              {nav.map((item) => (
                <button
                  key={item.hash}
                  type="button"
                  onClick={() => goToHash(item.hash)}
                  className="rounded-full px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/8 transition cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/5 hover:bg-white/10 transition"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setOpen(false)}
          />

          <div className="relative mx-auto mt-24 max-w-6xl px-6">
            <div className="rounded-3xl border border-white/12 bg-white/8 backdrop-blur-md p-4 shadow-xl">
              <div className="flex flex-col gap-2">
                {nav.map((item) => (
                  <button
                    key={item.hash}
                    type="button"
                    onClick={() => {
                      goToHash(item.hash);
                      setOpen(false);
                    }}
                    className="w-full rounded-2xl px-4 py-3 text-left text-white/90 hover:bg-white/10 transition"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div className="mt-3 border-t border-white/10 pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    scrollToTop();
                  }}
                  className="rounded-2xl px-4 py-3 text-white/70 hover:bg-white/10 hover:text-white transition w-full"
                >
                  Back to top
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
