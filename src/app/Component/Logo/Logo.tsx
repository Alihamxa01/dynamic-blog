export default function Home() {
    const gradientTextStyle = {
      fontSize: '4rem',
      fontWeight: 'bold',
      background: `linear-gradient(
        to right,
       #ff5733,
#33ff57,
#5733ff,
#ff33a1,
#33a1ff,
#a133ff,
#ff5733
      )`,
      backgroundSize: '400% auto',
      color: 'transparent',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      animation: 'smoothGradient 15s linear infinite',
    };
  
    const keyframes = `
      @keyframes smoothGradient {
        0% {
          background-position: 0% center;
        }
        100% {
          background-position: -400% center;
        }
      }
    `;
  
    return (
      <main className="text-left flex flex-col  justify-start ">
        {/* Add keyframes directly in a style tag */}
        <style>{keyframes}</style>
  
        <h1 style={{ ...gradientTextStyle, animationDuration: '20s' }} className="text-left text-6xl ">
      RealUpdates
        </h1>
        <p className="text-bold text-sm opacity-45 underline italic underline-offset-4 text-center sm:text-left">Where Real Stories Meet Real Updates</p>
       
      </main>
    );
  }
  