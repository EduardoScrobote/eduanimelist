import { useMediaQuery } from "react-responsive";

interface DeviceInfo {
  isDesktopOrLaptop: boolean;
  isBigScreen: boolean;
  isTabletOrMobile: boolean;
  isPortrait: boolean;
  isRetina: boolean;
}

const DeviceInfoComponent: () => DeviceInfo = () => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return {
    isDesktopOrLaptop,
    isBigScreen,
    isTabletOrMobile,
    isPortrait,
    isRetina,
  };
};

export default DeviceInfoComponent;
