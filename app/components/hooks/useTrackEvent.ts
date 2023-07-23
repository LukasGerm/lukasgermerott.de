export const useTrackEvent = () => {
  return (label: string, contentName?: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", label, {
        event_category: contentName,
      });
    }
  };
};
