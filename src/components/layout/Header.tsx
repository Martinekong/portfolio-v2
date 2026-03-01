import {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

type NavItem =
  | {label: string; type: 'hash'; hash: string}
  | {label: string; type: 'route'; to: string};

const nav: NavItem[] = [
  {label: 'Projects', type: 'route', to: '/projects'},
  {label: 'Featured', type: 'hash', hash: '#featured'},
  {label: 'Skills', type: 'hash', hash: '#skills'},
  {label: 'About', type: 'hash', hash: '#about'},
  {label: 'Contact', type: 'hash', hash: '#contact'},
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

  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function handleLogoClick() {
    if (location.pathname !== '/') {
      navigate('/');
      scrollToTop();
      return;
    }

    scrollToTop();
  }

  function goToHash(hash: string) {
    if (location.pathname !== '/') {
      navigate('/' + hash);
      return;
    }

    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

  function handleNavClick(item: NavItem) {
    if (item.type === 'route') {
      navigate(item.to);
      return;
    }

    goToHash(item.hash);
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-4">
        <div className="bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-md">
          <div className="flex items-center justify-between px-5 py-3">
            <button
              type="button"
              onClick={handleLogoClick}
              className="text-strong hover:text-white transition cursor-pointer"
              aria-label="Go to home"
            >
              Martine Kongsrud
            </button>

            <nav className="hidden md:flex items-center gap-2">
              {nav.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavClick(item)}
                  className="nav-btn"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition"
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
          <button
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setOpen(false)}
            type="button"
          />

          <div className="relative mx-auto mt-24 max-w-6xl px-6">
            <div className="container-strong backdrop-blur-md p-4 shadow-xl">
              <div className="flex flex-col gap-2">
                {nav.map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      handleNavClick(item);
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
