export function isMobile() {
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
  const windowNavigator = window.navigator;
  if ("maxTouchPoints" in windowNavigator) {
    return navigator.maxTouchPoints > 0;
  } else if ("msMaxTouchPoints" in navigator) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (navigator as any).msMaxTouchPoints > 0;
  } else {
    const mQ = matchMedia?.("(pointer:coarse)");
    if (mQ?.media === "(pointer:coarse)") {
      return !!mQ.matches;
    } else if ("orientation" in window) {
      return true; // deprecated, but good fallback
    } else {
      // Only as a last resort, fall back to user agent sniffing
      const UA = (window as Window).navigator.userAgent;
      return (
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
      );
    }
  }
}
