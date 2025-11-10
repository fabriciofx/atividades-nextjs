import OlaMundo from '@/components/ola-mundo/OlaMundo';
import ThemeProvider from '@/components/theme/ThemeProvider';

export default function ThemePage() {
  return (
    <ThemeProvider>
      <OlaMundo />
    </ThemeProvider>
  );
}
