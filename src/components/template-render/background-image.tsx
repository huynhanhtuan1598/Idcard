import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

interface Props {
  background: string;
  isDemo?: boolean;
}

const useStyle = makeStyles({
  '@keyframes animation': {
    '0%': {
      top: 0,
    },
    300: {
      top: ({ top }: { top: number }) => -top * 0.6,
    },
    '100%': {
      // top: -top * 0.1,
      top: ({ top }: { top: number }) => -top * 0.1,
    },
  },

  wrap: {
    inset: 0,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    animation: `$animation linear`,
  },

  img: {
    display: 'block',
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
});
function BackgroundImage({ background, isDemo = true }: Props) {
  const [top, setTop] = useState<number>(0);

  const classes = useStyle({ top });

  useEffect(() => {
    function handleScroll() {
      setTop(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={classes.wrap}
      style={{
        position: isDemo ? 'absolute' : 'fixed',
        top: top < 300 ? -top * 0.6 : -300,
      }}
    >
      <img src={background} alt="" className={classes.img} />
    </div>
  );
}

export { BackgroundImage };
