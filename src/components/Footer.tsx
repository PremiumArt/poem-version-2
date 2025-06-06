import { Heart, Feather } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="text-center py-6 border-t border-amber-900/20 mt-auto">
      <div className="flex items-center justify-center gap-2">
        <span className="text-amber-200/80">صُمم بكل</span>
        <Heart className="h-4 w-4 text-red-400 animate-pulse" />
        <span className="text-amber-200/80">للأدب العربي</span>
      </div>
      <div className="flex items-center justify-center gap-2 mt-2">
        <Feather className="h-4 w-4 text-amber-400" />
        <p className="text-sm text-amber-200/60">
          مستكشف الشعر العربي - ٢٠٢٥
        </p>
      </div>
    </footer>
  );
};