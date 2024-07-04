// import { useState } from 'react';
import styled from 'styled-components';

// // 3-2
// // Typing the Props

// interface CircleProps {
//   bgColor: string;
// }

// const Container = styled.div<CircleProps>`
//   width: 200px;
//   height: 200px;
//   background-color: ${(props) => props.bgColor};
//   border-radius: 100px;
// `;

// // interface CircleProps {
// //   bgColor: string;
// // }

// // 이 bgColor의 타입은 CircleProps의 object 이다 라고 말해주고 있는 것임
// // function Circle(props: CircleProps) {
// function Circle({ bgColor }: CircleProps) {
//   // return <Container bgColor={props.bgColor}></Container>;
//   return <Container bgColor={bgColor}></Container>;
// }

// export default Circle;

// ////////////////////////////////////////////////
// // 예시
// interface PlayerShape {
//   name: string;
//   age: number;
// }

// const sayHello = (playlerObj: PlayerShape) => `
// Hello ${playlerObj.name} you are ${playlerObj.age} years old.
// `;

// sayHello({ name: 'nico', age: 12 });
// sayHello({ name: 'hi', age: 12 });

// // 1. 어떻게 우리 자신과 props를 interface를 사용하여 보호하는지

////////////////////////////////////////////////
// 3-3
// ✅ Optional Props
// ✅ default props

// Container에서는 borderColor가 required
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

// styled-components 에서는 borderColor가 required
// 이기 때문에 여기서 반드시 색깔을 지정해줘야 한다 그래서 에러 남
// 그래서 default 값 지정해줌
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
`;

// Circle에서는 borderColor가 Optional
interface CircleProps {
  bgColor: string; // is required
  borderColor?: string; // Optional
  // or borderColor?: string | undefined 직접써줘도 되지만 ? 하는 것이 간편
  text?: string;
}

// default 값을 argument에서 설정 가능 - 타입스크립트는 아님
// 만약 text가 존재하지 않는다면, default text 라고 뜰것임
function Circle({ bgColor, borderColor, text = 'default text' }: CircleProps) {
  return (
    <Container
      bgColor={bgColor}
      // borderColor={borderColor ?? 'white'}
      borderColor={borderColor ?? bgColor}
    >
      {text}
    </Container>
  );
}

export default Circle;

// 한 쪽에선 string 또는 undefined 될 수 있다는 것을 TypeScirpt가 알고 있음
// 한 쪽 동그라미에선 borderColor가 yellow 가 될 것이라는 것을 안다
// 하지만 한 쪽에선 undefined 될 수도 있다는 것을 아는 것
// 그럴 때 default 값을 준다
// borderColor는 사용자가 만든 borderColor 값이며,
// 만약 undefined 된 상태라면 그냥 yellow 값을 보낸다
// 또는 만약 undefined 된 상태라면 borderColor는 bgColor와 같은 값을 가진다

////////////////////////////////////////////////
// // 3-4
// // State

// interface ContainerProps {
//   bgColor: string;
//   borderColor: string;
// }

// const Container = styled.div<ContainerProps>`
//   width: 200px;
//   height: 200px;
//   background-color: ${(props) => props.bgColor};
//   border-radius: 100px;
//   border: 1px solid ${(props) => props.borderColor};
// `;

// interface CircleProps {
//   bgColor: string;
//   borderColor?: string;

//   text?: string;
// }

// function Circle({ bgColor, borderColor, text = 'default text' }: CircleProps) {
//   // const [counter, setCounter] = useState(1)
//   const [value, setValue] = useState<number | string>(0); // 이것도 가능
//   setValue(2);
//   setValue('hello');
//   setValue(true);
//   return (
//     <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
//       {text}
//     </Container>
//   );
// }

// export default Circle;
