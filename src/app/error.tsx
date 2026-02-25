"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h2 className="text-2xl font-bold text-navy-900 mb-4">Something went wrong!</h2>
      <p className="text-charcoal-500 mb-6 text-center">
        We encountered an unexpected error. Please try again.
      </p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-gradient-gold text-navy-900 font-semibold rounded-lg hover:shadow-gold transition-all"
      >
        Try again
      </button>
    </div>
  );
}
