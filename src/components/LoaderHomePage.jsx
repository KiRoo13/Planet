import ContentLoader from "react-content-loader";

function LoaderHomePage() {
   return ( 
      <ContentLoader
      height="500"
      width="500"
      viewBox="0 0 265 230"
      backgroundColor="#444444"
      foregroundColor="#888888"
    >
      <rect x="15" y="15" rx="4" ry="4" width="350" height="25" />
      <rect x="15" y="50" rx="2" ry="2" width="350" height="150" />
      <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
      <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
    </ContentLoader>
    );
}

export default LoaderHomePage;