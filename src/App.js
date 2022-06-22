import TextAnimations from "./Animations/TextAnimations";
import MainHeader from "./MainPageComponents/Header";
import MainBody from "./MainPageComponents/Body";


function MainPage() {
  return (
    <div>
      <MainHeader></MainHeader>
      <TextAnimations></TextAnimations>
      <MainBody></MainBody>
      <p>Unless you dont find what you need, in which case you can go to the about section and contact me personally</p>
    </div>
  );
}

export default MainPage;
