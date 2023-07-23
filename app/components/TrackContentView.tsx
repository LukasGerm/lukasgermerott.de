import { useTrackEvent } from "./hooks/useTrackEvent";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const useTrackContentView = (contentName: string) => {
  const trackEvent = useTrackEvent();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      trackEvent("content_view", contentName);
    }
  }, [inView]);

  return { ref };
};

export const TrackContentView = (
  props: React.PropsWithChildren<{ contentName: string }>
) => {
  const { ref } = useTrackContentView(props.contentName);

  return <div ref={ref}>{props.children}</div>;
};
