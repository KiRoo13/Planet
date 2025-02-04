import ContentLoader from "react-content-loader";

function LoaderCard() {
  return (
    <>
      <ContentLoader
        speed={2}
        width={345}
        height={490}
        viewBox="0 0 400 460"
        backgroundColor="#444444"
        foregroundColor="#888888"
      >
        <rect x="0" y="60" rx="2" ry="2" width="345" height="490" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={345}
        height={490}
        viewBox="0 0 400 460"
        backgroundColor="#444444"
        foregroundColor="#888888"
      >
        <rect x="0" y="60" rx="2" ry="2" width="345" height="490" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={345}
        height={490}
        viewBox="0 0 400 460"
        backgroundColor="#444444"
        foregroundColor="#888888"
      >
        <rect x="0" y="60" rx="2" ry="2" width="345" height="490" />
      </ContentLoader>
    </>
  );
}

export default LoaderCard;
