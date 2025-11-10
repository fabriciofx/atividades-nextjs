import OlaMundo from '@/src/components/ola-mundo/OlaMundo';
import ThemeProvider from '@/src/components/theme/ThemeProvider';

export default function ThemePage() {
  return (
    <ThemeProvider>
      <OlaMundo />
    </ThemeProvider>
  );
}
