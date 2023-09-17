import SideNavigation from "@components/navigation/sidenav.component";
import TopNavigation from "@components/navigation/topnav.component";

export default function OnBoardingLayout({ children }) {
  return (
    <>
      <SideNavigation />
      <TopNavigation />
      {children}
    </>
  );
}
