import Circle from './Circle';

function AppCircle() {
  return (
    <div>
      <Circle borderColor="yellow" bgColor="teal" />
      <Circle text="im here" bgColor="tomato" />
    </div>
  );
}

// 3-2
// Typing the Props

// Prop Types는 prop이 거기에 있는지 없는지 확인해주지만, 코드를 실행한 '후'에만 확인 가능하다
// 우리가 TypeScript를 사용하는 이유는 코드가 실행되기 '전'에 오류를 확인하기 위해서이다
// 그래서 Prop Types를 사용하지 않을 것임
// 우리의 prop들을 TypeScript로 보호해줄 것이다
